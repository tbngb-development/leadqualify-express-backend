import { buildApp } from "./app";
import { env } from "./shared/config/env";

const app = buildApp();

const server = app.listen(env.port, () => {
  console.log(`\n🚀 Server:       http://localhost:${env.port}`);
  console.log(`❤️  Health:       GET  http://localhost:${env.port}/api/health`);
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/register`,
  );
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/login`,
  );
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/refresh`,
  );
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/select-tenant`,
  );
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/invites`,
  );
  console.log(
    `🔐 Tenant Auth:  POST http://localhost:${env.port}/api/v1/auth/accept-invite`,
  );
  console.log(
    `📋 Campaigns:    GET  http://localhost:${env.port}/api/v1/campaigns`,
  );
  console.log(
    `📋 Campaigns:    POST http://localhost:${env.port}/api/v1/campaigns`,
  );
  console.log(
    `📦 Batches:      POST http://localhost:${env.port}/api/v1/campaigns/:id/batches`,
  );
  console.log(
    `👑 Admin Auth:   POST http://localhost:${env.port}/api/v1/admin/auth/login\n`,
  );
});

// Graceful shutdown handlers
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Process terminated");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
    process.exit(0);
  });
});

export default buildApp;
