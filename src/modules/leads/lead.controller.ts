// src/modules/leads/lead.controller.ts

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import leadService from "./lead.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      campaignId,
      status,
      doNotCall,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      page = "1",
      limit = "20",
    } = req.query;

    const data = await leadService.list(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
      status: status ? String(status) : undefined,
      doNotCall:
        doNotCall !== undefined ? doNotCall === "true" : undefined,
      dateFrom: dateFrom ? String(dateFrom) : undefined,
      dateTo: dateTo ? String(dateTo) : undefined,
      sortBy: sortBy ? String(sortBy) : undefined,
      sortOrder: sortOrder ? String(sortOrder) : undefined,
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
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await leadService.get(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { campaignId } = req.query;
    const data = await leadService.getStats(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
    });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};