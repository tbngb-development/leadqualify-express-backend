import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const message = err instanceof Error ? err.message : "Internal Server Error";

  console.error("[Error]", message);

  res.status(500).json({
    success: false,
    error: message
  });
};