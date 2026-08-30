import { Router } from "express";
import { TenantController } from "./tenant.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { adminUpdateTenantSchema } from "./tenant.schema";

/**
 * Platform administrative routes for cross-tenant management.
 * Mounted at: /api/v1/admin/tenants
 */
export function buildAdminTenantRoutes(
  controller: TenantController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get("/", controller.adminList);
  router.get("/:id", controller.adminGet);
  router.patch(
    "/:id",
    validate(adminUpdateTenantSchema),
    controller.adminUpdate,
  );
  router.get("/:id/stats", controller.adminStats);

  return router;
}
