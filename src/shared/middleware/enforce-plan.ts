import type { Request, Response, NextFunction, RequestHandler } from "express";
import { getTenantContext } from "../utils/tenant-context";
import type { PlanRepository } from "../../modules/plans/application/interfaces/plan-repository.interface";
import {
  PlanNotActiveError,
  PlanLimitExceededError,
  PlanFeatureNotAvailableError,
  TenantPlanNotFoundError,
} from "../../modules/plans/domain/errors/plan.errors";

export type PlanFeature =
  "CREATE_CAMPAIGN" | "RETRY_AUTOMATION" | "MAX_LEADS_PER_BATCH";

export class EnforcePlanMiddleware {
  constructor(private readonly planRepo: PlanRepository) {}

  check(feature: PlanFeature): RequestHandler {
    return async (req: Request, _res: Response, next: NextFunction) => {
      try {
        const ctx = getTenantContext(req);

        const plan = await this.planRepo.getActivePlanForTenant(ctx.tenantId);
        if (!plan) throw new TenantPlanNotFoundError(ctx.tenantId);
        if (plan.status !== "ACTIVE") throw new PlanNotActiveError();

        switch (feature) {
          case "CREATE_CAMPAIGN":
            if (plan.maxActiveCampaigns !== null) {
              const count = await this.planRepo.countActiveCampaigns(
                ctx.tenantId,
              );
              if (count >= plan.maxActiveCampaigns) {
                throw new PlanLimitExceededError(
                  "active campaigns",
                  plan.maxActiveCampaigns,
                );
              }
            }
            break;

          case "RETRY_AUTOMATION":
            if (!plan.retryAutomation) {
              throw new PlanFeatureNotAvailableError("retry automation");
            }
            break;

          case "MAX_LEADS_PER_BATCH":
            // Usually enforced inside use-case with payload count, leaving empty for route-level pass
            break;
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
