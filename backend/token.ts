import { randomBytes, createCipheriv, createDecipheriv } from "crypto";
import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
config();
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;
import { checkPreviousAvailableToken, loadData, saveData } from "./rateLimiter";
import { Worker } from "cluster";

//! Encrypt token

function encryptToken(text: string) {
  if (!ENCRYPTION_KEY) throw new Error("ENCRYPTION_KEY not configured");
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY!),
    iv
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decryptToken(text: string) {
  if (!ENCRYPTION_KEY) throw new Error("ENCRYPTION_KEY not configured");
  const [ivPart, encryptedText] = text.split(":");
  const iv = Buffer.from(ivPart, "hex");
  const decipher = createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY!),
    iv
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString();
}

export function generateEncryptedToken(
  req: Request,
  remaining?: number
): string {
  const tokenData = {
    remaining: remaining ?? 1,
    ip: req.ip || req.socket.remoteAddress || "unknown",
    timestamp: Date.now(),
    userAgent: req.headers["user-agent"] || "",
  };
  console.log("token data formed here -> generateEncryptedToken", tokenData);
  return encryptToken(JSON.stringify(tokenData));
}

export function setEncryptedToken(res: Response, token: string): void {
  res.cookie("formToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });
  console.log("Set cookie with token:", token);
  return;

  // ! below code won't work because the async nature of the file reading and writing which is I/O operation and uses libuv under the hood ,
  //! so the writing will be delayed while the trpc is sync and has a single flow

  // const submissionCounts = new Map() as Map<
  //   string,
  //   { count: number; timestamp: ReturnType<typeof Date.now> }
  // >;
  // submissionCounts.set(token, { count: 1, timestamp: Date.now() });
  // await saveData(submissionCounts);
}

export async function verifyToken(req: Request): Promise<{
  isValid: boolean;
  data?: any;
  rateLimitExceeded?: boolean;
  remaining: number;
  tokenString?: string;
}> {
  const token = req.cookies.formToken;

  const {
    tokenString: tokenFromPreviousEntry,
    attemptsExceeded,
    newUser,
    transferredCount,
    remaining,
  } = await checkPreviousAvailableToken(req);
  console.log("verifyToken -> checkPreviousAvailableToken", {
    attemptsExceeded,
    newUser,
    transferredCount,
    remaining,
  });
  if (attemptsExceeded) {
    return {
      isValid: true,
      rateLimitExceeded: true,
      remaining: remaining ?? 0,
    };
  }
  if (!token && newUser && !transferredCount)
    return {
      isValid: false,
      remaining: remaining ?? 0,
      rateLimitExceeded: attemptsExceeded,
    };
  if (!newUser && transferredCount) {
    return {
      isValid: true,
      remaining: remaining ?? 0,
      rateLimitExceeded: attemptsExceeded,
      tokenString: tokenFromPreviousEntry,
    };
  }
  try {
    const decrypted = decryptToken(token);
    const tokenData = JSON.parse(decrypted);
    const tokenAge = Date.now() - tokenData.timestamp;

    if (tokenAge > 24 * 60 * 60 * 1000) {
      return {
        isValid: true,
        remaining: remaining ?? 0,
        rateLimitExceeded: attemptsExceeded,
      };
    }

    // Optional: Further checks can be added here (e.g., IP match)
    return {
      isValid: true,
      data: tokenData,
      rateLimitExceeded: attemptsExceeded,
      remaining: remaining ?? 0,
    };
  } catch (err) {
    return {
      isValid: false,
      remaining: remaining ?? 0,
      rateLimitExceeded: attemptsExceeded,
    };
  }
}
