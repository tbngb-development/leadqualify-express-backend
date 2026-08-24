import { Router } from "express";
import { apiKeyAuth } from "../../middleware/apiKeyAuth";
import { instantCall } from "./integration.controller";

const router = Router();

// All integration routes authenticate via API key (server-to-server)
// NOT via JWT (browser-to-server). This is intentional.
router.use(apiKeyAuth);

// POST /api/integrations/instant-call
router.post("/instant-call", instantCall);

export default router;