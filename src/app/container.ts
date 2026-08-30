import { PrismaAuthRepository } from "../modules/auth/infrastructure/repositories/prisma-auth.repository";
import { JwtTokenService } from "../modules/auth/infrastructure/services/jwt-token.service";
import { BcryptPasswordService } from "../modules/auth/infrastructure/services/bcrypt-password.service";

import { AuthController } from "../modules/auth/presentation/auth.controller";

import { PrismaCampaignRepository } from "../modules/campaigns/infrastructure/repositories/prisma-campaign.repository";
import { ListCampaignsUseCase } from "../modules/campaigns/application/use-cases/list-campaigns.use-case";
import { GetCampaignUseCase } from "../modules/campaigns/application/use-cases/get-campaign.use-case";
import { CreateCampaignUseCase } from "../modules/campaigns/application/use-cases/create-campaign.use-case";
import { ParseLeadsUseCase } from "../modules/campaigns/application/use-cases/parse-leads.use-case";
import { GetCampaignStatsUseCase } from "../modules/campaigns/application/use-cases/get-campaign-stats.use-case";
import { GetCampaignPerformanceUseCase } from "../modules/campaigns/application/use-cases/get-campaign-performance.use-case";
import { CampaignController } from "../modules/campaigns/presentation/campaign.controller";

import { PrismaBatchRepository } from "../modules/batches/infrastructure/repositories/prisma-batch.repository";
import { BolnaBatchProviderImpl } from "../modules/batches/infrastructure/bolna-batch-provider";
import { CloudinaryStorageProvider } from "../shared/config/external/storage/cloudinary.storage";
import { ListBatchesUseCase } from "../modules/batches/application/use-cases/list-batches.use-case";
import { GetBatchUseCase } from "../modules/batches/application/use-cases/get-batch.use-case";
import { CreateBatchUseCase } from "../modules/batches/application/use-cases/create-batch.use-case";
import { RunBatchUseCase } from "../modules/batches/application/use-cases/run-batch.use-case";
import { ScheduleBatchUseCase } from "../modules/batches/application/use-cases/schedule-batch.use-case";
import { StopBatchUseCase } from "../modules/batches/application/use-cases/stop-batch.use-case";
import { ResumeBatchUseCase } from "../modules/batches/application/use-cases/resume-batch.use-case";
import { DeleteBatchUseCase } from "../modules/batches/application/use-cases/delete-batch.use-case";
import { GetBatchStatsUseCase } from "../modules/batches/application/use-cases/get-batch-stats.use-case";
import { BatchController } from "../modules/batches/presentation/batch.controller";

import { PrismaUserRepository } from "../modules/users/infrastructure/repositories/prisma-user.repository";
import { ListUsersUseCase } from "../modules/users/application/use-cases/list-users.use-case";
import { CreateUserUseCase } from "../modules/users/application/use-cases/create-user.use-case";
import { UpdateUserUseCase } from "../modules/users/application/use-cases/update-user.use-case";
import { DeleteUserUseCase } from "../modules/users/application/use-cases/delete-user.use-case";
import { UserController } from "../modules/users/presentation/user.controller";

import { PrismaTenantRepository } from "../modules/tenants/infrastructure/repositories/prisma-tenant.repository";
import { ListTenantsUseCase } from "../modules/tenants/application/use-cases/list-tenants.use-case";
import { GetTenantUseCase } from "../modules/tenants/application/use-cases/get-tenant.use-case";
import { UpdateTenantUseCase } from "../modules/tenants/application/use-cases/update-tenant.use-case";
import { GetTenantStatsUseCase } from "../modules/tenants/application/use-cases/get-tenant-stats.use-case";
import { TenantController } from "../modules/tenants/presentation/tenant.controller";

import { PrismaAssistantRepository } from "../modules/assistants/infrastructure/repositories/prisma-assistant.repository";
import { BolnaAgentProviderImpl } from "../modules/assistants/infrastructure/services/bolna-agent.provider";
import { ListAssistantsUseCase } from "../modules/assistants/application/use-cases/list-assistants.use-case";
import { ListBolnaAgentsUseCase } from "../modules/assistants/application/use-cases/list-bolna-agents.use-case";
import { GetAssistantUseCase } from "../modules/assistants/application/use-cases/get-assistant.use-case";
import { RegisterAssistantUseCase } from "../modules/assistants/application/use-cases/register-assistant.use-case";
import { UpdateAssistantUseCase } from "../modules/assistants/application/use-cases/update-assistant.use-case";
import { SyncAssistantUseCase } from "../modules/assistants/application/use-cases/sync-assistant.use-case";
import { DeleteAssistantUseCase } from "../modules/assistants/application/use-cases/delete-assistant.use-case";
import { AssistantController } from "../modules/assistants/presentation/assistant.controller";

import { PrismaLeadRepository } from "../modules/leads/infrastructure/repositories/prisma-lead.repository";
import { ListLeadsUseCase } from "../modules/leads/application/use-cases/list-leads.use-case";
import { GetLeadUseCase } from "../modules/leads/application/use-cases/get-lead.use-case";
import { GetLeadStatsUseCase } from "../modules/leads/application/use-cases/get-lead-stats.use-case";
import { LeadController } from "../modules/leads/presentation/lead.controller";

import { PrismaCallRepository } from "../modules/calls/infrastructure/repositories/prisma-call.repository";
import { ListCallsUseCase } from "../modules/calls/application/use-cases/list-calls.use-case";
import { GetCallUseCase } from "../modules/calls/application/use-cases/get-call.use-case";
import { GetCallTranscriptUseCase } from "../modules/calls/application/use-cases/get-call-transcript.use-case";
import { GetCallStatsUseCase } from "../modules/calls/application/use-cases/get-call-stats.use-case";
import { CallController } from "../modules/calls/presentation/call.controller";

import { PrismaDashboardRepository } from "../modules/dashboard/infrastructure/repositories/prisma-dashboard.repository";
import { GetDashboardOverviewUseCase } from "../modules/dashboard/application/use-cases/get-dashboard-overview.use-case";
import { GetDashboardActivityUseCase } from "../modules/dashboard/application/use-cases/get-dashboard-activity.use-case";
import { GetDashboardCampaignsUseCase } from "../modules/dashboard/application/use-cases/get-dashboard-campaigns.use-case";
import { DashboardController } from "../modules/dashboard/presentation/dashboard.controller";

import { ProcessCallWebhookUseCase } from "../modules/webhooks/application/use-cases/process-call-webhook.use-case";
import { ProcessBatchWebhookUseCase } from "../modules/webhooks/application/use-cases/process-batch-webhook.use-case";
import { WebhookController } from "../modules/webhooks/presentation/webhook.controller";

import { AuthenticateMiddleware } from "../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../shared/middleware/authorize";
import { BrochureController } from "../modules/brochure/presentation/brochure.controller";
import { PrismaWebhookRepository } from "../modules/webhooks/infrastructure/repositories/prisma-webhook.repository";
import { PrismaBrochureRepository } from "../modules/brochure/infrastructure/repositories/prisma-brochure.repository";
import { RegisterTenantOwnerUseCase } from "../modules/auth/application/use-cases/register-tenant-owner.use-case";
import { LoginUseCase } from "../modules/auth/application/use-cases/login.use-case";
import { SelectTenantUseCase } from "../modules/auth/application/use-cases/select-tenant.use-case";
import { RefreshTokensUseCase } from "../modules/auth/application/use-cases/refresh-tokens.use-case";
import { GetProfileUseCase } from "../modules/auth/application/use-cases/get-profile.use-case";
import { CreateInviteUseCase } from "../modules/auth/application/use-cases/create-invite.use-case";
import { AcceptInviteUseCase } from "../modules/auth/application/use-cases/accept-invite.use-case";
import { LogoutUseCase } from "../modules/auth/application/use-cases/logout.use-case";
import { ExtractBrochureUseCase } from "../modules/brochure/application/use-cases/extract-brochure.use-case";
import { SaveBrochureUseCase } from "../modules/brochure/application/use-cases/save-brochure.use-case";
import { ListBrochuresUseCase } from "../modules/brochure/application/use-cases/list-brochures.use-case";
import { GetBrochureUseCase } from "../modules/brochure/application/use-cases/get-brochure.use-case";
import { UpdateBrochureUseCase } from "../modules/brochure/application/use-cases/update-brochure.use-case";
import { DeleteBrochureUseCase } from "../modules/brochure/application/use-cases/delete-brochure.use-case";

export interface Container {
  authController: AuthController;
  campaignController: CampaignController;
  batchController: BatchController;
  userController: UserController;
  tenantController: TenantController;
  assistantController: AssistantController;
  leadController: LeadController;
  callController: CallController;
  dashboardController: DashboardController;
  webhookController: WebhookController;
  brochureController: BrochureController;
  authenticate: AuthenticateMiddleware;
  authorize: AuthorizeMiddleware;
}

export function buildContainer(): Container {
  // ── Infrastructure ────────────────────────────────────────────────────────
  const authRepository = new PrismaAuthRepository();
  const tokenService = new JwtTokenService();
  const passwordService = new BcryptPasswordService();

  const campaignRepository = new PrismaCampaignRepository();
  const batchRepository = new PrismaBatchRepository();
  const userRepository = new PrismaUserRepository();
  const tenantRepository = new PrismaTenantRepository();
  const assistantRepository = new PrismaAssistantRepository();
  const leadRepository = new PrismaLeadRepository();
  const callRepository = new PrismaCallRepository();
  const dashboardRepository = new PrismaDashboardRepository();
  const webhookRepository = new PrismaWebhookRepository();
  const brochureRepository = new PrismaBrochureRepository();

  const storageProvider = new CloudinaryStorageProvider();
  const bolnaBatchProvider = new BolnaBatchProviderImpl();
  const bolnaAgentProvider = new BolnaAgentProviderImpl();

  // ── Auth Use Cases ────────────────────────────────────────────────────────
  const registerTenantOwnerUseCase = new RegisterTenantOwnerUseCase(
    authRepository,
    passwordService,
    tokenService,
  );
  const loginUseCase = new LoginUseCase(
    authRepository,
    passwordService,
    tokenService,
  );
  const selectTenantUseCase = new SelectTenantUseCase(
    authRepository,
    tokenService,
  );
  const refreshTokensUseCase = new RefreshTokensUseCase(
    authRepository,
    tokenService,
  );
  const getProfileUseCase = new GetProfileUseCase(authRepository);
  const createInviteUseCase = new CreateInviteUseCase(tokenService);
  const acceptInviteUseCase = new AcceptInviteUseCase(
    authRepository,
    passwordService,
    tokenService,
  );
  const logoutUseCase = new LogoutUseCase(authRepository, tokenService);

  // ── Campaign Use Cases ────────────────────────────────────────────────────
  const listCampaignsUseCase = new ListCampaignsUseCase(campaignRepository);
  const getCampaignUseCase = new GetCampaignUseCase(campaignRepository);
  const createCampaignUseCase = new CreateCampaignUseCase(campaignRepository);
  const parseLeadsUseCase = new ParseLeadsUseCase(
    campaignRepository,
    batchRepository,
  );
  const getCampaignStatsUseCase = new GetCampaignStatsUseCase(
    campaignRepository,
  );
  const getCampaignPerformanceUseCase = new GetCampaignPerformanceUseCase(
    campaignRepository,
  );

  // ── Batch Use Cases ───────────────────────────────────────────────────────
  const listBatchesUseCase = new ListBatchesUseCase(
    batchRepository,
    campaignRepository,
  );
  const getBatchUseCase = new GetBatchUseCase(batchRepository);
  const createBatchUseCase = new CreateBatchUseCase(
    batchRepository,
    campaignRepository,
    storageProvider,
    bolnaBatchProvider,
  );
  const runBatchUseCase = new RunBatchUseCase(
    batchRepository,
    campaignRepository,
    bolnaBatchProvider,
  );
  const scheduleBatchUseCase = new ScheduleBatchUseCase(
    batchRepository,
    campaignRepository,
    bolnaBatchProvider,
  );
  const stopBatchUseCase = new StopBatchUseCase(
    batchRepository,
    campaignRepository,
    bolnaBatchProvider,
  );
  const resumeBatchUseCase = new ResumeBatchUseCase(
    batchRepository,
    campaignRepository,
    storageProvider,
    bolnaBatchProvider,
  );
  const deleteBatchUseCase = new DeleteBatchUseCase(
    batchRepository,
    bolnaBatchProvider,
  );
  const getBatchStatsUseCase = new GetBatchStatsUseCase(batchRepository);

  // ── User Use Cases ────────────────────────────────────────────────────────
  const listUsersUseCase = new ListUsersUseCase(userRepository);
  const createUserUseCase = new CreateUserUseCase(
    userRepository,
    passwordService,
  );
  const updateUserUseCase = new UpdateUserUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  // ── Tenant Use Cases ──────────────────────────────────────────────────────
  const listTenantsUseCase = new ListTenantsUseCase(tenantRepository);
  const getTenantUseCase = new GetTenantUseCase(tenantRepository);
  const updateTenantUseCase = new UpdateTenantUseCase(tenantRepository);
  const getTenantStatsUseCase = new GetTenantStatsUseCase(tenantRepository);

  // ── Assistant Use Cases ───────────────────────────────────────────────────
  const listAssistantsUseCase = new ListAssistantsUseCase(assistantRepository);
  const listBolnaAgentsUseCase = new ListBolnaAgentsUseCase(bolnaAgentProvider);
  const getAssistantUseCase = new GetAssistantUseCase(
    assistantRepository,
    bolnaAgentProvider,
  );
  const registerAssistantUseCase = new RegisterAssistantUseCase(
    assistantRepository,
    bolnaAgentProvider,
  );
  const updateAssistantUseCase = new UpdateAssistantUseCase(
    assistantRepository,
  );
  const syncAssistantUseCase = new SyncAssistantUseCase(
    assistantRepository,
    bolnaAgentProvider,
  );
  const deleteAssistantUseCase = new DeleteAssistantUseCase(
    assistantRepository,
  );

  // ── Lead Use Cases ────────────────────────────────────────────────────────
  const listLeadsUseCase = new ListLeadsUseCase(leadRepository);
  const getLeadUseCase = new GetLeadUseCase(leadRepository);
  const getLeadStatsUseCase = new GetLeadStatsUseCase(leadRepository);

  // ── Call Use Cases ────────────────────────────────────────────────────────
  const listCallsUseCase = new ListCallsUseCase(callRepository);
  const getCallUseCase = new GetCallUseCase(callRepository);
  const getCallTranscriptUseCase = new GetCallTranscriptUseCase(callRepository);
  const getCallStatsUseCase = new GetCallStatsUseCase(callRepository);

  // ── Dashboard Use Cases ───────────────────────────────────────────────────
  const getOverviewUseCase = new GetDashboardOverviewUseCase(
    dashboardRepository,
  );
  const getActivityUseCase = new GetDashboardActivityUseCase(
    dashboardRepository,
  );
  const getCampaignsUseCase = new GetDashboardCampaignsUseCase(
    dashboardRepository,
  );

  // ── Webhook Use Cases ─────────────────────────────────────────────────────
  const processCallWebhookUseCase = new ProcessCallWebhookUseCase(
    webhookRepository,
  );
  const processBatchWebhookUseCase = new ProcessBatchWebhookUseCase(
    webhookRepository,
  );

  // ── Brochure Use Cases ────────────────────────────────────────────────────
  const extractBrochureUseCase = new ExtractBrochureUseCase();
  const saveBrochureUseCase = new SaveBrochureUseCase(brochureRepository);
  const listBrochuresUseCase = new ListBrochuresUseCase(brochureRepository);
  const getBrochureUseCase = new GetBrochureUseCase(brochureRepository);
  const updateBrochureUseCase = new UpdateBrochureUseCase(brochureRepository);
  const deleteBrochureUseCase = new DeleteBrochureUseCase(brochureRepository);

  // ── Controllers ───────────────────────────────────────────────────────────
  const authController = new AuthController(
    registerTenantOwnerUseCase,
    loginUseCase,
    selectTenantUseCase,
    refreshTokensUseCase,
    getProfileUseCase,
    createInviteUseCase,
    acceptInviteUseCase,
    logoutUseCase,
  );

  const campaignController = new CampaignController(
    listCampaignsUseCase,
    getCampaignUseCase,
    createCampaignUseCase,
    parseLeadsUseCase,
    getCampaignStatsUseCase,
    getCampaignPerformanceUseCase,
  );

  const batchController = new BatchController(
    listBatchesUseCase,
    getBatchUseCase,
    createBatchUseCase,
    runBatchUseCase,
    scheduleBatchUseCase,
    stopBatchUseCase,
    resumeBatchUseCase,
    deleteBatchUseCase,
    getBatchStatsUseCase,
  );

  const userController = new UserController(
    listUsersUseCase,
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
  );

  const tenantController = new TenantController(
    listTenantsUseCase,
    getTenantUseCase,
    updateTenantUseCase,
    getTenantStatsUseCase,
  );

  const assistantController = new AssistantController(
    listAssistantsUseCase,
    listBolnaAgentsUseCase,
    getAssistantUseCase,
    registerAssistantUseCase,
    updateAssistantUseCase,
    syncAssistantUseCase,
    deleteAssistantUseCase,
  );

  const leadController = new LeadController(
    listLeadsUseCase,
    getLeadUseCase,
    getLeadStatsUseCase,
  );

  const callController = new CallController(
    listCallsUseCase,
    getCallUseCase,
    getCallTranscriptUseCase,
    getCallStatsUseCase,
  );

  const dashboardController = new DashboardController(
    getOverviewUseCase,
    getActivityUseCase,
    getCampaignsUseCase,
  );

  const webhookController = new WebhookController(
    processCallWebhookUseCase,
    processBatchWebhookUseCase,
  );

  const brochureController = new BrochureController(
    extractBrochureUseCase,
    saveBrochureUseCase,
    listBrochuresUseCase,
    getBrochureUseCase,
    updateBrochureUseCase,
    deleteBrochureUseCase,
  );

  // ── Middleware ─────────────────────────────────────────────────────────────
  const authenticate = new AuthenticateMiddleware(tokenService, authRepository);
  const authorize = new AuthorizeMiddleware();

  return {
    authController,
    campaignController,
    batchController,
    userController,
    tenantController,
    assistantController,
    leadController,
    callController,
    dashboardController,
    webhookController,
    brochureController,
    authenticate,
    authorize,
  };
}
