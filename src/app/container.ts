import { PrismaAuthRepository } from "../modules/auth/infrastructure/repositories/prisma-auth.repository";
import { JwtTokenService } from "../modules/auth/infrastructure/services/jwt-token.service";
import { BcryptPasswordService } from "../modules/auth/infrastructure/services/bcrypt-password.service";
import { AuthenticateMiddleware } from "../shared/middleware/authenticate";
import { AuthorizeMiddleware } from "../shared/middleware/authorize";

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

export interface AppContainer {
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
  authenticate: AuthenticateMiddleware;
  authorize: AuthorizeMiddleware;
}

export function buildContainer(): AppContainer {
  // ── Shared infrastructure (needed by middleware + auth module) ──────────
  const authRepository = new PrismaAuthRepository();
  const tokenService = new JwtTokenService();
  const passwordService = new BcryptPasswordService();

  return {
    auth: buildAuthModule({ authRepository, tokenService, passwordService }),
    assistants: buildAssistantModule(),
    tenants: buildTenantModule(),
    campaigns: buildCampaignModule(),
    batches: buildBatchModule(),
    leads: buildLeadModule(),
    calls: buildCallModule(),
    dashboard: buildDashboardModule(),
    brochures: buildBrochureModule(),
    users: buildUserModule({ passwordService }),
    webhooks: buildWebhookModule(),
    authenticate: new AuthenticateMiddleware(tokenService, authRepository),
    authorize: new AuthorizeMiddleware(),
  };
}
