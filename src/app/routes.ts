import { Router } from "express";
import type { AppContainer } from "./container";
import { buildTenantAuthRoutes } from "../modules/auth/presentation/tenant-auth.routes";
import { buildAdminAuthRoutes } from "../modules/auth/presentation/admin-auth.routes";
import { buildTenantAssistantRoutes } from "../modules/assistants/presentation/tenant-assistant.routes";
import { buildAdminAssistantRoutes } from "../modules/assistants/presentation/admin-assistant.routes";
import { buildTenantWorkspaceRoutes } from "../modules/tenants/presentation/tenant-workspace.routes";
import { buildAdminTenantRoutes } from "../modules/tenants/presentation/admin-tenant.routes";
import { buildTenantCampaignRoutes } from "../modules/campaigns/presentation/tenant-campaign.routes";
import { buildTenantLeadRoutes } from "../modules/leads/presentation/tenant-lead.routes";
import { buildTenantCallRoutes } from "../modules/calls/presentation/tenant-call.routes";
import { buildTenantDashboardRoutes } from "../modules/dashboard/presentation/tenant-dashboard.routes";
import { buildTenantBrochureRoutes } from "../modules/brochure/presentation/tenant-brochure.routes";
import { buildWebhookRoutes } from "../modules/webhooks/presentation/webhook.routes";
import { buildTenantUserRoutes } from "../modules/users/presentation/tenant-user.routes";

export function buildRoutes(c: AppContainer): Router {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({
      status: "OK",
      service: "Lead Qualification API",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    });
  });

  // ── Public ──────────────────────────────────────────────────────────────
  router.use("/webhooks", buildWebhookRoutes(c.webhooks.controller));

  // ── Tenant API v1 ──────────────────────────────────────────────────────
  router.use(
    "/v1/auth",
    buildTenantAuthRoutes(c.auth.tenantController, c.authenticate, c.authorize),
  );
  router.use(
    "/v1/assistants",
    buildTenantAssistantRoutes(c.assistants.tenantController, c.authenticate),
  );
  router.use(
    "/v1/campaigns",
    buildTenantCampaignRoutes(
      c.campaigns.tenantController,
      c.batches.tenantController,
      c.authenticate,
      c.authorize,
    ),
  );
  router.use(
    "/v1/leads",
    buildTenantLeadRoutes(c.leads.tenantController, c.authenticate),
  );
  router.use(
    "/v1/calls",
    buildTenantCallRoutes(c.calls.tenantController, c.authenticate),
  );
  router.use(
    "/v1/dashboard",
    buildTenantDashboardRoutes(c.dashboard.tenantController, c.authenticate),
  );
  router.use(
    "/v1/brochures",
    buildTenantBrochureRoutes(
      c.brochures.tenantController,
      c.authenticate,
      c.authorize,
    ),
  );
  router.use(
    "/v1/users",
    buildTenantUserRoutes(
      c.users.tenantController,
      c.authenticate,
      c.authorize,
    ),
  );
  router.use(
    "/v1/tenants",
    buildTenantWorkspaceRoutes(
      c.tenants.workspaceController,
      c.authenticate,
      c.authorize,
    ),
  );

  // ── Admin API v1 ───────────────────────────────────────────────────────
  router.use("/v1/admin/auth", buildAdminAuthRoutes(c.auth.adminController));
  router.use(
    "/v1/admin/tenants",
    buildAdminTenantRoutes(
      c.tenants.adminController,
      c.authenticate,
      c.authorize,
    ),
  );
  router.use(
    "/v1/admin/assistants",
    buildAdminAssistantRoutes(
      c.assistants.adminController,
      c.authenticate,
      c.authorize,
    ),
  );

  return router;
}
