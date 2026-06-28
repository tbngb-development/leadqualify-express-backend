// src/modules/assistants/assistant.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import {
  list,
  listBolnaAgents,
  get,
  register,
  update,
  sync,
  remove,
} from "./assistant.controller";

const router = Router();

router.use(authenticate);

// ── Bolna dashboard agents — for registration dropdown ──────────────────────
router.get("/bolna-agents", listBolnaAgents);

// ── Your registered assistants ──────────────────────────────────────────────
router.get("/", list);
router.get("/:id", get);
router.post("/register", register); // ← was POST / (create)
router.patch("/:id", update);
router.post("/:id/sync", sync); // ← new: re-fetch from Bolna dashboard
router.delete("/:id", remove);

export default router;
