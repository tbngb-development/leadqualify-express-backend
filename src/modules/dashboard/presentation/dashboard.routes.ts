import { Router } from "express";
import { DashboardController } from "./dashboard.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";

export function buildDashboardRoutes(
  controller: DashboardController,
  authenticate: AuthenticateMiddleware
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  router.get("/overview", controller.overview);
  router.get("/activity", controller.activity);
  router.get("/campaigns", controller.campaigns);

  return router;
}