import { Router } from "express";
import type { TenantWalletController } from "./tenant-wallet.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { setThresholdSchema } from "./wallet.schema";

/**
 * Mounted at: /api/v1/wallet
 */
export function buildTenantWalletRoutes(
  controller: TenantWalletController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  router.get("/", controller.get);
  router.get("/transactions", controller.listTransactions);
  router.patch(
    "/threshold",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(setThresholdSchema),
    controller.setThreshold,
  );

  return router;
}
