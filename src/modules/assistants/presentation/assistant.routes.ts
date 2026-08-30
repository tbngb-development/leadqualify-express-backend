import { Router } from "express";
import { AssistantController } from "./assistant.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";

/**
 * Tenant-scoped READ-ONLY assistant routes.
 * Any authenticated tenant user (OWNER, ADMIN, USER) can list and view assistants.
 * Write operations are restricted to platform admins via /v1/admin/assistants.
 */
export function buildAssistantRoutes(
  controller: AssistantController,
  authenticate: AuthenticateMiddleware,
): Router {
  const router = Router();

  // All routes require valid tenant JWT
  router.use(authenticate.tenant());
  
  // List all assistants for the authenticated tenant
  router.get("/", controller.list);

  // Get single assistant detail with prompt variables
  router.get("/:id", controller.get);

  return router;
}
