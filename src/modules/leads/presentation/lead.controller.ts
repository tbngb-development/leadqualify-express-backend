import { Request, Response, NextFunction } from "express";
import { ListLeadsUseCase } from "../application/use-cases/list-leads.use-case";
import { GetLeadUseCase } from "../application/use-cases/get-lead.use-case";
import { GetLeadStatsUseCase } from "../application/use-cases/get-lead-stats.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { ListLeadsQuery, GetLeadsStatsQuery } from "./lead.schema";

export class LeadController {
  constructor(
    private readonly listLeads: ListLeadsUseCase,
    private readonly getLeadDetails: GetLeadUseCase,
    private readonly getLeadStats: GetLeadStatsUseCase,
  ) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const query = req.query as unknown as ListLeadsQuery;

      const data = await this.listLeads.execute({
        tenantId,
        campaignId: query.campaignId,
        status: query.status,
        search: query.search,
        dateFrom: query.dateFrom,
        dateTo: query.dateTo,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
        page: query.page,
        limit: query.limit,
      });

      sendSuccess(res, data);
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
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getLeadDetails.execute(tenantId, req.params.id as string);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  stats = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const query = req.query as unknown as GetLeadsStatsQuery;

      const data = await this.getLeadStats.execute(tenantId, query.campaignId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}
