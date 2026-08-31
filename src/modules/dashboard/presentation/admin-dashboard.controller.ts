import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import type { GetAdminOverviewUseCase } from "../application/use-cases/get-admin-overview.use-case";
import type { GetAdminTenantHealthUseCase } from "../application/use-cases/get-admin-tenant-health.use-case";
import type { GetAdminActivityUseCase } from "../application/use-cases/get-admin-activity.use-case";

export class AdminDashboardController {
  constructor(
    private readonly getOverviewUseCase: GetAdminOverviewUseCase,
    private readonly getTenantHealthUseCase: GetAdminTenantHealthUseCase,
    private readonly getActivityUseCase: GetAdminActivityUseCase,
  ) {}

  overview = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      sendSuccess(res, await this.getOverviewUseCase.execute());
    } catch (err) {
      next(err);
    }
  };

  tenantHealth = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      sendSuccess(res, await this.getTenantHealthUseCase.execute());
    } catch (err) {
      next(err);
    }
  };

  activity = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const limit = req.query.limit
        ? parseInt(req.query.limit as string, 10)
        : 20;
      sendSuccess(res, await this.getActivityUseCase.execute(limit));
    } catch (err) {
      next(err);
    }
  };
}
