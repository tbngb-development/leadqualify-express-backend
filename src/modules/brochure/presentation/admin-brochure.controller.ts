import type { Request, Response, NextFunction } from "express";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { sendSuccess } from "../../../shared/utils/response";
import { AdminMessages } from "../../../shared/constants/messages";
import { param } from "../../../shared/utils/paramHelper";
import type { ListBrochuresUseCase } from "../application/use-cases/list-brochures.use-case";
import type { GetBrochureUseCase } from "../application/use-cases/get-brochure.use-case";
import { TenantBadRequestError } from "../../tenants/domain/tenant.errors";

export class AdminBrochureController {
  constructor(
    private readonly listUseCase: ListBrochuresUseCase,
    private readonly getUseCase: GetBrochureUseCase,
  ) {}

  private resolveTenantId(req: Request): string {
    const tenantId =
      (req.query.tenantId as string) ??
      (req.body?.tenantId as string) ??
      ((req as AuthRequest).user as TenantAuthContext)?.tenantId;

    if (!tenantId) {
      throw new TenantBadRequestError(AdminMessages.TENANT_ID_REQUIRED);
    }
    return tenantId;
  }

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveTenantId(req);
      sendSuccess(res, await this.listUseCase.execute(tenantId));
    } catch (err) {
      next(err);
    }
  };

  get = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveTenantId(req);
      sendSuccess(
        res,
        await this.getUseCase.execute(tenantId, param(req, "id")),
      );
    } catch (err) {
      next(err);
    }
  };
}
