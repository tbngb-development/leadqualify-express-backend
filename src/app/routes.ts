import { Router } from "express";
import type { Container } from "./container";
import {
  buildTenantAuthRoutes,
  buildAdminAuthRoutes,
} from "../modules/auth/presentation/auth.routes";
import { buildCampaignRoutes } from "../modules/campaigns/presentation/campaign.routes";
import { buildUserRoutes } from "../modules/users/presentation/user.routes";
import { buildTenantRoutes } from "../modules/tenants/presentation/tenant.routes";
import { buildAdminTenantRoutes } from "../modules/tenants/presentation/admin-tenant.routes";
import { buildAssistantRoutes } from "../modules/assistants/presentation/assistant.routes";
import { buildAdminAssistantRoutes } from "../modules/assistants/presentation/admin-assistant.routes";
import { buildLeadRoutes } from "../modules/leads/presentation/lead.routes";
import { buildCallRoutes } from "../modules/calls/presentation/call.routes";
import { buildDashboardRoutes } from "../modules/dashboard/presentation/dashboard.routes";
import { buildWebhookRoutes } from "../modules/webhooks/presentation/webhook.routes";
import { buildBrochureRoutes } from "../modules/brochure/presentation/brochure.routes";

export function buildRoutes(container: Container): Router {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({
      status: "OK",
      service: "Lead Qualification API",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    });
  });

  router.use("/webhooks", buildWebhookRoutes(container.webhookController));

  // ── Tenant API v1 ─────────────────────────────────────────────────────────
  router.use(
    "/v1/auth",
    buildTenantAuthRoutes(
      container.authController,
      container.authenticate,
      container.authorize,
    ),
  );
  
  router.use(
    "/v1/campaigns",
    buildCampaignRoutes(
      container.campaignController,
      container.batchController,
      container.authenticate,
      container.authorize,
    ),
  );

  router.use(
    "/v1/users",
    buildUserRoutes(
      container.userController,
      container.authenticate,
      container.authorize,
    ),
  );

  router.use(
    "/v1/assistants",
    buildAssistantRoutes(container.assistantController, container.authenticate),
  );

  router.use(
    "/v1/leads",
    buildLeadRoutes(container.leadController, container.authenticate),
  );

  router.use(
    "/v1/calls",
    buildCallRoutes(container.callController, container.authenticate),
  );

  router.use(
    "/v1/dashboard",
    buildDashboardRoutes(container.dashboardController, container.authenticate),
  );
  router.use(
    "/v1/brochures",
    buildBrochureRoutes(
      container.brochureController,
      container.authenticate,
      container.authorize,
    ),
  );

  // Tenant Workspace routes
  router.use(
    "/v1/tenants",
    buildTenantRoutes(
      container.tenantController,
      container.authenticate,
      container.authorize,
    ),
  );

  // ── Admin API v1 ──────────────────────────────────────────────────────────
  router.use("/v1/admin/auth", buildAdminAuthRoutes(container.authController));

  router.use(
    "/v1/admin/tenants",
    buildAdminTenantRoutes(
      container.tenantController,
      container.authenticate,
      container.authorize,
    ),
  );

  router.use(
    "/v1/admin/assistants",
    buildAdminAssistantRoutes(
      container.assistantController,
      container.authenticate,
      container.authorize,
    ),
  );

  return router;
}
