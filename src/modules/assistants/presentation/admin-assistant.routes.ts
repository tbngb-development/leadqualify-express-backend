import { Router } from "express";
import { AssistantController } from "./assistant.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import {
  registerAssistantSchema,
  updateAssistantSchema,
} from "./assistant.schema";

/**
 * Platform Admin assistant management routes.
 * Full CRUD operations restricted to platform administrators.
 * tenantId is resolved from query params or request body.
 */
export function buildAdminAssistantRoutes(
  controller: AssistantController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  // All routes require platform admin authentication
  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  // Dropdown list of Bolna agents for campaign configuration
  router.get("/bolna-agents", controller.listBolnaAgentsHandler);

  // List assistants for a specific tenant (admin override)
  router.get("/", controller.adminList);

  // Get single assistant for a specific tenant
  router.get("/:id", controller.adminGet);

  // Register a new assistant for a tenant
  router.post(
    "/register",
    validate(registerAssistantSchema),
    controller.adminRegister,
  );

  // Update assistant name
  router.patch("/:id", validate(updateAssistantSchema), controller.adminUpdate);

  // Sync assistant config from Bolna
  router.post("/:id/sync", controller.adminSync);

  // Delete assistant
  router.delete("/:id", controller.adminDelete);

  return router;
}
