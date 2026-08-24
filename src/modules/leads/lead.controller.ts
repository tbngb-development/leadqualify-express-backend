// src/modules/leads/lead.controller.ts

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
    const {
      campaignId,
      status,
      search, // <─── ADDED
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      page,
      limit,
    } = req.query;

    const data = await leadService.list(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
      status: status ? String(status) : undefined,
      search: search ? String(search) : undefined,
      dateFrom: dateFrom ? String(dateFrom) : undefined,
      dateTo: dateTo ? String(dateTo) : undefined,
      sortBy: sortBy ? String(sortBy) : undefined,
      sortOrder: sortOrder === "asc" ? "asc" : "desc",
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 15,
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

export const getStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
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
