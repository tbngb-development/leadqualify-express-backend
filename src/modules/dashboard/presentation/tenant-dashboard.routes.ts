import { Router } from "express";
import type { TenantDashboardController } from "./tenant-dashboard.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";

export function buildTenantDashboardRoutes(
  controller: TenantDashboardController,
  authenticate: AuthenticateMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  router.get("/overview", controller.overview);
  router.get("/activity", controller.activity);
  router.get("/campaigns", controller.campaigns);

  return router;
}
