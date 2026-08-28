import { Router } from "express";
import { handleBolnaWebhook, handleBolnaBatchWebhook } from "./webhook.handler";

const router = Router();

// ── Per-call webhooks (MVP + V1 batch calls) ────────────────────────────────
// No auth — Bolna posts here on call lifecycle events
router.post("/bolna", handleBolnaWebhook);

// ── V1: Batch lifecycle webhooks ────────────────────────────────────────────
// No auth — Bolna posts here when batch reaches terminal state
router.post("/bolna-batch", handleBolnaBatchWebhook);

export default router;
