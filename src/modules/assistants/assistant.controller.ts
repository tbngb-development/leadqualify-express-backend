// src/modules/assistants/assistant.controller.ts

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import { getParam } from "../../utils/paramHelper";
import assistantService from "./assistant.service";

// ── Helper: resolve tenantId ──────────────────────────────────────────────────
// SUPER_ADMIN sends tenantId in body/query; tenant users use their JWT tenantId
function resolveTenantId(req: AuthRequest, fromBody?: string): string | null {
  if (req.user?.role === "SUPER_ADMIN") {
    // Admin must explicitly supply tenantId
    return fromBody ?? (req.query.tenantId as string) ?? null;
  }
  // Tenant user — always scoped to their own tenant
  return req.user?.tenantId ?? null;
}

// ─── GET /api/assistants ──────────────────────────────────────────────────────
export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = resolveTenantId(req);

    if (!tenantId) {
      res.status(400).json({
        success: false,
        error: "tenantId is required",
      });
      return;
    }

    const data = await assistantService.list(tenantId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// ─── GET /api/assistants/bolna-agents ─────────────────────────────────────────
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
    const tenantId = resolveTenantId(req);

    if (!tenantId) {
      res.status(400).json({ success: false, error: "tenantId is required" });
      return;
    }

    const data = await assistantService.get(tenantId, id);
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
export const register = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, bolnaId, tenantId: bodyTenantId } = req.body;

    if (!name || !bolnaId) {
      res.status(400).json({
        success: false,
        error: "name and bolnaId are required",
      });
      return;
    }

    const tenantId = resolveTenantId(req, bodyTenantId);

    if (!tenantId) {
      res.status(400).json({
        success: false,
        error: "tenantId is required",
      });
      return;
    }

    const data = await assistantService.register(tenantId, { name, bolnaId });

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
export const update = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const { name, tenantId: bodyTenantId } = req.body;

    const tenantId = resolveTenantId(req, bodyTenantId);

    if (!tenantId) {
      res.status(400).json({ success: false, error: "tenantId is required" });
      return;
    }

    const data = await assistantService.update(tenantId, id, { name });

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
export const sync = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const tenantId = resolveTenantId(req, req.body.tenantId);

    if (!tenantId) {
      res.status(400).json({ success: false, error: "tenantId is required" });
      return;
    }

    const data = await assistantService.sync(tenantId, id);

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
    const tenantId = resolveTenantId(req, req.body.tenantId);

    if (!tenantId) {
      res.status(400).json({ success: false, error: "tenantId is required" });
      return;
    }

    await assistantService.delete(tenantId, id);

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
