import { Router } from "express";
import { handleVapiWebhook } from "./webhook.handler";

const router = Router();

router.post("/vapi", handleVapiWebhook);

export default router;