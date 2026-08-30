import { Router } from "express";
import { CallController } from "./call.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { validateQuery } from "../../../shared/middleware/validate";
import { listCallsQuerySchema, getCallStatsQuerySchema } from "./call.schema";

export function buildCallRoutes(
  controller: CallController,
  authenticate: AuthenticateMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  // Specific routes must come before general /:id
  router.get(
    "/stats",
    validateQuery(getCallStatsQuerySchema),
    controller.stats,
  );

  router.get("/", validateQuery(listCallsQuerySchema), controller.list);

  router.get("/:id/transcript", controller.getTranscriptHandler);
  router.get("/:id", controller.get);

  return router;
}
