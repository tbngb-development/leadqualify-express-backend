import type { Request, Response, NextFunction } from "express";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { sendSuccess } from "../../../shared/utils/response";
import type { GetDashboardOverviewUseCase } from "../application/use-cases/get-dashboard-overview.use-case";
import type { GetDashboardActivityUseCase } from "../application/use-cases/get-dashboard-activity.use-case";
import type { GetDashboardCampaignsUseCase } from "../application/use-cases/get-dashboard-campaigns.use-case";

export class TenantDashboardController {
  constructor(
    private readonly getOverviewUseCase: GetDashboardOverviewUseCase,
    private readonly getActivityUseCase: GetDashboardActivityUseCase,
    private readonly getCampaignsUseCase: GetDashboardCampaignsUseCase,
  ) {}

  overview = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getOverviewUseCase.execute(tenantId);
      sendSuccess(res, data);
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
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getActivityUseCase.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  campaigns = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getCampaignsUseCase.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}
