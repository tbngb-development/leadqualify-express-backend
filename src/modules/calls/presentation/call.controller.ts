import { Request, Response, NextFunction } from "express";
import { ListCallsUseCase } from "../application/use-cases/list-calls.use-case";
import { GetCallUseCase } from "../application/use-cases/get-call.use-case";
import { GetCallTranscriptUseCase } from "../application/use-cases/get-call-transcript.use-case";
import { GetCallStatsUseCase } from "../application/use-cases/get-call-stats.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { ListCallsQuery, GetCallStatsQuery } from "./call.schema";

export class CallController {
  constructor(
    private readonly listCalls: ListCallsUseCase,
    private readonly getCallDetails: GetCallUseCase,
    private readonly getCallTranscript: GetCallTranscriptUseCase,
    private readonly getCallStats: GetCallStatsUseCase
  ) {}

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const query = req.query as unknown as ListCallsQuery;

      const data = await this.listCalls.execute({
        tenantId,
        campaignId: query.campaignId,
        leadId: query.leadId,
        status: query.status,
        disposition: query.disposition,
        leadTemperature: query.leadTemperature,
        locationMatch: query.locationMatch,
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

  get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getCallDetails.execute(tenantId, req.params.id as string);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  getTranscriptHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.getCallTranscript.execute(tenantId, req.params.id as string);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  stats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const query = req.query as unknown as GetCallStatsQuery;

      const data = await this.getCallStats.execute({
        tenantId,
        campaignId: query.campaignId,
        leadId: query.leadId,
      });

      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}