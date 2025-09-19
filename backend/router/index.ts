import { z } from "zod";
import { protectedProcedure, t } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { sendContactMail } from "../mailservice";
import { incrementSubmissionCount } from "../rateLimiter";

const prisma = new PrismaClient();

const inputProcedure = protectedProcedure.input(
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
  fields: inputProcedure.mutation(async ({ input, ctx }) => {
    const { req, res, tokenData } = ctx;
    console.log("tokenData in fields mutation", tokenData);
    if (ctx.limit.rateLimitExceeded) {
      return {
        status: "ALREADY EXISTS",
        msg: "We have already received your submission. Thanks for your interest!",
      };
    } else {
      const findUser = await prisma.userData.findFirst({
        where: {
          email: input.email,
        },
        select: {
          name: true,
        },
      });
      if (findUser?.name) {
        return {
          status: "ALREADY EXISTS",
          msg: `Hey ${findUser.name} You have already submitted the form. Please wait for a response. Thank you!`,
        };
      } else {
        const comment = await prisma.userData.create({
          data: {
            name: input.name,
            phoneNumber: input.phoneNumber,
            email: input.email,
            message: input.message,
            subject: input.subject,
          },
        });
        console.log(comment, !!comment);
        if (comment) {
          try {
            const hel = await sendContactMail({
              name: input.name,
              email: input.email,
              phoneNumber: input.phoneNumber,
              subject: input.subject,
              message: input.message,
            });

            incrementSubmissionCount(req, res, tokenData);
            return {
              status: "SUCCESS",
              msg: "Thank you for your feedback , we will respond to you soon",
            };
          } catch (error) {
            console.error("Error sending email:", error);
            return {
              status: "FAIL",
              msg: "Internal server Error, please try again later",
            };
          }
        }
      }
    }
  }),
});
