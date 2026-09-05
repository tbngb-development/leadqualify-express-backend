import { Router } from "express";
import type { TenantPlanController } from "./tenant-plan.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";

/**
 * Tenant plan routes.
 * Mounted at: /api/v1/plans
 */
export function buildTenantPlanRoutes(
  controller: TenantPlanController,
  authenticate: AuthenticateMiddleware,
): Router {
  const router = Router();

  // Catalogue — any authenticated user (tenant or base) can browse plans
  router.get("/available", authenticate.any(), controller.listAvailable);

  // My plan — requires active tenant context
  router.get("/mine", authenticate.tenant(), controller.getMine);

  // ── NEW ────────────────────────────────────────────────────────
  // Self-registration plan selection — requires tenant context
  router.post("/:planId/select", authenticate.tenant(), controller.selectPlan);
  // ───────────────────────────────────────────────────────────────

  return router;
}
