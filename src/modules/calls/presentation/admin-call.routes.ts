import { Router } from "express";
import type { AdminCallController } from "./admin-call.controller";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validateQuery } from "../../../shared/middleware/validate";
import { listCallsQuerySchema, getCallStatsQuerySchema } from "./call.schema";

export function buildAdminCallRoutes(
  controller: AdminCallController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.admin());
  router.use(authorize.platformAdmin());

  router.get(
    "/stats",
    validateQuery(getCallStatsQuerySchema),
    controller.stats,
  );
  router.get("/", validateQuery(listCallsQuerySchema), controller.list);
  router.get("/:id/transcript", controller.getTranscript);
  router.get("/:id", controller.get);

  return router;
}
