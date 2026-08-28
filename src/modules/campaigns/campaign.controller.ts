import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import campaignService from "./campaign.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await campaignService.list(req.user!.tenantId);
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
    const id = getParam(req.params["id"]);
    const data = await campaignService.get(req.user!.tenantId, id);
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
    const {
      name,
      description,
      assistantId,
      brochureId,
      variables,
      defaultRetryConfig,
    } = req.body;

    if (!name || !assistantId) {
      res.status(400).json({
        success: false,
        error: "name and assistantId are required",
      });
      return;
    }

    const data = await campaignService.create(req.user!.tenantId, {
      name,
      description,
      assistantId,
      brochureId,
      variables,
      defaultRetryConfig,
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const parseLeads = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.user!.tenantId;
    const campaignId = getParam(req.params["id"]);

    if (!req.file) {
      res.status(400).json({ success: false, error: "No file uploaded" });
      return;
    }

    const result = await campaignService.parseLeads(
      tenantId,
      campaignId,
      req.file.path,
    );

    res.json({ success: true, data: result });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to parse leads";
    res.status(400).json({ success: false, error: message });
  }
};

// ── DEPRECATED placeholder ──
export const uploadLeads = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  res.status(410).json({
    success: false,
    error:
      "Legacy file upload deprecated. Please use POST /api/campaigns/:id/batches to upload and track leads in V1.",
  });
};

// ── DEPRECATED placeholder ──
export const start = async (req: AuthRequest, res: Response): Promise<void> => {
  res.status(410).json({
    success: false,
    error:
      "Campaign-level start deprecated. Use POST /api/campaigns/:id/batches/:batchId/run or /schedule.",
  });
};

// ── DEPRECATED placeholder ──
export const pause = async (req: AuthRequest, res: Response): Promise<void> => {
  res.status(410).json({
    success: false,
    error:
      "Campaign-level pause deprecated. Use POST /api/campaigns/:id/batches/:batchId/stop instead.",
  });
};

// ── DEPRECATED placeholder ──
export const cancelSchedule = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  res.status(410).json({
    success: false,
    error:
      "Campaign-level schedule cancel deprecated. Use POST /api/campaigns/:id/batches/:batchId/stop instead.",
  });
};

export const stats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await campaignService.stats(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const performance = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await campaignService.performanceStats(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
