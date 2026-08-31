import { Router } from "express";
import type { WebhookController } from "./webhook.controller";
import { verifyWebhookSecret } from "../../../shared/middleware/verify-webhook";

/**
 * Public public endpoints for Bolna dashboard service integration.
 * Secured via verifyWebhookSecret header guard.
 *
 * Target mounting pattern: /webhooks
 */
export function buildWebhookRoutes(controller: WebhookController): Router {
  const router = Router();

  // Apply webhook secret verification to all child endpoints
  router.use(verifyWebhookSecret());

  router.post("/bolna", controller.bolna);
  router.post("/bolna-batch", controller.bolnaBatch);

  return router;
}
