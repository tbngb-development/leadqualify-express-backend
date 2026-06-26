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
import axios from "axios";

dotenv.config();

// ─── Ensure uploads folder exists ─────────────────────────────────────────────
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ─── App setup ────────────────────────────────────────────────────────────────
const app = express();
const PORT = Number(process.env.PORT || 3000);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "http://localhost:5000",
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

app.use("/webhooks", webhookRoutes);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", limiter, authRoutes);
app.use("/api/assistants", limiter, assistantRoutes);
app.use("/api/campaigns", limiter, campaignRoutes);
app.use("/api/leads", limiter, leadRoutes);
app.use("/api/calls", limiter, callRoutes);
app.use("/api/dashboard", limiter, dashboardRoutes);
app.use("/api/users", limiter, userRoutes);
app.use("/api/tenants", limiter, tenantRoutes);

// Vapi may actually want the full WAV with header
// Try this FIRST before stripping

app.post("/api/tts", async (req, res) => {
  console.log("TTS HIT");

  try {
    const text: string = req.body?.message?.text || req.body?.text || "";

    const requestedSampleRate: number =
      req.body?.message?.sampleRate || req.body?.sampleRate || 16000;

    console.log("TEXT:", text);
    // console.log("SAMPLE RATE FROM VAPI:", requestedSampleRate);

    const sarvamResponse = await axios.post(
      "https://api.sarvam.ai/text-to-speech",
      {
        text,
        target_language_code: "en-IN",
        model: "bulbul:v3",
        speaker: "sunny",
        pace: 1,
        speech_sample_rate: 16000, // hardcode 16000, do NOT use requestedSampleRate
        enable_preprocessing: true,
      },
      {
        headers: {
          "api-subscription-key": process.env.SARVAM_API_KEY,
        },
      },
    );

    const audioBase64: string = sarvamResponse.data.audios.join("");
    const wavBuffer: Buffer = Buffer.from(audioBase64, "base64");

    // ── OPTION A: return full WAV ──────────────────────────────────
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Length", wavBuffer.length);
    return res.end(wavBuffer);
  } catch (error: any) {
    console.error("TTS ERROR:", error.message);
    return res.status(500).send("TTS failed");
  }
});

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
