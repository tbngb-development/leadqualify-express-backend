// src/modules/calls/call.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { list, get, getTranscript, getStats } from "./call.controller";

const router = Router();

router.use(authenticate);

router.get("/stats", getStats);   // ← before /:id to avoid param conflict
router.get("/", list);
router.get("/:id", get);
router.get("/:id/transcript", getTranscript);

export default router;