import { Router } from "express";
import { BrochureController } from "./brochure.controller";
import { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { saveBrochureSchema, updateBrochureSchema } from "./brochure.schema";
import { brochureUpload } from "../../../shared/middleware/upload";

export function buildBrochureRoutes(
  controller: BrochureController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  router.post(
    "/extract",
    authorize.tenantRoles("OWNER", "ADMIN"),
    brochureUpload.single("file"),
    controller.extract
  );

  router.post(
    "/save",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(saveBrochureSchema),
    controller.save
  );

  router.get("/", controller.list);
  router.get("/:id", controller.get);

  router.patch(
    "/:id",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(updateBrochureSchema),
    controller.updateHandler
  );

  router.delete(
    "/:id",
    authorize.tenantRoles("OWNER", "ADMIN"),
    controller.deleteHandler
  );

  return router;
}