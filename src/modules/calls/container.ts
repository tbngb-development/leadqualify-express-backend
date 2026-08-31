import { PrismaCallRepository } from "./infrastructure/repositories/prisma-call.repository";
import { ListCallsUseCase } from "./application/use-cases/list-calls.use-case";
import { GetCallUseCase } from "./application/use-cases/get-call.use-case";
import { GetCallTranscriptUseCase } from "./application/use-cases/get-call-transcript.use-case";
import { GetCallStatsUseCase } from "./application/use-cases/get-call-stats.use-case";
import { TenantCallController } from "./presentation/tenant-call.controller";

export interface CallModule {
  tenantController: TenantCallController;
}

export function buildCallModule(): CallModule {
  const repo = new PrismaCallRepository();

  return {
    tenantController: new TenantCallController(
      new ListCallsUseCase(repo),
      new GetCallUseCase(repo),
      new GetCallTranscriptUseCase(repo),
      new GetCallStatsUseCase(repo),
    ),
  };
}