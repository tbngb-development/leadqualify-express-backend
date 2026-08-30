import { Router } from "express";
import type { BatchController } from "./batch.controller";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { scheduleBatchSchema } from "./batch.schema";
import { leadsUploadMemory } from "../../../shared/middleware/upload";

/**
 * Builds batch sub-routes mounted under /api/v1/campaigns/:campaignId/batches.
 *
 * Authentication is handled by the parent campaign router.
 * This function only applies authorization (role checks) where needed.
 */
export function buildBatchRoutes(
  controller: BatchController,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router({ mergeParams: true });

  // ── Collection ────────────────────────────────────────────────────────────
  router.get("/", controller.list);

  router.post("/", leadsUploadMemory.single("file"), controller.create);

  // ── Single resource ───────────────────────────────────────────────────────
  router.get("/:batchId", controller.get);
  router.delete(
    "/:batchId",
    authorize.tenantRoles("OWNER", "ADMIN"),
    controller.remove,
  );

  // ── Lifecycle actions ─────────────────────────────────────────────────────
  router.post("/:batchId/run", controller.run);
  router.post(
    "/:batchId/schedule",
    validate(scheduleBatchSchema),
    controller.schedule,
  );
  router.post("/:batchId/stop", controller.stop);
  router.post("/:batchId/resume", controller.resume);

  // ── Stats ─────────────────────────────────────────────────────────────────
  router.get("/:batchId/stats", controller.stats);

  return router;
}
