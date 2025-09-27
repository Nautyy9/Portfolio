import { string } from "zod/v4";
import { t } from "../trpc";
import { contactRouter } from "./contact";

const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "hi";
  }),
  contact: contactRouter,
});
export const mergedRouter = t.mergeRouters(appRouter, contactRouter);
