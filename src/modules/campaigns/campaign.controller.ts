import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import campaignService from "./campaign.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
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
  next: NextFunction
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
  next: NextFunction
): Promise<void> => {
  try {
    const { name, description, assistantId } = req.body;

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
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const uploadLeads = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, error: "CSV file is required" });
      return;
    }

    const id = getParam(req.params["id"]);
    const data = await campaignService.uploadLeads(
      req.user!.tenantId,
      id,
      req.file.path
    );

    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const start = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await campaignService.start(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const pause = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await campaignService.pause(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const stats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await campaignService.stats(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};