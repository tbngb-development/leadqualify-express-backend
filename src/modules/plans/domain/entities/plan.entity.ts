export interface PlanFeatures {
  dashboardTier: "standard" | "advanced" | "custom";
  agentCapability:
    "basic" | "basic_knowledge" | "advanced_knowledge" | "custom";
  integrations: "none" | "basic" | "api_selected" | "custom";
  supportTier: "standard" | "priority" | "sla";
}

export interface PlanPricing {
  onboardingFee: number; // in paisa
  perMinuteRate: number; // in paisa
  billingMinimumSec: number;
  billingIncrementSec: number;
}

export interface PlanLimits {
  maxActiveCampaigns: number | null; // null = unlimited
  maxLeadsPerBatch: number | null;
  retryAutomation: boolean;
  industryPackLimit: number | null;
}

export interface PlanBonus {
  includedBalance: number; // in paisa
  bonusValidityDays: number | null;
}
