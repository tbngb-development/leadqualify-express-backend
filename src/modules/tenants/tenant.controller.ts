import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import tenantService from "./tenant.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await tenantService.list();
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
    const data = await tenantService.get(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const { name, isActive } = req.body;
    const data = await tenantService.update(id, { name, isActive });
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
    const data = await tenantService.stats(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};