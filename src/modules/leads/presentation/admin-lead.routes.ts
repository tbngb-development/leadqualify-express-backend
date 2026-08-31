import { Router } from "express";
import type { AdminLeadController } from "./admin-lead.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validateQuery } from "../../../shared/middleware/validate";
import { listLeadsQuerySchema, getLeadsStatsQuerySchema } from "./lead.schema";

export function buildAdminLeadRoutes(
  controller: AdminLeadController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get(
    "/stats",
    validateQuery(getLeadsStatsQuerySchema),
    controller.stats,
  );
  router.get("/", validateQuery(listLeadsQuerySchema), controller.list);
  router.get("/:id", controller.get);

  return router;
}
