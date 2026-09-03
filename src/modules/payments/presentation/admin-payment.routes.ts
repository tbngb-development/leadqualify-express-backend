import { Router } from "express";
import type { AdminPaymentController } from "./admin-payment.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";

export function buildAdminPaymentRoutes(
  controller: AdminPaymentController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();
  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get("/summary", controller.summary);
  router.get("/", controller.list);

  return router;
}
