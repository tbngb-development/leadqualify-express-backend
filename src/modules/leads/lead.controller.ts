import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import leadService from "./lead.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { campaignId, status, page = "1", limit = "20" } = req.query;

    const data = await leadService.list(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
      status: status ? String(status) : undefined,
      page: Number(page),
      limit: Number(limit),
    });

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
    const data = await leadService.get(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
