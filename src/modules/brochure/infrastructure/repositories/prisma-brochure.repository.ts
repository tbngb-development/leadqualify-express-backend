import prisma from "../../../../shared/config/database/prisma";
import type {
  BrochureRepository,
  BrochureListItem,
} from "../../application/interfaces/brochure-repository.interface";
import type { BrochureEntityData } from "../../domain/entities/brochure.entity";

export class PrismaBrochureRepository implements BrochureRepository {
  async list(tenantId: string): Promise<BrochureListItem[]> {
    const brochures = await prisma.brochure.findMany({
      where: { tenantId },
      select: {
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
        campaigns: { select: { id: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return brochures as unknown as BrochureListItem[];
  }

  async findById(
    tenantId: string,
    id: string,
  ): Promise<BrochureEntityData | null> {
    const brochure = await prisma.brochure.findFirst({
      where: { id, tenantId },
    });
    if (!brochure) return null;
    return this.toEntityData(brochure);
  }

  async findByIdWithCampaigns(
    tenantId: string,
    id: string,
  ): Promise<
    | (BrochureEntityData & {
        campaigns: Array<{ id: string; name: string; status: string }>;
      })
    | null
  > {
    const brochure = await prisma.brochure.findFirst({
      where: { id, tenantId },
      include: {
        campaigns: { select: { id: true, name: true, status: true } },
      },
    });
    if (!brochure) return null;
    return {
      ...this.toEntityData(brochure),
      campaigns: brochure.campaigns,
    };
  }

  async create(
    tenantId: string,
    data: Omit<
      BrochureEntityData,
      "id" | "tenantId" | "createdAt" | "updatedAt"
    >,
  ): Promise<BrochureEntityData> {
    const brochure = await prisma.brochure.create({
      data: {
        tenantId,
        ...data,
      },
    });
    return this.toEntityData(brochure);
  }

  async update(
    tenantId: string,
    id: string,
    data: Partial<
      Omit<BrochureEntityData, "id" | "tenantId" | "createdAt" | "updatedAt">
    >,
  ): Promise<BrochureEntityData> {
    const brochure = await prisma.brochure.update({
      where: { id },
      data,
    });
    return this.toEntityData(brochure);
  }

  async delete(tenantId: string, id: string): Promise<void> {
    await prisma.brochure.delete({
      where: { id },
    });
  }

  async getCampaignReferenceCount(id: string): Promise<number> {
    return prisma.campaign.count({
      where: { brochureId: id },
    });
  }

  private toEntityData(b: any): BrochureEntityData {
    return {
      id: b.id,
      tenantId: b.tenantId,
      originalFileName: b.originalFileName,
      fileSizeMB: b.fileSizeMB,
      pageCount: b.pageCount,
      rawTextLength: b.rawTextLength,
      projectName: b.projectName,
      developerName: b.developerName,
      reraNumber: b.reraNumber,
      projectWebsite: b.projectWebsite,
      contactNumber: b.contactNumber,
      city: b.city,
      area: b.area,
      state: b.state,
      landmark: b.landmark,
      fullAddress: b.fullAddress,
      propertyTypes: b.propertyTypes,
      configurations: b.configurations,
      totalUnits: b.totalUnits,
      totalTowers: b.totalTowers,
      totalFloors: b.totalFloors,
      sizeMin: b.sizeMin,
      sizeMax: b.sizeMax,
      sizeUnit: b.sizeUnit,
      startingPrice: b.startingPrice,
      maxPrice: b.maxPrice,
      pricePerSqft: b.pricePerSqft,
      priceLabel: b.priceLabel,
      paymentPlan: b.paymentPlan,
      bankApprovals: b.bankApprovals,
      maintenanceCharge: b.maintenanceCharge,
      possessionDate: b.possessionDate,
      launchDate: b.launchDate,
      constructionStatus: b.constructionStatus,
      amenities: b.amenities,
      specifications: b.specifications,
      nearbyInfrastructure: b.nearbyInfrastructure,
      usps: b.usps,
      minimumBudget: b.minimumBudget,
      maximumBudget: b.maximumBudget,
      targetBuyerProfile: b.targetBuyerProfile,
      preferredLocations: b.preferredLocations,
      investmentType: b.investmentType,
      keyQualifyingQuestions: b.keyQualifyingQuestions,
      confidence: b.confidence,
      extractionWarnings: b.extractionWarnings,
      isConfirmed: b.isConfirmed,
      confirmedAt: b.confirmedAt,
      createdAt: b.createdAt,
      updatedAt: b.updatedAt,
    };
  }
}
