import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";
import cors from "cors";


import { errorHandler } from "./middleware/errorHandler";
import authRoutes from "./modules/auth/auth.routes";
import assistantRoutes from "./modules/assistants/assistant.routes";
import campaignRoutes from "./modules/campaigns/campaign.routes";
import leadRoutes from "./modules/leads/lead.routes";
import callRoutes from "./modules/calls/call.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import userRoutes from "./modules/users/user.routes";
import tenantRoutes from "./modules/tenants/tenant.routes";
import webhookRoutes from "./modules/webhooks/webhook.routes";

dotenv.config();

// ─── Ensure uploads folder exists ─────────────────────────────────────────────
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const app = express();
const PORT = Number(process.env.PORT || 3000);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: [
      "http://localhost:3001", // Next.js default if backend is on 3000
      "http://localhost:3000", // Next.js if backend is on different port
      "http://localhost:5000", // adjust as needed
      process.env.FRONTEND_URL ?? "http://localhost:3001",
    ],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Logger ───────────────────────────────────────────────────────────────────
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({
    status: "OK",
    service: "Vapi Lead Qualification API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", limiter, authRoutes);
app.use("/api/assistants", limiter, assistantRoutes);
app.use("/api/campaigns", limiter, campaignRoutes);
app.use("/api/leads", limiter, leadRoutes);
app.use("/api/calls", limiter, callRoutes);
app.use("/api/dashboard", limiter, dashboardRoutes);
app.use("/api/users", limiter, userRoutes);
app.use("/api/tenants", limiter, tenantRoutes);
app.use("/webhooks", webhookRoutes);

app.use(errorHandler);

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server:      http://localhost:${PORT}`);
  console.log(`❤️  Health:      GET  /health`);
  console.log(`🔐 Auth:        POST /api/auth/register`);
  console.log(`🔐 Auth:        POST /api/auth/login`);
  console.log(`🤖 Assistants:  GET  /api/assistants`);
  console.log(`📋 Campaigns:   GET  /api/campaigns`);
  console.log(`👤 Leads:       GET  /api/leads`);
  console.log(`📞 Calls:       GET  /api/calls`);
  console.log(`📊 Dashboard:   GET  /api/dashboard/overview`);
  console.log(`👥 Users:       GET  /api/users`);
  console.log(`🏢 Tenants:     GET  /api/tenants`);
  console.log(`🔗 Webhooks:    POST /webhooks/vapi\n`);
});

export default app;
