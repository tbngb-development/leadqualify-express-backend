import { BrochureEntityData } from "../../domain/entities/brochure.entity";

export interface BrochureListItem {
  id: string;
  projectName: string | null;
  developerName: string | null;
  city: string | null;
  area: string | null;
  configurations: string[];
  constructionStatus: string;
  confidence: number;
  isConfirmed: boolean;
  originalFileName: string;
  createdAt: Date;
  campaigns: Array<{ id: string }>;
}

export interface BrochureRepository {
  list(tenantId: string): Promise<BrochureListItem[]>;
  findById(tenantId: string, id: string): Promise<BrochureEntityData | null>;
  findByIdWithCampaigns(
    tenantId: string,
    id: string,
  ): Promise<
    | (BrochureEntityData & {
        campaigns: Array<{ id: string; name: string; status: string }>;
      })
    | null
  >;
  create(
    tenantId: string,
    data: Omit<
      BrochureEntityData,
      "id" | "tenantId" | "createdAt" | "updatedAt" | "campaigns"
    >,
  ): Promise<BrochureEntityData>;
  update(
    tenantId: string,
    id: string,
    data: Partial<
      Omit<
        BrochureEntityData,
        "id" | "tenantId" | "createdAt" | "updatedAt" | "campaigns"
      >
    >,
  ): Promise<BrochureEntityData>;
  delete(tenantId: string, id: string): Promise<void>;
  getCampaignReferenceCount(id: string): Promise<number>;
}
