import { Request, Response } from "express";
import { ProcessCallWebhookUseCase } from "../application/use-cases/process-call-webhook.use-case";
import { ProcessBatchWebhookUseCase } from "../application/use-cases/process-batch-webhook.use-case";
import {
  WebhookCallPayload,
  WebhookBatchPayload,
} from "../application/dto/webhook.dto";

export class WebhookController {
  constructor(
    private readonly processCallWebhook: ProcessCallWebhookUseCase,
    private readonly processBatchWebhook: ProcessBatchWebhookUseCase,
  ) {}

  bolna = async (
    req: Request<unknown, unknown, WebhookCallPayload>,
    res: Response,
  ): Promise<void> => {
    // Statelesly response received immediately to prevent timeout blocks
    res.json({ received: true });

    try {
      await this.processCallWebhook.execute(req.body);
    } catch (err) {
      console.error("[WebhookController] Per-call processing error:", err);
    }
  };

  bolnaBatch = async (
    req: Request<unknown, unknown, WebhookBatchPayload>,
    res: Response,
  ): Promise<void> => {
    res.json({ received: true });

    try {
      await this.processBatchWebhook.execute(req.body);
    } catch (err) {
      console.error("[WebhookController] Batch processing error:", err);
    }
  };
}
