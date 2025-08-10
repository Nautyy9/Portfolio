import { z } from "zod";
import { t } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { sendContactMail } from "../mailservice"; // 👈 Add this

// 👈 Add this

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
      // console.log(comment, !!comment);
      if (comment) {
        try {
          const hel = await sendContactMail({
            name: input.name,
            email: input.email,
            phoneNumber: input.phoneNumber,
            subject: input.subject,
            message: input.message,
          });
          console.log(hel, " ,message");
          return {
            status: "SUCCESS",
            msg: "Thank you for your feedback , we will respond to you soon",
          };
        } catch (error) {
          // console.error("Error sending email:", error);
          return {
            status: "FAIL",
            msg: "Internal server Error, please try again later",
          };
        }
      }
    }
  }),
});
