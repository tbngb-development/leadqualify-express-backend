import { Router } from "express";
import type { AdminAuthController } from "./admin-auth.controller";
import { validate } from "../../../shared/middleware/validate";
import { adminLoginSchema } from "./auth.schema";

export function buildAdminAuthRoutes(controller: AdminAuthController): Router {
  const router = Router();
  router.post("/login", validate(adminLoginSchema), controller.login);
  return router;
}
