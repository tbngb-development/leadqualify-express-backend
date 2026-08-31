import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT) || 5001,
  nodeEnv: process.env.NODE_ENV || "development",
  isDev: (process.env.NODE_ENV || "development") === "development",

  jwt: {
    secret: requireEnv("JWT_SECRET"),
    accessExpiry: process.env.JWT_ACCESS_EXPIRY || "15m",
    refreshExpiry: process.env.JWT_REFRESH_EXPIRY || "7d",
    inviteExpiry: process.env.JWT_INVITE_EXPIRY || "7d",
  },

  database: {
    url: requireEnv("DATABASE_URL"),
  },

  cors: {
    origins: (process.env.CORS_ORIGINS || "http://localhost:3001").split(","),
  },

  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3001",

  bolna: {
    apiKey: requireEnv("BOLNA_API_KEY"),
    apiUrl: process.env.BOLNA_API_URL || "https://api.bolna.ai",
  },

  webhook: {
    baseUrl: process.env.WEBHOOK_BASE_URL || "",
    webhookSecret: process.env.WEBHOOK_SECRET || "",
  },

  skipCrossBatchDedup: process.env.SKIP_CROSS_BATCH_DEDUP === "true",
} as const;
