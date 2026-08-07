/*
  Warnings:

  - You are about to drop the column `outcome` on the `Call` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Disposition" AS ENUM ('INTERESTED_SEND_DETAILS', 'QUALIFIED_CONSULTANT_FOLLOWUP', 'SITE_VISIT_INTEREST', 'INTERESTED_GENERAL', 'FOLLOWUP_REQUESTED', 'NOT_INTERESTED', 'DO_NOT_CALL', 'WRONG_NUMBER', 'ALREADY_PURCHASED', 'BROKER', 'LANGUAGE_CALLBACK_REQUIRED', 'CALL_ENDED_BY_CUSTOMER', 'CALL_ENDED_ABUSIVE', 'NO_RESPONSE', 'CALL_DROPPED');

-- CreateEnum
CREATE TYPE "LeadTemperature" AS ENUM ('HOT', 'WARM', 'NURTURE', 'COLD', 'NOT_APPLICABLE');

-- CreateEnum
CREATE TYPE "PurchaseTimeline" AS ENUM ('WITHIN_3_MONTHS', 'WITHIN_6_MONTHS', 'WITHIN_1_YEAR', 'AFTER_1_YEAR', 'FLEXIBLE', 'NOT_SHARED');

-- CreateEnum
CREATE TYPE "PurchasePurpose" AS ENUM ('OWN_USE', 'INVESTMENT', 'BOTH', 'NOT_SHARED');

-- CreateEnum
CREATE TYPE "PreferredNextAction" AS ENUM ('SEND_DETAILS', 'CONSULTANT_CALL', 'SITE_VISIT', 'FOLLOWUP_CALL', 'NONE');

-- CreateEnum
CREATE TYPE "ContactChannel" AS ENUM ('WHATSAPP', 'EMAIL', 'NOT_ASKED');

-- CreateEnum
CREATE TYPE "LocationMatch" AS ENUM ('MATCH', 'MISMATCH', 'NOT_ASKED');

-- CreateEnum
CREATE TYPE "ExtractionFlag" AS ENUM ('YES', 'NO');

-- AlterTable
ALTER TABLE "Call" DROP COLUMN "outcome";

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "doNotCall" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "CallAnalysis" (
    "id" TEXT NOT NULL,
    "callId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "disposition" "Disposition",
    "leadTemperature" "LeadTemperature",
    "preferredConfiguration" TEXT,
    "budgetRange" TEXT,
    "purchaseTimeline" "PurchaseTimeline",
    "purchasePurpose" "PurchasePurpose",
    "locationMatch" "LocationMatch",
    "customerLocationPref" TEXT,
    "preferredNextAction" "PreferredNextAction",
    "preferredContactChannel" "ContactChannel",
    "followupSchedule" TEXT,
    "doNotCall" "ExtractionFlag",
    "languageSupportRequired" "ExtractionFlag",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CallAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CallAnalysis_callId_key" ON "CallAnalysis"("callId");

-- CreateIndex
CREATE INDEX "CallAnalysis_tenantId_idx" ON "CallAnalysis"("tenantId");

-- CreateIndex
CREATE INDEX "CallAnalysis_callId_idx" ON "CallAnalysis"("callId");

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_callId_fkey" FOREIGN KEY ("callId") REFERENCES "Call"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
