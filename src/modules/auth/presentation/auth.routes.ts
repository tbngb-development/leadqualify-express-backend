import { Router } from "express";
import type { AuthController } from "./auth.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import {
  registerTenantOwnerSchema,
  loginSchema,
  selectTenantSchema,
  refreshTokensSchema,
  logoutSchema,
  createInviteSchema,
  acceptInviteSchema,
} from "./auth.schema";

export function buildTenantAuthRoutes(
  controller: AuthController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  // Public
  router.post(
    "/register",
    validate(registerTenantOwnerSchema),
    controller.register,
  );
  router.post("/login", validate(loginSchema), controller.login);
  router.post("/refresh", validate(refreshTokensSchema), controller.refresh);
  router.post("/logout", validate(logoutSchema), controller.logout);
  router.post(
    "/accept-invite",
    validate(acceptInviteSchema),
    controller.acceptInvite,
  );

  // Authenticated (any type)
  router.post(
    "/select-tenant",
    authenticate.any(),
    validate(selectTenantSchema),
    controller.selectTenant,
  );
  router.get("/profile", authenticate.any(), controller.profile);

  // Tenant-scoped (OWNER/ADMIN can invite)
  router.post(
    "/invites",
    authenticate.tenant(),
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(createInviteSchema),
    controller.createInvite,
  );

  return router;
}

export function buildAdminAuthRoutes(controller: AuthController): Router {
  const router = Router();

  router.post("/login", validate(loginSchema), controller.adminLogin);
  router.post("/refresh", validate(refreshTokensSchema), controller.refresh);
  router.post("/logout", validate(logoutSchema), controller.logout);

  return router;
}
