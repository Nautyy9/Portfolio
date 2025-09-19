import express from "express";
const app = express();
import CookieParser from "cookie-parser";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router/index";
import cors from "cors";
// import { submissionLimiter } from "./rateLimiter";

import { createContext } from "./context/index";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: [
      "localhost:5173",
      "http://localhost:5173",
      "https://nitinnautiyal.site",
    ], // Replace with your frontend URL
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Ensure data is loaded before accepting requests
// loadData().then(() => {
//   app.listen(3000, () => {
//     console.log("Server started with rate limiting");
//   });
// });
//! rate limiter for button click

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000);
