// src/modules/brochure/brochure.service.ts — FULL FILE

import prisma from "../../config/database";
import { extractPropertyDetails } from "../../utils/propertyExtractor";
import {
  extractTextFromPDF,
  assessTextQuality,
} from "../../utils/pdfExtractor";
import {
  SaveBrochureInput,
  UpdateBrochureInput,
  BrochurePromptData,
} from "./brochure.types";
import { cleanupUploadedFile } from "../../middleware/upload";

export class BrochureService {
  // ─── Extract — PDF → AI → structured data (NO DB save) ──────────────────
  async extract(
    filePath: string,
    originalFileName: string,
    fileSizeMB: string,
  ) {
    try {
      console.log(`[BrochureService] Step 1: Extracting text from PDF...`);

      // ✅ Use correct function name
      const pdfResult = await extractTextFromPDF(filePath, originalFileName);

      console.log(`[BrochureService] Step 2: Assessing text quality...`);

      // ✅ Use the exported quality assessor
      const textQuality = assessTextQuality(pdfResult);

      if (!textQuality.hasUsableText && pdfResult.textLength === 0) {
        throw new Error(
          "No text content found in PDF. Cannot perform extraction.",
        );
      }

      console.log(
        `[BrochureService] Step 3: Running AI property extraction...`,
      );
      const propertyDetails = await extractPropertyDetails(pdfResult);

      return {
        propertyDetails,
        pdfMeta: {
          fileName: pdfResult.fileName,
          pageCount: pdfResult.pageCount,
          fileSizeBytes: pdfResult.fileSizeBytes,
          fileSizeMB: pdfResult.fileSizeMB, // ← now comes from pdfResult
          textLength: pdfResult.textLength,
          truncated: pdfResult.truncated,
          extractedAt: pdfResult.extractedAt,
        },
        textQuality,
      };
    } finally {
      cleanupUploadedFile(filePath);
    }
  }

  // ─── Save — persist confirmed brochure data to DB ───────────────────────
  async save(tenantId: string, input: SaveBrochureInput) {
    const brochure = await prisma.brochure.create({
      data: {
        tenantId,

        // PDF Meta
        originalFileName: input.originalFileName,
        fileSizeMB: input.fileSizeMB,
        pageCount: input.pageCount,
        rawTextLength: input.rawTextLength,

        // Core Identity
        projectName: input.projectName ?? null,
        developerName: input.developerName ?? null,
        reraNumber: input.reraNumber ?? null,
        projectWebsite: input.projectWebsite ?? null,
        contactNumber: input.contactNumber ?? null,

        // Location
        city: input.city ?? null,
        area: input.area ?? null,
        state: input.state ?? null,
        landmark: input.landmark ?? null,
        fullAddress: input.fullAddress ?? null,

        // Property Specs
        propertyTypes: input.propertyTypes ?? [],
        configurations: input.configurations ?? [],
        totalUnits: input.totalUnits ?? null,
        totalTowers: input.totalTowers ?? null,
        totalFloors: input.totalFloors ?? null,
        sizeMin: input.sizeMin ?? null,
        sizeMax: input.sizeMax ?? null,
        sizeUnit: input.sizeUnit ?? null,

        // Financials
        startingPrice: input.startingPrice ?? null,
        maxPrice: input.maxPrice ?? null,
        pricePerSqft: input.pricePerSqft ?? null,
        priceLabel: input.priceLabel ?? null,
        paymentPlan: input.paymentPlan ?? null,
        bankApprovals: input.bankApprovals ?? [],
        maintenanceCharge: input.maintenanceCharge ?? null,

        // Timeline
        possessionDate: input.possessionDate ?? null,
        launchDate: input.launchDate ?? null,
        constructionStatus: input.constructionStatus ?? "unknown",

        // Features
        amenities: input.amenities ?? [],
        specifications: input.specifications ?? [],
        nearbyInfrastructure: input.nearbyInfrastructure ?? [],
        usps: input.usps ?? [],

        // Lead Qualification
        minimumBudget: input.minimumBudget ?? null,
        maximumBudget: input.maximumBudget ?? null,
        targetBuyerProfile: input.targetBuyerProfile ?? null,
        preferredLocations: input.preferredLocations ?? [],
        investmentType: input.investmentType ?? [],
        keyQualifyingQuestions: input.keyQualifyingQuestions ?? [],

        // Extraction Meta
        confidence: input.confidence ?? 0,
        extractionWarnings: input.extractionWarnings ?? [],

        // Mark as confirmed immediately on save
        isConfirmed: true,
        confirmedAt: new Date(),
      },
    });

    console.log(
      `[BrochureService] Saved brochure: ${brochure.id} for tenant: ${tenantId}`,
    );
    return brochure;
  }

  // ─── List — all brochures for tenant ────────────────────────────────────
  async list(tenantId: string) {
    return prisma.brochure.findMany({
      where: { tenantId },
      select: {
        // Return summary fields only — not full arrays (performance)
        id: true,
        projectName: true,
        developerName: true,
        city: true,
        area: true,
        configurations: true,
        constructionStatus: true,
        confidence: true,
        isConfirmed: true,
        originalFileName: true,
        createdAt: true,
        // Count linked campaigns
        campaigns: {
          select: { id: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // ─── Get — single brochure full detail ──────────────────────────────────
  async get(tenantId: string, brochureId: string) {
    const brochure = await prisma.brochure.findFirst({
      where: { id: brochureId, tenantId },
      include: {
        campaigns: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    if (!brochure) {
      throw new Error("Brochure not found");
    }

    return brochure;
  }

  // ─── Update — patch editable fields ─────────────────────────────────────
  async update(
    tenantId: string,
    brochureId: string,
    input: UpdateBrochureInput,
  ) {
    const existing = await prisma.brochure.findFirst({
      where: { id: brochureId, tenantId },
    });

    if (!existing) {
      throw new Error("Brochure not found");
    }

    return prisma.brochure.update({
      where: { id: brochureId },
      data: {
        // Only update fields that were explicitly provided
        ...(input.projectName !== undefined && {
          projectName: input.projectName,
        }),
        ...(input.developerName !== undefined && {
          developerName: input.developerName,
        }),
        ...(input.reraNumber !== undefined && { reraNumber: input.reraNumber }),
        ...(input.projectWebsite !== undefined && {
          projectWebsite: input.projectWebsite,
        }),
        ...(input.contactNumber !== undefined && {
          contactNumber: input.contactNumber,
        }),

        ...(input.city !== undefined && { city: input.city }),
        ...(input.area !== undefined && { area: input.area }),
        ...(input.state !== undefined && { state: input.state }),
        ...(input.landmark !== undefined && { landmark: input.landmark }),
        ...(input.fullAddress !== undefined && {
          fullAddress: input.fullAddress,
        }),

        ...(input.propertyTypes !== undefined && {
          propertyTypes: input.propertyTypes,
        }),
        ...(input.configurations !== undefined && {
          configurations: input.configurations,
        }),
        ...(input.totalUnits !== undefined && { totalUnits: input.totalUnits }),
        ...(input.totalTowers !== undefined && {
          totalTowers: input.totalTowers,
        }),
        ...(input.totalFloors !== undefined && {
          totalFloors: input.totalFloors,
        }),
        ...(input.sizeMin !== undefined && { sizeMin: input.sizeMin }),
        ...(input.sizeMax !== undefined && { sizeMax: input.sizeMax }),
        ...(input.sizeUnit !== undefined && { sizeUnit: input.sizeUnit }),

        ...(input.startingPrice !== undefined && {
          startingPrice: input.startingPrice,
        }),
        ...(input.maxPrice !== undefined && { maxPrice: input.maxPrice }),
        ...(input.pricePerSqft !== undefined && {
          pricePerSqft: input.pricePerSqft,
        }),
        ...(input.priceLabel !== undefined && { priceLabel: input.priceLabel }),
        ...(input.paymentPlan !== undefined && {
          paymentPlan: input.paymentPlan,
        }),
        ...(input.bankApprovals !== undefined && {
          bankApprovals: input.bankApprovals,
        }),
        ...(input.maintenanceCharge !== undefined && {
          maintenanceCharge: input.maintenanceCharge,
        }),

        ...(input.possessionDate !== undefined && {
          possessionDate: input.possessionDate,
        }),
        ...(input.launchDate !== undefined && { launchDate: input.launchDate }),
        ...(input.constructionStatus !== undefined && {
          constructionStatus: input.constructionStatus,
        }),

        ...(input.amenities !== undefined && { amenities: input.amenities }),
        ...(input.specifications !== undefined && {
          specifications: input.specifications,
        }),
        ...(input.nearbyInfrastructure !== undefined && {
          nearbyInfrastructure: input.nearbyInfrastructure,
        }),
        ...(input.usps !== undefined && { usps: input.usps }),

        ...(input.minimumBudget !== undefined && {
          minimumBudget: input.minimumBudget,
        }),
        ...(input.maximumBudget !== undefined && {
          maximumBudget: input.maximumBudget,
        }),
        ...(input.targetBuyerProfile !== undefined && {
          targetBuyerProfile: input.targetBuyerProfile,
        }),
        ...(input.preferredLocations !== undefined && {
          preferredLocations: input.preferredLocations,
        }),
        ...(input.investmentType !== undefined && {
          investmentType: input.investmentType,
        }),
        ...(input.keyQualifyingQuestions !== undefined && {
          keyQualifyingQuestions: input.keyQualifyingQuestions,
        }),
      },
    });
  }

  // ─── Delete ──────────────────────────────────────────────────────────────
  async delete(tenantId: string, brochureId: string) {
    const existing = await prisma.brochure.findFirst({
      where: { id: brochureId, tenantId },
      include: { campaigns: { select: { id: true } } },
    });

    if (!existing) {
      throw new Error("Brochure not found");
    }

    // Block deletion if campaigns are using this brochure
    if (existing.campaigns.length > 0) {
      throw new Error(
        `Cannot delete — brochure is linked to ${existing.campaigns.length} campaign(s). Remove the link first.`,
      );
    }

    await prisma.brochure.delete({ where: { id: brochureId } });
    return { deleted: true, id: brochureId };
  }

  // ─── Build VAPI Prompt Segment ───────────────────────────────────────────
  buildVariableValues(brochure: BrochurePromptData): Record<string, string> {
    const formatPrice = (amount: number | null): string => {
      if (!amount) return "";
      if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
      if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)} Lakhs`;
      return `₹${amount.toLocaleString()}`;
    };

    const priceRange =
      [
        brochure.startingPrice ? formatPrice(brochure.startingPrice) : null,
        brochure.maxPrice ? formatPrice(brochure.maxPrice) : null,
      ]
        .filter(Boolean)
        .join(" – ") || "Price on request";

    const sizeRange =
      brochure.sizeMin || brochure.sizeMax
        ? `${brochure.sizeMin ?? ""}–${brochure.sizeMax ?? ""} ${brochure.sizeUnit ?? "sqft"}`
        : "";

    const budgetRange =
      [
        brochure.minimumBudget ? formatPrice(brochure.minimumBudget) : null,
        brochure.maximumBudget ? formatPrice(brochure.maximumBudget) : null,
      ]
        .filter(Boolean)
        .join(" – ") || priceRange;

    // ── Block variable — full context the AI draws from ──────────────────────
    const projectDetails = [
      `Project      : ${brochure.projectName ?? "N/A"}`,
      `Developer    : ${brochure.developerName ?? "N/A"}`,
      `Location     : ${brochure.fullAddress ?? "N/A"}`,
      `Configs      : ${brochure.configurations.join(", ") || "N/A"}`,
      sizeRange ? `Size         : ${sizeRange}` : null,
      `Price        : ${priceRange}`,
      brochure.possessionDate
        ? `Possession   : ${brochure.possessionDate}`
        : null,
      brochure.constructionStatus
        ? `Status       : ${brochure.constructionStatus}`
        : null,
      brochure.usps.length
        ? `\nHighlights:\n${brochure.usps
            .slice(0, 4)
            .map((u) => `• ${u}`)
            .join("\n")}`
        : null,
      brochure.nearbyInfrastructure.length
        ? `\nNearby:\n${brochure.nearbyInfrastructure
            .slice(0, 5)
            .map((n) => `• ${n}`)
            .join("\n")}`
        : null,
      brochure.targetBuyerProfile
        ? `\nIdeal Buyer  : ${brochure.targetBuyerProfile}`
        : null,
      budgetRange ? `Budget Range : ${budgetRange}` : null,
      brochure.investmentType.length
        ? `Buy Purpose  : ${brochure.investmentType.join(", ")}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    return {
      // ── Spoken directly in conversation ──────────────────────────────────
      developer_name: brochure.developerName ?? "our company",
      project_name: brochure.projectName ?? "this property",
      location: brochure.fullAddress ?? "",
      configurations: brochure.configurations.join(", ") || "",
      price_range: priceRange,

      // ── AI references during conversation ─────────────────────────────────
      qualifying_questions:
        brochure.keyQualifyingQuestions
          .map((q, i) => `${i + 1}. ${q}`)
          .join("\n") || "",

      // ── Full context block — AI draws from this for any question ──────────
      project_details: projectDetails,
    };
  }

  // ─── Get Brochure for VAPI Injection ─────────────────────────────────────
  // Called by campaign service — returns only what's needed for the prompt
  async getBrochureForPrompt(
    brochureId: string,
  ): Promise<BrochurePromptData | null> {
    const b = await prisma.brochure.findUnique({
      where: { id: brochureId },
      select: {
        projectName: true,
        developerName: true,
        fullAddress: true,
        configurations: true,
        sizeMin: true,
        sizeMax: true,
        sizeUnit: true,
        startingPrice: true,
        maxPrice: true,
        possessionDate: true,
        constructionStatus: true,
        usps: true,
        amenities: true,
        nearbyInfrastructure: true,
        targetBuyerProfile: true,
        minimumBudget: true,
        maximumBudget: true,
        investmentType: true,
        keyQualifyingQuestions: true,
      },
    });

    return b ?? null;
  }
}

export default new BrochureService();
