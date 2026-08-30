export interface BrochureEntityData {
  id: string;
  tenantId: string;
  originalFileName: string;
  fileSizeMB: string;
  pageCount: number;
  rawTextLength: number;
  projectName: string | null;
  developerName: string | null;
  reraNumber: string | null;
  projectWebsite: string | null;
  contactNumber: string | null;
  city: string | null;
  area: string | null;
  state: string | null;
  landmark: string | null;
  fullAddress: string | null;
  propertyTypes: string[];
  configurations: string[];
  totalUnits: number | null;
  totalTowers: number | null;
  totalFloors: number | null;
  sizeMin: number | null;
  sizeMax: number | null;
  sizeUnit: string | null;
  startingPrice: number | null;
  maxPrice: number | null;
  pricePerSqft: number | null;
  priceLabel: string | null;
  paymentPlan: string | null;
  bankApprovals: string[];
  maintenanceCharge: string | null;
  possessionDate: string | null;
  launchDate: string | null;
  constructionStatus: string;
  amenities: string[];
  specifications: string[];
  nearbyInfrastructure: string[];
  usps: string[];
  minimumBudget: number | null;
  maximumBudget: number | null;
  targetBuyerProfile: string | null;
  preferredLocations: string[];
  investmentType: string[];
  keyQualifyingQuestions: string[];
  confidence: number;
  extractionWarnings: string[];
  isConfirmed: boolean;
  confirmedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class BrochureEntity {
  constructor(private readonly data: BrochureEntityData) {}

  get id(): string {
    return this.data.id;
  }
  get tenantId(): string {
    return this.data.tenantId;
  }
  get projectName(): string | null {
    return this.data.projectName;
  }
  get isConfirmed(): boolean {
    return this.data.isConfirmed;
  }

  toPrimitives(): BrochureEntityData {
    return { ...this.data };
  }
}