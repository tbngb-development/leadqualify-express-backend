import {
  extractTextFromPDF,
  assessTextQuality,
} from "../../infrastructure/pdfExtractor";
import { extractPropertyDetails } from "../../infrastructure/propertyExtractor";
import { cleanupUploadedFile } from "../../../../shared/middleware/upload";
import {
  UnprocessablePdfError,
  AIQuotaExceededError,
} from "../../domain/errors/brochure.errors";
import { ExtractBrochureInput } from "../dto/brochure.dto";

export class ExtractBrochureUseCase {
  async execute(input: ExtractBrochureInput) {
    try {
      const pdfResult = await extractTextFromPDF(
        input.filePath,
        input.originalFileName,
      );
      const textQuality = assessTextQuality(pdfResult);

      if (!textQuality.hasUsableText && pdfResult.textLength === 0) {
        throw new UnprocessablePdfError(
          "No text content could be extracted from PDF.",
        );
      }

      const propertyDetails = await extractPropertyDetails(pdfResult);

      const flattenedForSave = {
        originalFileName: input.originalFileName,
        fileSizeMB: pdfResult.fileSizeMB,
        pageCount: pdfResult.pageCount,
        rawTextLength: pdfResult.textLength,
        projectName: propertyDetails.projectName,
        developerName: propertyDetails.developerName,
        reraNumber: propertyDetails.reraNumber,
        projectWebsite: propertyDetails.projectWebsite,
        contactNumber: propertyDetails.contactNumber,
        city: propertyDetails.location.city,
        area: propertyDetails.location.area,
        state: propertyDetails.location.state,
        landmark: propertyDetails.location.landmark,
        fullAddress: propertyDetails.location.fullAddress,
        propertyTypes: propertyDetails.propertyTypes,
        configurations: propertyDetails.configurations,
        totalUnits: propertyDetails.totalUnits,
        totalTowers: propertyDetails.totalTowers,
        totalFloors: propertyDetails.totalFloors,
        sizeMin: propertyDetails.sizeRange.min,
        sizeMax: propertyDetails.sizeRange.max,
        sizeUnit: propertyDetails.sizeRange.unit,
        startingPrice: propertyDetails.pricing.startingPrice,
        maxPrice: propertyDetails.pricing.maxPrice,
        pricePerSqft: propertyDetails.pricing.pricePerSqft,
        priceLabel: propertyDetails.pricing.priceLabel,
        paymentPlan: propertyDetails.paymentPlan,
        bankApprovals: propertyDetails.bankApprovals,
        maintenanceCharge: propertyDetails.maintenanceCharge,
        possessionDate: propertyDetails.possessionDate,
        launchDate: propertyDetails.launchDate,
        constructionStatus: propertyDetails.constructionStatus,
        amenities: propertyDetails.amenities,
        specifications: propertyDetails.specifications,
        nearbyInfrastructure: propertyDetails.nearbyInfrastructure,
        usps: propertyDetails.usps,
        minimumBudget: propertyDetails.qualificationCriteria.minimumBudget,
        maximumBudget: propertyDetails.qualificationCriteria.maximumBudget,
        targetBuyerProfile:
          propertyDetails.qualificationCriteria.targetBuyerProfile,
        preferredLocations:
          propertyDetails.qualificationCriteria.preferredLocations,
        investmentType: propertyDetails.qualificationCriteria.investmentType,
        keyQualifyingQuestions:
          propertyDetails.qualificationCriteria.keyQualifyingQuestions,
        confidence: propertyDetails.confidence,
        extractionWarnings: propertyDetails.extractionWarnings,
      };

      return {
        propertyDetails,
        flattenedForSave,
        pdfMeta: {
          fileName: pdfResult.fileName,
          pageCount: pdfResult.pageCount,
          fileSizeBytes: pdfResult.fileSizeBytes,
          fileSizeMB: pdfResult.fileSizeMB,
          textLength: pdfResult.textLength,
          truncated: pdfResult.truncated,
          extractedAt: pdfResult.extractedAt,
        },
        textQuality,
      };
    } catch (error: any) {
      if (
        error.message?.includes("quota") ||
        error.message?.includes("QUOTA")
      ) {
        throw new AIQuotaExceededError();
      }
      throw error;
    } finally {
      cleanupUploadedFile(input.filePath);
    }
  }
}
