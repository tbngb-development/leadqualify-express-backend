import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import batchService from "./batch.service";
import { getParam } from "../../utils/paramHelper";
import { RetryConfig } from "../../types/bolna.types";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const data = await batchService.list(tenantId, campaignId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const get = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["id"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.get(tenantId, campaignId, batchId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);

    if (!req.file) {
      res.status(400).json({ success: false, error: "No file uploaded" });
      return;
    }

    let retryConfig: RetryConfig | undefined;
    if (req.body.retryConfig) {
      try {
        retryConfig =
          typeof req.body.retryConfig === "string"
            ? JSON.parse(req.body.retryConfig)
            : req.body.retryConfig;
      } catch {
        res.status(400).json({
          success: false,
          error: "Invalid retryConfig JSON",
        });
        return;
      }
    }

    const data = await batchService.create(
      tenantId,
      campaignId,
      req.file.path,
      retryConfig,
    );

    res.status(201).json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to create batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const run = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.run(tenantId, campaignId, batchId);
    res.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to run batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const schedule = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const { scheduledAt } = req.body;
    console.log("batch schedule at: ", scheduledAt)

    if (!scheduledAt) {
      res.status(400).json({
        success: false,
        error: "scheduledAt is required (ISO 8601 with timezone)",
      });
      return;
    }

    const data = await batchService.schedule(
      tenantId,
      campaignId,
      batchId,
      scheduledAt,
    );
    res.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to schedule batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const stop = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.stop(tenantId, campaignId, batchId);
    res.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to stop batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const resume = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.resume(tenantId, campaignId, batchId);
    res.status(201).json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to resume batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const remove = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.delete(tenantId, campaignId, batchId);
    res.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to delete batch";
    res.status(400).json({ success: false, error: message });
  }
};

export const stats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["campaignId"]);
    const batchId = getParam(req.params["batchId"]);
    const data = await batchService.stats(tenantId, campaignId, batchId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};