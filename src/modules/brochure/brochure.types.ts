import { PropertyDetails } from "../../utils/propertyExtractor";
import { PDFExtractionResult } from "../../utils/pdfExtractor";

// ─── Request types ────────────────────────────────────────────────────────────
export interface BrochureExtractRequest {
  file: Express.Multer.File;
}

// ─── Response types ───────────────────────────────────────────────────────────
export interface BrochureExtractResponse {
  success: boolean;
  message: string;
  data: {
    propertyDetails: PropertyDetails;
    pdfMeta: {
      fileName: string;
      pageCount: number;
      fileSizeBytes: number;
      fileSizeMB: string;
      textLength: number;
      truncated: boolean;
      extractedAt: string;
    };
    textQuality: {
      hasUsableText: boolean;
      avgCharsPerPage: number;
      warning: string | null;
    };
    processingTimeMs: number;
  };
}

// ─── Re-export for convenience ────────────────────────────────────────────────
export type { PropertyDetails, PDFExtractionResult };