import { Router } from "express";
import type { AdminDashboardController } from "./admin-dashboard.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";

export function buildAdminDashboardRoutes(
  controller: AdminDashboardController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get("/overview", controller.overview);
  router.get("/tenants-health", controller.tenantHealth);
  router.get("/activity", controller.activity);

  return router;
}
