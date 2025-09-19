import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import {
  decryptToken,
  generateEncryptedToken,
  setEncryptedToken,
  verifyToken,
} from "./token";
// import { checkRateLimit } from "./rateLimiter";

export const t = initTRPC.context<Context>().create();

const applyMiddleware = t.middleware(({ ctx, next }) => {
  return next({ ctx: ctx });
});

const encryptTokenMiddleware = t.middleware(async ({ ctx, next }) => {
  const { req, res } = ctx;

  const checkCookie = req.cookies.formToken;
  if (checkCookie !== undefined) {
    const decryptTokenString: string = decryptToken(checkCookie);
    console.log("decryptTokenString", decryptTokenString);
    const { remaining } = JSON.parse(decryptTokenString);
    if (remaining < 1) {
      return next({
        ctx: {
          ...ctx,
          tokenData: req.cookies.formToken,
          limit: { rateLimitExceeded: false, remaining: 0 },
        },
      });
    }
  }
  const isTokenVerified = await verifyToken(req);

  let foundTokeninFile = "";
  if (isTokenVerified.tokenString) {
    foundTokeninFile = isTokenVerified.tokenString;
    setEncryptedToken(res, isTokenVerified.tokenString);
  }

  let newlyGeneratedToken = "";

  if (!isTokenVerified.isValid) {
    const token = generateEncryptedToken(req, isTokenVerified.remaining);
    newlyGeneratedToken = token;
    setEncryptedToken(res, token);
  }

  const finalToken =
    req.cookies.formToken || newlyGeneratedToken || foundTokeninFile;

  return next({
    ctx: {
      ...ctx,
      tokenData: finalToken,
      limit: isTokenVerified,
    },
  });
});
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(encryptTokenMiddleware);
