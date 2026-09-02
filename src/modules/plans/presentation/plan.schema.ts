import { z } from "zod";

const featuresSchema = z.object({
  dashboardTier: z.enum(["standard", "advanced", "custom"]),
  agentCapability: z.enum([
    "basic",
    "basic_knowledge",
    "advanced_knowledge",
    "custom",
  ]),
  integrations: z.enum(["none", "basic", "api_selected", "custom"]),
  supportTier: z.enum(["standard", "priority", "sla"]),
});

// Flat schemas mapped to req.body per your validate() middleware
export const createPlanSchema = z.object({
  name: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "slug must be lowercase alphanumeric with hyphens"),
  displayOrder: z.number().int().min(0).optional(),
  onboardingFee: z.number().int().min(0),
  perMinuteRate: z.number().int().min(0),
  billingMinimumSec: z.number().int().min(1).optional(),
  billingIncrementSec: z.number().int().min(1).optional(),
  maxActiveCampaigns: z.number().int().min(1).nullable().optional(),
  maxLeadsPerBatch: z.number().int().min(1).nullable().optional(),
  retryAutomation: z.boolean().optional(),
  industryPackLimit: z.number().int().min(1).nullable().optional(),
  features: featuresSchema,
  includedBalance: z.number().int().min(0).optional(),
  bonusValidityDays: z.number().int().min(1).nullable().optional(),
});

export const updatePlanSchema = z.object({
  name: z.string().min(1).optional(),
  displayOrder: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
  onboardingFee: z.number().int().min(0).optional(),
  perMinuteRate: z.number().int().min(0).optional(),
  billingMinimumSec: z.number().int().min(1).optional(),
  billingIncrementSec: z.number().int().min(1).optional(),
  maxActiveCampaigns: z.number().int().min(1).nullable().optional(),
  maxLeadsPerBatch: z.number().int().min(1).nullable().optional(),
  retryAutomation: z.boolean().optional(),
  industryPackLimit: z.number().int().min(1).nullable().optional(),
  features: featuresSchema.optional(),
  includedBalance: z.number().int().min(0).optional(),
  bonusValidityDays: z.number().int().min(1).nullable().optional(),
});
