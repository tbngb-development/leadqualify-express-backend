-- AlterEnum
ALTER TYPE "CallStatus" ADD VALUE 'BUSY';

-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "brochureId" TEXT;

-- CreateTable
CREATE TABLE "Brochure" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "fileSizeMB" TEXT NOT NULL,
    "pageCount" INTEGER NOT NULL,
    "rawTextLength" INTEGER NOT NULL,
    "projectName" TEXT,
    "developerName" TEXT,
    "reraNumber" TEXT,
    "projectWebsite" TEXT,
    "contactNumber" TEXT,
    "city" TEXT,
    "area" TEXT,
    "state" TEXT,
    "landmark" TEXT,
    "fullAddress" TEXT,
    "propertyTypes" TEXT[],
    "configurations" TEXT[],
    "totalUnits" INTEGER,
    "totalTowers" INTEGER,
    "totalFloors" INTEGER,
    "sizeMin" DOUBLE PRECISION,
    "sizeMax" DOUBLE PRECISION,
    "sizeUnit" TEXT,
    "startingPrice" DOUBLE PRECISION,
    "maxPrice" DOUBLE PRECISION,
    "pricePerSqft" DOUBLE PRECISION,
    "priceLabel" TEXT,
    "paymentPlan" TEXT,
    "bankApprovals" TEXT[],
    "maintenanceCharge" TEXT,
    "possessionDate" TEXT,
    "launchDate" TEXT,
    "constructionStatus" TEXT DEFAULT 'unknown',
    "amenities" TEXT[],
    "specifications" TEXT[],
    "nearbyInfrastructure" TEXT[],
    "usps" TEXT[],
    "minimumBudget" DOUBLE PRECISION,
    "maximumBudget" DOUBLE PRECISION,
    "targetBuyerProfile" TEXT,
    "preferredLocations" TEXT[],
    "investmentType" TEXT[],
    "keyQualifyingQuestions" TEXT[],
    "confidence" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "extractionWarnings" TEXT[],
    "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "confirmedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brochure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Brochure_tenantId_idx" ON "Brochure"("tenantId");

-- CreateIndex
CREATE INDEX "Campaign_brochureId_idx" ON "Campaign"("brochureId");

-- AddForeignKey
ALTER TABLE "Brochure" ADD CONSTRAINT "Brochure_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_brochureId_fkey" FOREIGN KEY ("brochureId") REFERENCES "Brochure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
