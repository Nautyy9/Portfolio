import { Request } from "express";
import fs from "fs/promises";
import path from "path";

const storagePath = path.join(process.cwd(), "rate-limit-data.json");

type prevAvailTokenType = {
  attemptsExceeded: boolean;
  transferredCount: boolean;
  newUser: boolean;
  remaining: number | undefined;
  tokenString?: string;
};

export async function loadData() {
  try {
    const data = await fs.readFile(storagePath, "utf8");
    return new Map(JSON.parse(data)) as Map<
      string,
      { count: number; timestamp: number; ip: string; userAgent: string }
    >;
  } catch {
    return new Map() as Map<
      string,
      { count: number; timestamp: number; ip: string; userAgent: string }
    >;
  }
}

export async function saveData(data: Map<string, any>) {
  await fs.writeFile(storagePath, JSON.stringify(Array.from(data.entries())));
}

// export async function checkRateLimit(
//   req: Request
// ): Promise<{ allowed: boolean; remaining?: number }> {
//   const submissionCounts = await loadData();
//   console.log("checkRateLimit before", submissionCounts);

//   const token = req.cookies.formToken;
//   if (!token) return { allowed: true, remaining: 1 };

//   const now = Date.now();
//   const windowMs = 24 * 60 * 60 * 1000;

//   let data = submissionCounts.get(token);
//   console.log("data from rateLimiter", data);
//   if (!data || now - data.timestamp > windowMs) {
//     // ! !data case is impossible because if no token it will return earlier since the submission count is tied to the token, so it will only run for the second condition
//     //! which is 1 day passed since the last submission with that token , now we need to reset the count to 0 since now we give the user 2 more new submissions
//     data = {
//       count: 0,
//       timestamp: now,
//       ip: req.ip || req.socket.remoteAddress || "unknown",
//       userAgent: req.headers["user-agent"] || "",
//     };
//     submissionCounts.set(token, data);
//   }

//   //! here the remaining should 1- -> because max 2 submissions allowed , so for the 2 attempts 1 will be used when the token is created and the other 1 will be used when another submission is made
//   // const remaining = 1 - data.count;
//   console.log("remaining", submissionCounts);
//   await saveData(submissionCounts);
//   console.log("checkRateLimit", data);
//   const checkafter = await loadData();
//   console.log("checkRateLimit after", checkafter);
//   return { allowed: data.count >= 1, remaining: checkafter.get(token)?.count };
// }

export async function incrementSubmissionCount(
  req: Request,
  res: any,
  newToken: string
): Promise<void> {
  // const isTokenAvailableInCookies = req.cookies.formToken;

  const { attemptsExceeded } = await checkPreviousAvailableToken(req, newToken);

  // # the reason i am not using the return value of checkPreviousAvailableToken function is because the increementSubmissionCount function is called only when a new token is generated
  // # and for the new token the isTokenAvailableInCookies will be null since the previous token is deleted from the cookies and a new one is set therefore it was always return void

  //@ about the flow  , it is really simple the count and data will always be inccreemented by increementSubmissionCount function
  // @ when a new token is generated and the user never existed then it will return nothing since the user is new so the cookies won't be available for first time
  // @
  // @  the count will be transfered from the old token to the new token by checkPreviousAvailableToken function and then the count will be increemented by 1 by this function
  if (attemptsExceeded) {
    console.log("No token found, cannot increment submission count");
    return;
  }

  const submissionCounts = await loadData();
  const data = submissionCounts.get(newToken) || {
    count: 0,
    timestamp: Date.now(),
    ip: req.ip || req.socket.remoteAddress || "unknown",
    userAgent: req.headers["user-agent"] || "",
  };
  data.count += 1;
  console.log("incrementSubmissionCount", data);
  submissionCounts.set(newToken, data);
  console.log("incrementSubmissionCount after", submissionCounts);
  await saveData(submissionCounts);
}

export async function checkPreviousAvailableToken(
  req: Request,
  newlyCreatedToken?: string
): Promise<prevAvailTokenType> {
  const currentTokenDetails = {
    ip: req.ip || req.socket.remoteAddress || "unknown",
    // timestamp: Date.now(),
    userAgent: req.headers["user-agent"] || "",
  };
  const getDataFromFile = await loadData();
  const entries = Array.from(getDataFromFile.entries());

  const findAnyMatchingEntry = entries.filter(([_, value]) => {
    return (
      value.ip === currentTokenDetails.ip &&
      value.userAgent === currentTokenDetails.userAgent
    );
  });

  if (findAnyMatchingEntry.length > 0) {
    const [tokenString, tokenData] = findAnyMatchingEntry[0];

    const { count, ip, userAgent } = tokenData;

    if (
      currentTokenDetails.ip === ip &&
      currentTokenDetails.userAgent === userAgent
    ) {
      if (!newlyCreatedToken) {
        // ! this request comes from verifyToken function , which means the user is making a new request with a new token
        if (count >= 2) {
          // ! this means the user already used his 2 attempts and now trying to make a new request which is not allowed so we do nothing here
          console.log(
            "User already used all attempts, cannot create new token"
          );
          return {
            remaining: 0,
            attemptsExceeded: true,
            transferredCount: false,
            newUser: false,
          };
        } else {
          // ! this means the user is making a new request but still has some attempts left so we can allow him to make a new token

          // @ below one is good when we do have the token value but if it is null then we need to check the other way
          // const remainingEntries = entries.filter(([key, _]) => {
          //   return !findAnyMatchingEntry.some(
          //     ([matchedKey, _]) => matchedKey === key
          //   );
          // });
          //@ the other way to get the remaining entries when we don't have the token value
          // const remainingEntries = entries.filter(([key, value]) => {
          //   return (
          //     value.ip !== currentTokenDetails.ip &&
          //     value.userAgent !== currentTokenDetails.userAgent
          //   );
          // });
          // console.log("remainingEntries", remainingEntries);

          // const addCount = count + 1;
          // const data = new Map().set(tokenString, {
          //   count: addCount,
          //   timestamp: Date.now(),
          //   ip: req.ip || req.socket.remoteAddress || "unknown",
          //   userAgent: req.headers["user-agent"] || "",
          // });
          // await saveData(data);
          // console.log(
          //   "Instead of deleting the old token entry just update the count in the file, since we have token stored in the file always so there is no need to delete the old entry just return that token again to the frontend"
          // );

          return {
            attemptsExceeded: false,
            transferredCount: true,
            newUser: false,
            remaining: 2 - count,
            tokenString,
          };
        }
      } else {
        //@ coming from router file after a successful submission and a new token is generated

        //! since this user already subbmited once(and deleted the previous token) so we need to transfer the count from the old token to the new token
        const increementCountForNewToken = tokenData.count + 1;
        //* delete the old token entry from the file
        const newDataForNewToken = new Map().set(newlyCreatedToken, {
          count: increementCountForNewToken,
          timestamp: Date.now(),
          ip: req.ip || req.socket.remoteAddress || "unknown",
          userAgent: req.headers["user-agent"] || "",
        });
        await saveData(newDataForNewToken);

        return {
          remaining:
            increementCountForNewToken >= 2
              ? 0
              : 2 - increementCountForNewToken,
          attemptsExceeded: false,
          transferredCount: true,
          newUser: false,
        };
      }
    }
  } else {
    return {
      remaining: 2,
      attemptsExceeded: false,
      transferredCount: false,
      newUser: true,
    };
  }
  return {
    remaining: undefined,
    attemptsExceeded: false,
    transferredCount: false,
    newUser: false,
  };
}

// Create fingerprint from IP + user agent
// function createFingerprint(req: Request): string {
//   // const ip = (req.ip || req.socket.remoteAddress || "unknown").toString();
//   const ip = ipKeyGenerator(
//     `${req.ip || req.socket.remoteAddress || "unknown"}`
//   );
//   const userAgent = (req.headers["user-agent"] as string) || "";
//   return createHash("sha256").update(`${ip}-${userAgent}`).digest("hex");
// }

// export const submissionLimiter = rateLimit({
//   windowMs: 24 * 60 * 60 * 1000, // 24 hours
//   max: 2, // Max 3 submissions per window
//   keyGenerator: (req) => req.cookies.formToken || createFingerprint(req),
//   skipSuccessfulRequests: true,
//   handler: (req, res) => {
//     res.status(429).json({
//       status: "ATTEMPTS_EXCEEDED",
//       error:
//         "We have already received your submission. Thanks for your interest!",
//     });
//   },
// });

// function checkRateLimit(req: Request): Record<string, boolean> | boolean {
//   const isTokenVerified = verifyToken(req);

//   if (!isTokenVerified) {
//     return { allowed: true }; // first attempt
//   }

//   return { allowed: true };
// }
