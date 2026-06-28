import { Router } from "express";
import { handleBolnaWebhook } from "./webhook.handler";

const router = Router();

router.post("/bolna", handleBolnaWebhook);

export default router;