/*
  Warnings:

  - A unique constraint covering the columns `[phone,campaignId]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Call_tenantId_idx" ON "Call"("tenantId");

-- CreateIndex
CREATE INDEX "Call_campaignId_idx" ON "Call"("campaignId");

-- CreateIndex
CREATE INDEX "Call_leadId_idx" ON "Call"("leadId");

-- CreateIndex
CREATE INDEX "CallAnalysis_disposition_idx" ON "CallAnalysis"("disposition");

-- CreateIndex
CREATE INDEX "CallAnalysis_leadTemperature_idx" ON "CallAnalysis"("leadTemperature");

-- CreateIndex
CREATE INDEX "Lead_tenantId_idx" ON "Lead"("tenantId");

-- CreateIndex
CREATE INDEX "Lead_campaignId_idx" ON "Lead"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_phone_campaignId_key" ON "Lead"("phone", "campaignId");
