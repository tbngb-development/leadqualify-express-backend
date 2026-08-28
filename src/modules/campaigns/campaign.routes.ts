import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { leadsUpload } from "../../middleware/upload";
import {
  list,
  get,
  create,
  uploadLeads,
  start,
  pause,
  cancelSchedule,
  stats,
  performance,
  parseLeads,
} from "./campaign.controller";
import batchRoutes from "./batch.routes";

const router = Router();

router.use(authenticate);

// ── V1 Batch routes (nested) ─────────────────────────────────────────────────
// Mounted at /:campaignId/batches (Fixed typo: was /:campaignI/batches)
router.use("/:campaignId/batches", batchRoutes);

// ── Campaign routes ──────────────────────────────────────────────────────────
router.get("/", list);
router.post("/", create);

// Sub-resource endpoints before /:id
router.get("/:id/stats", stats);
router.get("/:id/performance", performance);
router.post("/:id/parse-leads", leadsUpload.single("file"), parseLeads);

router.get("/:id", get);

// ── DEPRECATED: Scheduled for removal in Phase 5 ─────────────────────────────
// Use POST /:campaignId/batches instead of /:id/upload
router.post("/:id/upload", leadsUpload.single("file"), uploadLeads);
// Use POST /:campaignId/batches/:batchId/run instead of /:id/start
router.post("/:id/start", start);
// Use POST /:campaignId/batches/:batchId/stop instead of /:id/pause
router.post("/:id/pause", pause);
// Use POST /:campaignId/batches/:batchId/stop instead of /:id/cancel-schedule
router.post("/:id/cancel-schedule", cancelSchedule);

export default router;
