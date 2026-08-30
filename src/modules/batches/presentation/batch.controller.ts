import type { Request, Response, NextFunction } from "express";
import type { ListBatchesUseCase } from "../application/use-cases/list-batches.use-case";
import type { GetBatchUseCase } from "../application/use-cases/get-batch.use-case";
import type { CreateBatchUseCase } from "../application/use-cases/create-batch.use-case";
import type { RunBatchUseCase } from "../application/use-cases/run-batch.use-case";
import type { ScheduleBatchUseCase } from "../application/use-cases/schedule-batch.use-case";
import type { StopBatchUseCase } from "../application/use-cases/stop-batch.use-case";
import type { ResumeBatchUseCase } from "../application/use-cases/resume-batch.use-case";
import type { DeleteBatchUseCase } from "../application/use-cases/delete-batch.use-case";
import type { GetBatchStatsUseCase } from "../application/use-cases/get-batch-stats.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import type { RetryConfig } from "../../../shared/types/bolna.types";

export class BatchController {
  constructor(
    private readonly listBatches: ListBatchesUseCase,
    private readonly getBatch: GetBatchUseCase,
    private readonly createBatch: CreateBatchUseCase,
    private readonly runBatch: RunBatchUseCase,
    private readonly scheduleBatch: ScheduleBatchUseCase,
    private readonly stopBatch: StopBatchUseCase,
    private readonly resumeBatch: ResumeBatchUseCase,
    private readonly deleteBatch: DeleteBatchUseCase,
    private readonly getBatchStats: GetBatchStatsUseCase,
  ) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const data = await this.listBatches.execute(tenantId, campaignId);
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
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.getBatch.execute(tenantId, campaignId, batchId);
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
      const campaignId = req.params.campaignId as string as string;

      if (!req.file) {
        res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          error: "No file uploaded",
        });
        return;
      }

      let retryConfig: RetryConfig | undefined;
      if (req.body.retryConfig) {
        try {
          retryConfig =
            typeof req.body.retryConfig === "string"
              ? (JSON.parse(req.body.retryConfig) as RetryConfig)
              : (req.body.retryConfig as RetryConfig);
        } catch {
          res.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            error: "Invalid retryConfig JSON",
          });
          return;
        }
      }

      const data = await this.createBatch.execute({
        tenantId,
        campaignId,
        fileBuffer: req.file.buffer,
        fileName: req.file.originalname,
        retryConfig,
      });

      sendSuccess(res, data, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  run = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.runBatch.execute(tenantId, campaignId, batchId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  schedule = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.scheduleBatch.execute(
        tenantId,
        campaignId,
        batchId,
        req.body.scheduledAt,
      );
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  stop = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.stopBatch.execute(tenantId, campaignId, batchId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  resume = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.resumeBatch.execute(
        tenantId,
        campaignId,
        batchId,
      );
      sendSuccess(res, data, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  remove = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.deleteBatch.execute(
        tenantId,
        campaignId,
        batchId,
      );
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
      const campaignId = req.params.campaignId as string;
      const batchId = req.params.batchId as string;
      const data = await this.getBatchStats.execute(
        tenantId,
        campaignId,
        batchId,
      );
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };
}
