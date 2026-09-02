import { Router } from "express";
import type { AdminPlanController } from "./admin-plan.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { createPlanSchema, updatePlanSchema } from "./plan.schema";

/**
 * Platform Admin plan management routes.
 * Mounted at: /api/v1/admin/plans
 */
export function buildAdminPlanRoutes(
  controller: AdminPlanController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get("/", controller.list);
  router.get("/:id", controller.get);
  router.post("/", validate(createPlanSchema), controller.create);
  router.patch("/:id", validate(updatePlanSchema), controller.update);

  return router;
}
