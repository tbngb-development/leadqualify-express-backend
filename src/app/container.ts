import { PrismaAuthRepository } from "../modules/auth/infrastructure/repositories/prisma-auth.repository";
import { JwtTokenService } from "../modules/auth/infrastructure/services/jwt-token.service";
import { BcryptPasswordService } from "../modules/auth/infrastructure/services/bcrypt-password.service";
import { AuthenticateMiddleware } from "../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../shared/middleware/authorize";
import { EnforcePlanMiddleware } from "../shared/middleware/enforce-plan";
import {
  BolnaClientFactory,
  type IBolnaClientFactory,
} from "../shared/config/external/bolna/bolna-client.factory";

import { buildAuthModule, type AuthModule } from "../modules/auth/container";
import {
  buildAssistantModule,
  type AssistantModule,
} from "../modules/assistants/container";
import {
  buildTenantModule,
  type TenantModule,
} from "../modules/tenants/container";
import {
  buildCampaignModule,
  type CampaignModule,
} from "../modules/campaigns/container";
import {
  buildBatchModule,
  type BatchModule,
} from "../modules/batches/container";
import { buildLeadModule, type LeadModule } from "../modules/leads/container";
import { buildCallModule, type CallModule } from "../modules/calls/container";
import {
  buildDashboardModule,
  type DashboardModule,
} from "../modules/dashboard/container";
import {
  buildBrochureModule,
  type BrochureModule,
} from "../modules/brochure/container";
import { buildUserModule, type UserModule } from "../modules/users/container";
import {
  buildWebhookModule,
  type WebhookModule,
} from "../modules/webhooks/container";
import { buildPlanModule, type PlanModule } from "../modules/plans/container";
import {
  buildBolnaApiKeyModule,
  type BolnaApiKeyModule,
} from "../modules/bolna-api-keys/container";

export interface AppContainer {
  // Existing
  auth: AuthModule;
  assistants: AssistantModule;
  tenants: TenantModule;
  campaigns: CampaignModule;
  batches: BatchModule;
  leads: LeadModule;
  calls: CallModule;
  dashboard: DashboardModule;
  brochures: BrochureModule;
  users: UserModule;
  webhooks: WebhookModule;

  plans: PlanModule;
  bolnaApiKeys: BolnaApiKeyModule;

  // Middleware
  authenticate: AuthenticateMiddleware;
  authorize: AuthorizeMiddleware;
  enforcePlan: EnforcePlanMiddleware;

  // Shared factories
  bolnaClientFactory: IBolnaClientFactory;
}

export function buildContainer(): AppContainer {
  // ── Shared services ─────────────────────────────────────────────────
  const authRepository = new PrismaAuthRepository();
  const tokenService = new JwtTokenService();
  const passwordService = new BcryptPasswordService();

  // ── New Sprint 1 modules ────────────────────────────────────────────
  const plans = buildPlanModule();
  const bolnaApiKeys = buildBolnaApiKeyModule();

  // ── Bolna client factory (depends on bolnaApiKeys repo) ─────────────
  const bolnaClientFactory = new BolnaClientFactory(bolnaApiKeys.repository);

  // ── Middleware ──────────────────────────────────────────────────────
  const enforcePlan = new EnforcePlanMiddleware(plans.repository);

  return {
    auth: buildAuthModule({ authRepository, tokenService, passwordService }),
    assistants: buildAssistantModule({ bolnaClientFactory }), // Note: needs update in assistant container
    tenants: buildTenantModule(),
    campaigns: buildCampaignModule(),
    batches: buildBatchModule({ bolnaClientFactory }), // Note: needs update in batch container
    leads: buildLeadModule(),
    calls: buildCallModule({ bolnaClientFactory }), // Note: needs update in call container
    dashboard: buildDashboardModule(),
    brochures: buildBrochureModule(),
    users: buildUserModule({ passwordService }),
    webhooks: buildWebhookModule(),

    // Sprint 1 additions
    plans,
    bolnaApiKeys,
    authenticate: new AuthenticateMiddleware(tokenService, authRepository),
    authorize: new AuthorizeMiddleware(),
    enforcePlan,
    bolnaClientFactory,
  };
}
