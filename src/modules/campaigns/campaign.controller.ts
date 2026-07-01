import { Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
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
    const { name, description, assistantId, brochureId } = req.body;

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
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const uploadLeads = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    
    if (!req.file) {
      res.status(400).json({
        success: false,
        error: "File is required. Supported formats: CSV, XLS, XLSX",
      });
      return;
    }

    // Guard: double-check extension even if multer passed it
    const ext = path.extname(req.file.originalname).toLowerCase();
    const allowed = [".csv", ".xls", ".xlsx"];
    if (!allowed.includes(ext)) {
      // Remove the file multer already saved
      if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      res.status(400).json({
        success: false,
        error: `Unsupported file type "${ext}". Allowed: CSV, XLS, XLSX`,
      });
      return;
    }

    const id = getParam(req.params["id"]);
    const data = await campaignService.uploadLeads(
      req.user!.tenantId,
      id,
      req.file.path,
    );

    res.json({ success: true, data });
  } catch (error) {
    // If something went wrong and file still exists, clean up
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

export const start = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
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
  next: NextFunction,
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
