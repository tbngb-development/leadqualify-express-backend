import { Router } from "express";
import type { AdminWalletController } from "./admin-wallet.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { adjustWalletSchema } from "../application/dto/admin-wallet.dto";

export function buildAdminWalletRoutes(
  controller: AdminWalletController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();
  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get("/", controller.get);
  router.get("/transactions", controller.transactions);
  router.post("/adjust", validate(adjustWalletSchema), controller.adjust);

  return router;
}
