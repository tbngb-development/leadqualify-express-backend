export interface ExtractBrochureInput {
  filePath: string;
  originalFileName: string;
  fileSizeMB: string;
}

export interface SaveBrochureInput {
  originalFileName: string;
  fileSizeMB: string;
  pageCount: number;
  rawTextLength: number;
  projectName?: string;
  developerName?: string;
  reraNumber?: string;
  projectWebsite?: string;
  contactNumber?: string;
  city?: string;
  area?: string;
  state?: string;
  landmark?: string;
  fullAddress?: string;
  propertyTypes?: string[];
  configurations?: string[];
  totalUnits?: number;
  totalTowers?: number;
  totalFloors?: number;
  sizeMin?: number;
  sizeMax?: number;
  sizeUnit?: string;
  startingPrice?: number;
  maxPrice?: number;
  pricePerSqft?: number;
  priceLabel?: string;
  paymentPlan?: string;
  bankApprovals?: string[];
  maintenanceCharge?: string;
  possessionDate?: string;
  launchDate?: string;
  constructionStatus?: string;
  amenities?: string[];
  specifications?: string[];
  nearbyInfrastructure?: string[];
  usps?: string[];
  minimumBudget?: number;
  maximumBudget?: number;
  targetBuyerProfile?: string;
  preferredLocations?: string[];
  investmentType?: string[];
  keyQualifyingQuestions?: string[];
  confidence?: number;
  extractionWarnings?: string[];
}
