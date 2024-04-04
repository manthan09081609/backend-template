import "reflect-metadata";

import cors from "cors";
import { createServer } from "http";
import { HttpError } from "http-errors";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";

import logger from "./config/logger";
import { corsOptions } from "./constants";
import authRouter from "./routes/auth";

const app = express();
const httpServer = createServer(app);

app.use(cors(corsOptions));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to Service Template");
});

app.use("/auth", authRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default httpServer;
