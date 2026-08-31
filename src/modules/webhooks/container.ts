import { PrismaWebhookRepository } from "./infrastructure/repositories/prisma-webhook.repository";
import { ProcessCallWebhookUseCase } from "./application/use-cases/process-call-webhook.use-case";
import { ProcessBatchWebhookUseCase } from "./application/use-cases/process-batch-webhook.use-case";
import { WebhookController } from "./presentation/webhook.controller";

export interface WebhookModule {
  controller: WebhookController;
}

export function buildWebhookModule(): WebhookModule {
  const webhookRepo = new PrismaWebhookRepository();

  const processCallWebhook = new ProcessCallWebhookUseCase(webhookRepo);
  const processBatchWebhook = new ProcessBatchWebhookUseCase(webhookRepo);

  const controller = new WebhookController(
    processCallWebhook,
    processBatchWebhook,
  );

  return {
    controller,
  };
}
