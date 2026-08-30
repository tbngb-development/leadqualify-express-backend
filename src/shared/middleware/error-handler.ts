import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
import { ValidationError } from "../errors/validation.error";
import { sendError } from "../utils/response";
import { HttpStatus } from "../constants/http-status";
import { GeneralMessages } from "../constants/messages";
import { env } from "../config/env";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (env.isDev) {
    console.error("[ERROR]", err);
  }

  if (err instanceof ValidationError) {
    sendError(res, err.statusCode, err.message, err.code, err.details);
    return;
  }

  if (err instanceof AppError) {
    sendError(res, err.statusCode, err.message, err.code);
    return;
  }

  sendError(
    res,
    HttpStatus.INTERNAL_SERVER_ERROR,
    GeneralMessages.INTERNAL_ERROR,
    "INTERNAL_ERROR",
  );
}