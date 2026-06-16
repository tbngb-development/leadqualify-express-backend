import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import assistantService from "./assistant.service";
import { getParam } from "../../utils/paramHelper";

export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await assistantService.list(req.user!.tenantId);
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
    const data = await assistantService.get(req.user!.tenantId, id);
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
    const { name, firstMessage, systemPrompt, voice } = req.body;

    if (!name || !firstMessage || !systemPrompt) {
      res.status(400).json({
        success: false,
        error: "name, firstMessage, systemPrompt are required",
      });
      return;
    }

    const data = await assistantService.create(req.user!.tenantId, {
      name,
      firstMessage,
      systemPrompt,
      voice,
    });

    res.status(201).json({ success: true, data });
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
    const data = await assistantService.update(
      req.user!.tenantId,
      id,
      req.body
    );
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    await assistantService.delete(req.user!.tenantId, id);
    res.json({ success: true, data: null, message: "Assistant deleted" });
  } catch (error) {
    next(error);
  }
};