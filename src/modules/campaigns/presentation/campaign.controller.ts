import type { Request, Response, NextFunction } from "express";
import type { ListCampaignsUseCase } from "../application/use-cases/list-campaigns.use-case";
import type { GetCampaignUseCase } from "../application/use-cases/get-campaign.use-case";
import type { CreateCampaignUseCase } from "../application/use-cases/create-campaign.use-case";
import type { ParseLeadsUseCase } from "../application/use-cases/parse-leads.use-case";
import type { GetCampaignStatsUseCase } from "../application/use-cases/get-campaign-stats.use-case";
import type { GetCampaignPerformanceUseCase } from "../application/use-cases/get-campaign-performance.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { CreateCampaignInput } from "../application/dto/campaign.dto";

export class CampaignController {
  constructor(
    private readonly listCampaigns: ListCampaignsUseCase,
    private readonly getCampaign: GetCampaignUseCase,
    private readonly createCampaign: CreateCampaignUseCase,
    private readonly parseLeads: ParseLeadsUseCase,
    private readonly getCampaignStats: GetCampaignStatsUseCase,
    private readonly getCampaignPerformance: GetCampaignPerformanceUseCase,
  ) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.listCampaigns.execute(tenantId);
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
      const campaignId = req.params.id as string;
      const data = await this.getCampaign.execute(tenantId, campaignId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const payload = req.body as CreateCampaignInput;
      const data = await this.createCampaign.execute(tenantId, payload);
      sendSuccess(res, data, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  parseLeadsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.id as string;

      if (!req.file) {
        res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          error: "No file uploaded",
        });
        return;
      }

      const result = await this.parseLeads.execute({
        tenantId,
        campaignId,
        fileBuffer: req.file.buffer,
        fileName: req.file.originalname,
      });

      sendSuccess(res, result);
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
      const campaignId = req.params.id as string;
      const data = await this.getCampaignStats.execute(tenantId, campaignId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  performance = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.id as string;

      const data = await this.getCampaignPerformance.execute(
        tenantId,
        campaignId,
      );
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}
