import prisma from "../shared/config/database/prisma";
import type { PlanFeatures } from "../modules/plans/domain/entities/plan.entity";

async function seedPlans() {
  const plans: Array<{
    slug: string;
    name: string;
    displayOrder: number;
    onboardingFee: number;
    perMinuteRate: number;
    maxActiveCampaigns: number | null;
    maxLeadsPerBatch: number | null;
    retryAutomation: boolean;
    industryPackLimit: number | null;
    features: PlanFeatures;
    includedBalance: number;
    bonusValidityDays: number | null;
  }> = [
    {
      slug: "launch",
      name: "Launch",
      displayOrder: 1,
      onboardingFee: 999900, // ₹9,999
      perMinuteRate: 1000, // ₹10/min
      maxActiveCampaigns: 1,
      maxLeadsPerBatch: 10000,
      retryAutomation: false,
      industryPackLimit: 1,
      features: {
        dashboardTier: "standard",
        agentCapability: "basic",
        integrations: "none",
        supportTier: "standard",
      },
      includedBalance: 50000, // ₹500
      bonusValidityDays: 5,
    },
    {
      slug: "growth",
      name: "Growth",
      displayOrder: 2,
      onboardingFee: 1999900, // ₹19,999
      perMinuteRate: 900, // ₹9/min
      maxActiveCampaigns: 2,
      maxLeadsPerBatch: 10000,
      retryAutomation: true,
      industryPackLimit: 1,
      features: {
        dashboardTier: "advanced",
        agentCapability: "basic_knowledge",
        integrations: "basic",
        supportTier: "standard",
      },
      includedBalance: 200000, // ₹2,000
      bonusValidityDays: 10,
    },
    {
      slug: "scale",
      name: "Scale",
      displayOrder: 3,
      onboardingFee: 4999900, // ₹49,999
      perMinuteRate: 800, // ₹8/min
      maxActiveCampaigns: 5,
      maxLeadsPerBatch: 10000,
      retryAutomation: true,
      industryPackLimit: 2,
      features: {
        dashboardTier: "advanced",
        agentCapability: "advanced_knowledge",
        integrations: "api_selected",
        supportTier: "priority",
      },
      includedBalance: 500000, // ₹5,000
      bonusValidityDays: 15,
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      displayOrder: 4,
      onboardingFee: 0, // Custom
      perMinuteRate: 600, // ₹6/min
      maxActiveCampaigns: null,
      maxLeadsPerBatch: null,
      retryAutomation: true,
      industryPackLimit: null,
      features: {
        dashboardTier: "custom",
        agentCapability: "custom",
        integrations: "custom",
        supportTier: "sla",
      },
      includedBalance: 0,
      bonusValidityDays: null,
    },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { slug: plan.slug },
      create: plan as any,
      update: plan as any,
    });
    console.log(`✓ Seeded plan: ${plan.name}`);
  }

  console.log("\n✅ Plans seeded successfully");
}

seedPlans()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
