import { z } from "zod";
import { t } from "../trpc";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const inputProcedure = t.procedure.input(
  z.object({
    name: z.string(),
    email: z.string(),
    phoneNumber: z.number(),
    subject: z.string(),
    message: z.string(),
  })
);

export const appRouter = t.router({
  stringOut: t.procedure.query(() => {
    return "hi";
  }),
  fields: inputProcedure.mutation(async ({ input }) => {
    const comment = await prisma.userData.create({
      data: {
        name: input.name,
        phoneNumber: input.phoneNumber,
        email: input.email,
        message: input.message,
        subject: input.subject,
      },
    });
    if (comment) {
      return "Thank you for your feedback , we will respond to you soon";
    }
  }),
});
