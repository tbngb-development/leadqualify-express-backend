/*
  Warnings:

  - You are about to drop the `ApiKey` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('PENDING_PAYMENT', 'ACTIVE', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BolnaApiKeyType" AS ENUM ('GENERAL', 'CUSTOM');

-- DropForeignKey
ALTER TABLE "ApiKey" DROP CONSTRAINT "ApiKey_tenantId_fkey";

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "bolnaApiKeyId" TEXT;

-- DropTable
DROP TABLE "ApiKey";

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "onboardingFee" INTEGER NOT NULL,
    "perMinuteRate" INTEGER NOT NULL,
    "billingMinimumSec" INTEGER NOT NULL DEFAULT 30,
    "billingIncrementSec" INTEGER NOT NULL DEFAULT 15,
    "maxActiveCampaigns" INTEGER,
    "maxLeadsPerBatch" INTEGER,
    "retryAutomation" BOOLEAN NOT NULL DEFAULT false,
    "industryPackLimit" INTEGER,
    "features" JSONB NOT NULL,
    "includedBalance" INTEGER NOT NULL DEFAULT 0,
    "bonusValidityDays" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantPlan" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "status" "PlanStatus" NOT NULL DEFAULT 'PENDING_PAYMENT',
    "activatedAt" TIMESTAMP(3),
    "bonusExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BolnaApiKey" (
    "id" TEXT NOT NULL,
    "keyIdentifier" TEXT NOT NULL,
    "encryptedKey" TEXT NOT NULL,
    "type" "BolnaApiKeyType" NOT NULL DEFAULT 'GENERAL',
    "isPlatformDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdBy" TEXT NOT NULL,
    "lastAccessedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BolnaApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_slug_key" ON "Plan"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TenantPlan_tenantId_key" ON "TenantPlan"("tenantId");

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_bolnaApiKeyId_fkey" FOREIGN KEY ("bolnaApiKeyId") REFERENCES "BolnaApiKey"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPlan" ADD CONSTRAINT "TenantPlan_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPlan" ADD CONSTRAINT "TenantPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
