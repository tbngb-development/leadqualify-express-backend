// src/modules/brochure/brochure.routes.ts — FULL REPLACE

import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { brochureUpload } from "../../middleware/upload";
import {
  extract,
  save,
  list,
  get,
  update,
  remove,
} from "./brochure.controller";

const router = Router();

// All brochure routes require authentication
router.use(authenticate);

// ─── Routes ───────────────────────────────────────────────────────────────────

// Extract PDF → returns structured data (no DB)
router.post("/extract", brochureUpload.single("file"), extract);

// Save confirmed data → DB
router.post("/save", save);

// List all brochures for tenant (summary)
router.get("/", list);

// Get single brochure full detail
router.get("/:id", get);

// Update brochure fields
router.patch("/:id", update);

// Delete brochure (only if not linked to campaigns)
router.delete("/:id", remove);

export default router;