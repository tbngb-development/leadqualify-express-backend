import { Router } from "express";
import { TenantController } from "./tenant.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { updateWorkspaceSchema } from "./tenant.schema";

/**
 * Tenant-scoped routes for active workspace management.
 * Mounted at: /api/v1/tenants
 */
export function buildTenantRoutes(
  controller: TenantController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  // Any authenticated member can read their current tenant info
  router.get("/current", controller.getCurrent);

  // Only OWNER or ADMIN can update workspace name
  router.patch(
    "/current",
    authorize.tenantRoles(),
    validate(updateWorkspaceSchema),
    controller.updateCurrent,
  );

  // Workspace stats
  router.get(
    "/current/stats",
    authorize.tenantRoles(),
    controller.getCurrentStats,
  );

  return router;
}
