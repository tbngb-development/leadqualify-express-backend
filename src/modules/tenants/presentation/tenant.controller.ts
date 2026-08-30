import { Request, Response, NextFunction } from "express";
import { ListTenantsUseCase } from "../application/use-cases/list-tenants.use-case";
import { GetTenantUseCase } from "../application/use-cases/get-tenant.use-case";
import { GetTenantStatsUseCase } from "../application/use-cases/get-tenant-stats.use-case";
import { UpdateTenantUseCase } from "../application/use-cases/update-tenant.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { UpdateWorkspaceBody, AdminUpdateTenantBody } from "./tenant.schema";

export class TenantController {
  constructor(
    private readonly listTenants: ListTenantsUseCase,
    private readonly getTenant: GetTenantUseCase,
    private readonly updateTenant: UpdateTenantUseCase,
    private readonly getTenantStats: GetTenantStatsUseCase,
  ) {}

  // ─── Tenant Workspace Handlers (Scoped by JWT) ───────────────────────────

  getCurrent = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const tenant = await this.getTenant.execute(tenantId);
      sendSuccess(res, tenant);
    } catch (err) {
      next(err);
    }
  };

  updateCurrent = async (
    req: Request<unknown, unknown, UpdateWorkspaceBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      // Only updates name; isActive cannot be tampered with by tenant users
      const updated = await this.updateTenant.execute(tenantId, {
        name: req.body.name,
      });
      sendSuccess(res, updated);
    } catch (err) {
      next(err);
    }
  };

  getCurrentStats = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const stats = await this.getTenantStats.execute(tenantId);
      sendSuccess(res, stats);
    } catch (err) {
      next(err);
    }
  };

  // ─── Platform Admin Handlers (Scoped by Explicit Param ID) ───────────────

  adminList = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenants = await this.listTenants.execute();
      sendSuccess(res, tenants);
    } catch (err) {
      next(err);
    }
  };

  adminGet = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenant = await this.getTenant.execute(req.params.id);
      sendSuccess(res, tenant);
    } catch (err) {
      next(err);
    }
  };

  adminUpdate = async (
    req: Request<{ id: string }, unknown, AdminUpdateTenantBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const updated = await this.updateTenant.execute(req.params.id, req.body);
      sendSuccess(res, updated);
    } catch (err) {
      next(err);
    }
  };

  adminStats = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const stats = await this.getTenantStats.execute(req.params.id);
      sendSuccess(res, stats);
    } catch (err) {
      next(err);
    }
  };
}
