import {
  extractTextFromPDF,
  assessTextQuality,
  PDFExtractionResult,
} from "../../utils/pdfExtractor";
import {
  extractPropertyDetails,
  PropertyDetails,
} from "../../utils/propertyExtractor";
import { cleanupUploadedFile } from "../../middleware/upload";
import { BrochureExtractResponse } from "./brochure.types";

export class BrochureService {
  /**
   * Full pipeline:
   * 1. Extract raw text from PDF
   * 2. Assess text quality
   * 3. Send to Gemini for structured extraction
   * 4. Cleanup temp file
   * 5. Return structured response
   */
  async extractFromBrochure(
    filePath: string,
    fileName: string
  ): Promise<BrochureExtractResponse> {
    const startTime = Date.now();
    let pdfResult: PDFExtractionResult | null = null;

    try {
      // ── Step 1: Extract raw text ───────────────────────────────────────────
      console.log(`[BrochureService] Step 1: Extracting text from PDF...`);
      pdfResult = await extractTextFromPDF(filePath, fileName);

      // ── Step 2: Assess quality ─────────────────────────────────────────────
      console.log(`[BrochureService] Step 2: Assessing text quality...`);
      const textQuality = assessTextQuality(pdfResult);

      if (!textQuality.hasUsableText) {
        // Still attempt extraction but warn user
        console.warn(
          `[BrochureService] Low text quality detected: ${textQuality.warning}`
        );
      }

      // ── Step 3: AI extraction ──────────────────────────────────────────────
      console.log(
        `[BrochureService] Step 3: Running AI property extraction...`
      );
      const propertyDetails: PropertyDetails =
        await extractPropertyDetails(pdfResult);

      // ── Step 4: Build response ─────────────────────────────────────────────
      const processingTimeMs = Date.now() - startTime;

      const response: BrochureExtractResponse = {
        success: true,
        message: "Brochure extracted successfully",
        data: {
          propertyDetails,
          pdfMeta: {
            fileName: pdfResult.fileName,
            pageCount: pdfResult.pageCount,
            fileSizeBytes: pdfResult.fileSizeBytes,
            fileSizeMB: (pdfResult.fileSizeBytes / (1024 * 1024)).toFixed(2),
            textLength: pdfResult.textLength,
            truncated: pdfResult.truncated,
            extractedAt: pdfResult.extractedAt,
          },
          textQuality,
          processingTimeMs,
        },
      };

      console.log(
        `[BrochureService] Complete in ${processingTimeMs}ms`
      );

      return response;
    } finally {
      // ── Step 5: Always cleanup temp file ──────────────────────────────────
      // Even if extraction fails, we don't want orphaned files
      cleanupUploadedFile(filePath);
    }
  }
}

export const brochureService = new BrochureService();