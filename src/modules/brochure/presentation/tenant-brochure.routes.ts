import { Router } from "express";
import type { AuthenticateMiddleware } from "../../../shared/middleware/authenticate";
import type { AuthorizeMiddleware } from "../../../shared/middleware/authorize";
import { validate } from "../../../shared/middleware/validate";
import { saveBrochureSchema, updateBrochureSchema } from "./brochure.schema";
import { brochureUpload } from "../../../shared/middleware/upload";
import { TenantBrochureController } from "./tenant-brochure.controller";

export function buildTenantBrochureRoutes(
  controller: TenantBrochureController,
  authenticate: AuthenticateMiddleware,
  authorize: AuthorizeMiddleware,
): Router {
  const router = Router();

  router.use(authenticate.tenant());

  router.post(
    "/extract",
    authorize.tenantRoles("OWNER", "ADMIN"),
    brochureUpload.single("file"),
    controller.extract,
  );

  router.post(
    "/save",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(saveBrochureSchema),
    controller.save,
  );

  router.get("/", controller.list);
  router.get("/:id", controller.get);

  router.patch(
    "/:id",
    authorize.tenantRoles("OWNER", "ADMIN"),
    validate(updateBrochureSchema),
    controller.updateHandler,
  );

  router.delete(
    "/:id",
    authorize.tenantRoles("OWNER", "ADMIN"),
    controller.deleteHandler,
  );

  return router;
}
