import { z } from "zod";
const envfile = z.object({
  PUBLIC_KEY: z.string(),
  TEMPLATE_ID: z.string(),
  SERVICE_ID: z.string(),
  SERVICE_NAME: z.string(),
});

export const envClientSchema = envfile.parse({
  PUBLIC_KEY: process.env.PUBLIC_KEY,
  TEMPLATE_ID: process.env.TEMPLATE_ID,
  SERVICE_ID: process.env.SERVICE_ID,
  SERVICE_NAME: process.env.SERVICE_NAME,
});
