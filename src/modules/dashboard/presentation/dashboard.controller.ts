import { Request, Response, NextFunction } from "express";
import { GetDashboardOverviewUseCase } from "../application/use-cases/get-dashboard-overview.use-case";
import { GetDashboardActivityUseCase } from "../application/use-cases/get-dashboard-activity.use-case";
import { GetDashboardCampaignsUseCase } from "../application/use-cases/get-dashboard-campaigns.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";

export class DashboardController {
  constructor(
    private readonly getOverview: GetDashboardOverviewUseCase,
    private readonly getActivity: GetDashboardActivityUseCase,
    private readonly getCampaigns: GetDashboardCampaignsUseCase
  ) {}

  overview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getOverview.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  activity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getActivity.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  campaigns = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getCampaigns.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}