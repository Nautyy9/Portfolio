import express from "express";
const app = express();

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router/index";
import cors from "cors";
// import { createContext } from "./context/index";

app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "https://nitinsfolio.vercel.app",
      "https://nitinnautiyal.site",
      "http://192.168.137.1:5173",
      "http://192.168.1.10:5173",
    ],
  })
);

app.get("/button", (req, res) => {
  console.log("here");
  return res.send(`${req.ip}`);
});
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(3000);
