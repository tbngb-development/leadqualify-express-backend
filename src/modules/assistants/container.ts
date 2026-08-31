import { PrismaAssistantRepository } from "./infrastructure/repositories/prisma-assistant.repository";
import { BolnaAgentProviderImpl } from "./infrastructure/services/bolna-agent.provider";
import { ListAssistantsUseCase } from "./application/use-cases/list-assistants.use-case";
import { ListBolnaAgentsUseCase } from "./application/use-cases/list-bolna-agents.use-case";
import { GetAssistantUseCase } from "./application/use-cases/get-assistant.use-case";
import { RegisterAssistantUseCase } from "./application/use-cases/register-assistant.use-case";
import { UpdateAssistantUseCase } from "./application/use-cases/update-assistant.use-case";
import { SyncAssistantUseCase } from "./application/use-cases/sync-assistant.use-case";
import { DeleteAssistantUseCase } from "./application/use-cases/delete-assistant.use-case";
import { TenantAssistantController } from "./presentation/tenant-assistant.controller";
import { AdminAssistantController } from "./presentation/admin-assistant.controller";

export interface AssistantModule {
  tenantController: TenantAssistantController;
  adminController: AdminAssistantController;
}

export function buildAssistantModule(): AssistantModule {
  const repository = new PrismaAssistantRepository();
  const bolnaProvider = new BolnaAgentProviderImpl();

  const listAssistants = new ListAssistantsUseCase(repository);
  const getAssistant = new GetAssistantUseCase(repository, bolnaProvider);

  return {
    tenantController: new TenantAssistantController(
      listAssistants,
      getAssistant,
    ),
    adminController: new AdminAssistantController(
      listAssistants,
      new ListBolnaAgentsUseCase(bolnaProvider),
      getAssistant,
      new RegisterAssistantUseCase(repository, bolnaProvider),
      new UpdateAssistantUseCase(repository),
      new SyncAssistantUseCase(repository, bolnaProvider),
      new DeleteAssistantUseCase(repository),
    ),
  };
}
