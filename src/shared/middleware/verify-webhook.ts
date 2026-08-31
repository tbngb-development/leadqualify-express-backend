import type { RequestHandler } from "express";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { HEADER_WEBHOOK_SECRET, WebhookMessages } from "../constants";
import { env } from "../config/env";

/**
 * Validates that requests contain the correct shared secret in custom headers.
 * Protects stateless, public-facing webhook endpoints from unauthorized POST requests.
 */
export function verifyWebhookSecret(): RequestHandler {
  return (req, _res, next) => {
    // If webhook secret isn't configured in environment, fail-secure
    const expectedSecret = env.webhook.webhookSecret;
    console.log("expected Secrets: ", expectedSecret);
    if (!expectedSecret) {
      return next(
        new UnauthorizedError("Server webhook configuration is missing"),
      );
    }

    const incomingSecret = req.headers[HEADER_WEBHOOK_SECRET];
    console.log("In-coming Secrets: ", incomingSecret);

    if (!incomingSecret || incomingSecret !== expectedSecret) {
      return next(new UnauthorizedError(WebhookMessages.INVALID_SECRET));
    }

    next();
  };
}
