import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import { getTenantContext } from "../../../shared/utils/tenant-context";
import type { ListPlansUseCase } from "../application/use-cases/list-plans.use-case";
import type { GetTenantPlanUseCase } from "../application/use-cases/get-tenant-plan.use-case";
import type { SelectPlanUseCase } from "../application/use-cases/select-plan.use-case";
import { param } from "../../../shared/utils/paramHelper";

export class TenantPlanController {
  constructor(
    private readonly listPlansUseCase: ListPlansUseCase,
    private readonly getTenantPlanUseCase: GetTenantPlanUseCase,
    private readonly selectPlanUseCase: SelectPlanUseCase, // ← NEW
  ) {}

  /**
   * GET /v1/plans/available
   * Public pricing catalogue (active plans only).
   */
  listAvailable = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const plans = await this.listPlansUseCase.execute({
        includeInactive: false,
      });
      sendSuccess(res, plans);
    } catch (err) {
      next(err);
    }
  };

  /**
   * GET /v1/plans/mine
   * Returns the authenticated tenant's current plan + status.
   */
  getMine = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = getTenantContext(req);
      const plan = await this.getTenantPlanUseCase.execute(tenantId);
      sendSuccess(res, plan);
    } catch (err) {
      next(err);
    }
  };

  // ── NEW ────────────────────────────────────────────────────────
  /**
   * POST /v1/plans/:planId/select
   * Self-registration: user picks a plan before payment.
   * Creates / updates TenantPlan with PENDING_PAYMENT status.
   */
  selectPlan = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = getTenantContext(req);

      const tenantPlan = await this.selectPlanUseCase.execute(
        tenantId,
        param(req, "planId"),
      );
      sendSuccess(res, tenantPlan, 201);
    } catch (err) {
      next(err);
    }
  };
  // ───────────────────────────────────────────────────────────────
}
