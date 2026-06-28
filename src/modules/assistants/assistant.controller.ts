// src/modules/assistants/assistant.controller.ts

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import { getParam } from "../../utils/paramHelper";
import assistantService from "./assistant.service";

// ─── GET /api/assistants ──────────────────────────────────────────────────────
export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await assistantService.list(req.user!.tenantId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// ─── GET /api/assistants/bolna-agents ─────────────────────────────────────────
// Fetch all agents from Bolna dashboard for dropdown selection
export const listBolnaAgents = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await assistantService.listBolnaAgents();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// ─── GET /api/assistants/:id ──────────────────────────────────────────────────
export const get = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await assistantService.get(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error: any) {
    if (error.message === "Assistant not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── POST /api/assistants/register ───────────────────────────────────────────
// Register an existing Bolna agent by pasting its agent_id
export const register = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, bolnaId } = req.body;

    if (!name || !bolnaId) {
      res.status(400).json({
        success: false,
        error: "name and bolnaId are required",
      });
      return;
    }

    const data = await assistantService.register(req.user!.tenantId, {
      name,
      bolnaId,
    });

    res.status(201).json({
      success: true,
      message: "Bolna agent registered successfully",
      data,
    });
  } catch (error: any) {
    if (
      error.message?.includes("not found") ||
      error.message?.includes("already registered")
    ) {
      res.status(400).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── PATCH /api/assistants/:id ────────────────────────────────────────────────
// Update friendly name only — prompt/voice changes via Bolna dashboard
export const update = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const { name } = req.body;

    const data = await assistantService.update(req.user!.tenantId, id, {
      name,
    });

    res.json({
      success: true,
      message: "Assistant updated",
      data,
    });
  } catch (error: any) {
    if (error.message === "Assistant not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── POST /api/assistants/:id/sync ───────────────────────────────────────────
// Re-fetch agent config from Bolna dashboard → update local DB
export const sync = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await assistantService.sync(req.user!.tenantId, id);

    res.json({
      success: true,
      message: "Assistant synced from Bolna dashboard",
      data,
    });
  } catch (error: any) {
    if (error.message === "Assistant not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── DELETE /api/assistants/:id ───────────────────────────────────────────────
export const remove = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    await assistantService.delete(req.user!.tenantId, id);

    res.json({
      success: true,
      message: "Assistant removed from system (Bolna agent unchanged)",
    });
  } catch (error: any) {
    if (error.message === "Assistant not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    if (error.message?.includes("Cannot delete")) {
      res.status(409).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};
