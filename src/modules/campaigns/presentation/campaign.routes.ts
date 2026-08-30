import { Router } from "express";
import type { CampaignController } from "./campaign.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { createCampaignSchema } from "./campaign.schema";
import { buildBatchRoutes } from "../../batches/presentation/batch.routes";
import type { BatchController } from "../../batches/presentation/batch.controller";
import { leadsUploadMemory } from "../../../shared/middleware/upload";

export function buildCampaignRoutes(
  controller: CampaignController,
  batchController: BatchController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  // All campaign routes require tenant auth
  router.use(authenticate.tenant());

  // ── Nested batch routes ───────────────────────────────────────────────────
  // Mounted at /:campaignId/batches
  router.use(
    "/:campaignId/batches",
    buildBatchRoutes(batchController, authorize),
  );

  // ── Collection routes ─────────────────────────────────────────────────────
  router.get("/", controller.list);
  router.post(
    "/",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(createCampaignSchema),
    controller.create,
  );

  // ── Member routes (must come before /:id) ─────────────────────────────────
  router.get("/:id/stats", controller.stats);
  router.get("/:id/performance", controller.performance);
  router.post(
    "/:id/parse-leads",
    leadsUploadMemory.single("file"),
    controller.parseLeadsHandler,
  );

  // ── Single resource ───────────────────────────────────────────────────────
  router.get("/:id", controller.get);

  return router;
}
