import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { leadsUpload } from "../../middleware/upload";
import {
  list,
  get,
  create,
  run,
  schedule,
  stop,
  resume,
  remove,
  stats,
} from "./batch.controller";

// mergeParams: true allows accessing req.params.campaignId from the parent router
const router = Router({ mergeParams: true });

router.use(authenticate);

// ── Fixed paths BEFORE /:batchId ─────────────────────────────────────────────
// GET  /api/campaigns/:campaignId/batches
router.get("/", list);

// POST /api/campaigns/:campaignId/batches
router.post("/", leadsUpload.single("file"), create);

// ── Batch-specific routes ────────────────────────────────────────────────────
// GET    /api/campaigns/:campaignId/batches/:batchId
router.get("/:batchId", get);

// POST   /api/campaigns/:campaignId/batches/:batchId/run
router.post("/:batchId/run", run);

// POST   /api/campaigns/:campaignId/batches/:batchId/schedule
router.post("/:batchId/schedule", schedule);

// POST   /api/campaigns/:campaignId/batches/:batchId/stop
router.post("/:batchId/stop", stop);

// POST   /api/campaigns/:campaignId/batches/:batchId/resume
router.post("/:batchId/resume", resume);

// DELETE /api/campaigns/:campaignId/batches/:batchId
router.delete("/:batchId", remove);

// GET    /api/campaigns/:campaignId/batches/:batchId/stats
router.get("/:batchId/stats", stats);

export default router;
