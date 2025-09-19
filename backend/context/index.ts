import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { Request, Response } from "express";
export function createContext({ req, res }: CreateExpressContextOptions) {
  return {
    req,
    res,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
