import { Router } from "express";
import { LeadController } from "./lead.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { validateQuery } from "../../../shared/middleware/validate";
import { listLeadsQuerySchema, getLeadsStatsQuerySchema } from "./lead.schema";

export function buildLeadRoutes(
  controller: LeadController,
  authenticate: AuthenticateMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  // Fixed routes must be registered before parameterized /:id
  router.get(
    "/stats",
    validateQuery(getLeadsStatsQuerySchema),
    controller.stats,
  );

  router.get("/", validateQuery(listLeadsQuerySchema), controller.list);

  router.get("/:id", controller.get);

  return router;
}
