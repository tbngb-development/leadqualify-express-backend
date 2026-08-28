/*
  Warnings:

  - The values [PAUSED,SCHEDULED] on the enum `CampaignStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `scheduledAt` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `successLeads` on the `Campaign` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone,campaignId]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "BatchStatus" AS ENUM ('CREATED', 'SCHEDULED', 'RUNNING', 'STOPPED', 'COMPLETED', 'FAILED');

-- AlterEnum
BEGIN;
CREATE TYPE "CampaignStatus_new" AS ENUM ('DRAFT', 'RUNNING', 'COMPLETED', 'FAILED');
ALTER TABLE "public"."Campaign" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Campaign" ALTER COLUMN "status" TYPE "CampaignStatus_new" USING ("status"::text::"CampaignStatus_new");
ALTER TYPE "CampaignStatus" RENAME TO "CampaignStatus_old";
ALTER TYPE "CampaignStatus_new" RENAME TO "CampaignStatus";
DROP TYPE "public"."CampaignStatus_old";
ALTER TABLE "Campaign" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterTable
ALTER TABLE "Call" ADD COLUMN     "batchId" TEXT,
ADD COLUMN     "callHistory" JSONB;

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "scheduledAt",
DROP COLUMN "successLeads",
ADD COLUMN     "completedLeads" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "defaultRetryConfig" JSONB;

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "batchId" TEXT;

-- CreateTable
CREATE TABLE "LeadBatch" (
    "id" TEXT NOT NULL,
    "bolnaBatchId" TEXT,
    "campaignId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "status" "BatchStatus" NOT NULL DEFAULT 'CREATED',
    "fileName" TEXT,
    "originalFileUrl" TEXT,
    "transformedCsvUrl" TEXT,
    "totalLeads" INTEGER NOT NULL DEFAULT 0,
    "calledLeads" INTEGER NOT NULL DEFAULT 0,
    "completedLeads" INTEGER NOT NULL DEFAULT 0,
    "failedLeads" INTEGER NOT NULL DEFAULT 0,
    "retryConfig" JSONB,
    "scheduledAt" TIMESTAMP(3),
    "bolnaScheduledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "LeadBatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeadBatch_bolnaBatchId_key" ON "LeadBatch"("bolnaBatchId");

-- CreateIndex
CREATE INDEX "LeadBatch_tenantId_idx" ON "LeadBatch"("tenantId");

-- CreateIndex
CREATE INDEX "LeadBatch_campaignId_idx" ON "LeadBatch"("campaignId");

-- CreateIndex
CREATE INDEX "LeadBatch_bolnaBatchId_idx" ON "LeadBatch"("bolnaBatchId");

-- CreateIndex
CREATE INDEX "Call_batchId_idx" ON "Call"("batchId");

-- CreateIndex
CREATE INDEX "Lead_batchId_idx" ON "Lead"("batchId");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_phone_campaignId_key" ON "Lead"("phone", "campaignId");

-- AddForeignKey
ALTER TABLE "LeadBatch" ADD CONSTRAINT "LeadBatch_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadBatch" ADD CONSTRAINT "LeadBatch_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "LeadBatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "LeadBatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;
