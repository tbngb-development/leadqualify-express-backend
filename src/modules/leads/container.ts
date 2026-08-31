import { PrismaLeadRepository } from "./infrastructure/repositories/prisma-lead.repository";
import { ListLeadsUseCase } from "./application/use-cases/list-leads.use-case";
import { GetLeadUseCase } from "./application/use-cases/get-lead.use-case";
import { GetLeadStatsUseCase } from "./application/use-cases/get-lead-stats.use-case";
import { TenantLeadController } from "./presentation/tenant-lead.controller";

export interface LeadModule {
  tenantController: TenantLeadController;
}

export function buildLeadModule(): LeadModule {
  const repo = new PrismaLeadRepository();

  return {
    tenantController: new TenantLeadController(
      new ListLeadsUseCase(repo),
      new GetLeadUseCase(repo),
      new GetLeadStatsUseCase(repo),
    ),
  };
}
