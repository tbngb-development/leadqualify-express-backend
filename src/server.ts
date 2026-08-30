import { buildApp } from "./app";
import { env } from "./shared/config/env";

const app = buildApp();

app.listen(env.port, () => {
  console.log(`\n🚀 Server:       http://localhost:${env.port}`);
  console.log(`❤️  Health:       GET  /api/health`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/register`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/login`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/refresh`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/select-tenant`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/invites`);
  console.log(`🔐 Tenant Auth:  POST /api/v1/auth/accept-invite`);
  console.log(`📋 Campaigns:    GET  /api/v1/campaigns`);
  console.log(`📋 Campaigns:    POST /api/v1/campaigns`);
  console.log(`📦 Batches:      POST /api/v1/campaigns/:id/batches`);
  console.log(
    `📦 Batches:      POST /api/v1/campaigns/:id/batches/:batchId/run`,
  );
  console.log(`👑 Admin Auth:   POST /api/v1/admin/auth/login\n`);
});

export default buildApp;
