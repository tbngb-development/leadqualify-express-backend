import { Router } from "express";
import { UserController } from "./user.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { createUserSchema, updateUserSchema } from "./user.schema";

export function buildUserRoutes(
  controller: UserController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware
): Router {
  const router = Router();

  router.use(authenticate.tenant());
  router.use(authorize.tenantRoles("OWNER", "ADMIN"));

  router.get("/", controller.list);
  router.post("/", validate(createUserSchema), controller.create);
  router.patch("/:id", validate(updateUserSchema), controller.updateHandler);
  router.delete("/:id", controller.deleteHandler);

  return router;
}