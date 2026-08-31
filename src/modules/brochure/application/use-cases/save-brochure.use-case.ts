import { type BrochureRepository } from "../interfaces/brochure-repository.interface";
import { type SaveBrochureInput } from "../dto/brochure.dto";
import { type BrochureEntityData } from "../../domain/entities/brochure.entity";

export class SaveBrochureUseCase {
  constructor(private readonly brochureRepo: BrochureRepository) {}

  async execute(
    tenantId: string,
    input: SaveBrochureInput,
  ): Promise<BrochureEntityData> {
    const dataToSave: Omit<
      BrochureEntityData,
      "id" | "tenantId" | "createdAt" | "updatedAt"
    > = {
      originalFileName: input.originalFileName,
      fileSizeMB: input.fileSizeMB,
      pageCount: input.pageCount,
      rawTextLength: input.rawTextLength,
      projectName: input.projectName ?? null,
      developerName: input.developerName ?? null,
      reraNumber: input.reraNumber ?? null,
      projectWebsite: input.projectWebsite ?? null,
      contactNumber: input.contactNumber ?? null,
      city: input.city ?? null,
      area: input.area ?? null,
      state: input.state ?? null,
      landmark: input.landmark ?? null,
      fullAddress: input.fullAddress ?? null,
      propertyTypes: input.propertyTypes ?? [],
      configurations: input.configurations ?? [],
      totalUnits: input.totalUnits ?? null,
      totalTowers: input.totalTowers ?? null,
      totalFloors: input.totalFloors ?? null,
      sizeMin: input.sizeMin ?? null,
      sizeMax: input.sizeMax ?? null,
      sizeUnit: input.sizeUnit ?? null,
      startingPrice: input.startingPrice ?? null,
      maxPrice: input.maxPrice ?? null,
      pricePerSqft: input.pricePerSqft ?? null,
      priceLabel: input.priceLabel ?? null,
      paymentPlan: input.paymentPlan ?? null,
      bankApprovals: input.bankApprovals ?? [],
      maintenanceCharge: input.maintenanceCharge ?? null,
      possessionDate: input.possessionDate ?? null,
      launchDate: input.launchDate ?? null,
      constructionStatus: input.constructionStatus ?? "unknown",
      amenities: input.amenities ?? [],
      specifications: input.specifications ?? [],
      nearbyInfrastructure: input.nearbyInfrastructure ?? [],
      usps: input.usps ?? [],
      minimumBudget: input.minimumBudget ?? null,
      maximumBudget: input.maximumBudget ?? null,
      targetBuyerProfile: input.targetBuyerProfile ?? null,
      preferredLocations: input.preferredLocations ?? [],
      investmentType: input.investmentType ?? [],
      keyQualifyingQuestions: input.keyQualifyingQuestions ?? [],
      confidence: input.confidence ?? 0,
      extractionWarnings: input.extractionWarnings ?? [],
      isConfirmed: true,
      confirmedAt: new Date(),
    };

    return this.brochureRepo.create(tenantId, dataToSave);
  }
}
