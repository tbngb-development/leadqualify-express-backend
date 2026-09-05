import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import type { ProcessRazorpayWebhookUseCase } from "../application/use-cases/process-razorpay-webhook.use-case";

export class RazorpayWebhookController {
  constructor(private readonly processWebhook: ProcessRazorpayWebhookUseCase) {}

  handle = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // req.body is a Buffer due to express.raw() middleware on this route
      const rawBody = Buffer.isBuffer(req.body)
        ? req.body.toString("utf8")
        : String(req.body);
      const signature = String(req.headers["x-razorpay-signature"] ?? "");

      const result = await this.processWebhook.execute({ rawBody, signature });
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  };
}
