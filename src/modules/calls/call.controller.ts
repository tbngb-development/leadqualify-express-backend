// src/modules/calls/call.controller.ts

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import callService from "./call.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const {
      campaignId,
      leadId,
      status,
      disposition,
      leadTemperature,
      search,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      page = "1",
      limit = "20",
    } = req.query;

    const data = await callService.list(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
      leadId: leadId ? String(leadId) : undefined,
      status: status ? String(status) : undefined,
      disposition: disposition ? String(disposition) : undefined,
      leadTemperature: leadTemperature ? String(leadTemperature) : undefined,
      search: search ? String(search) : undefined, // <─── ADDED
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
    const data = await callService.get(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getTranscript = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await callService.getTranscript(req.user!.tenantId, id);
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
    const { campaignId, leadId } = req.query;
    const data = await callService.getStats(req.user!.tenantId, {
      campaignId: campaignId ? String(campaignId) : undefined,
      leadId: leadId ? String(leadId) : undefined,
    });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
