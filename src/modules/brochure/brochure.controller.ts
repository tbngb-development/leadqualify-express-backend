import { Request, Response, NextFunction } from "express";
import { brochureService } from "./brochure.service";

export class BrochureController {
  /**
   * POST /api/brochure/extract
   * Accepts a PDF file upload and returns extracted property details
   */
  async extractBrochure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // ── Validate file was uploaded ─────────────────────────────────────────
      if (!req.file) {
        res.status(400).json({
          success: false,
          message: "No file uploaded. Please upload a PDF file.",
          error: "MISSING_FILE",
        });
        return;
      }

      const { path: filePath, originalname: fileName, size } = req.file;

      console.log(
        `[BrochureController] Received: ${fileName} | ${(size / 1024 / 1024).toFixed(2)}MB`
      );

      // ── Run extraction pipeline ────────────────────────────────────────────
      const result = await brochureService.extractFromBrochure(
        filePath,
        fileName
      );

      // ── Warn if low quality but still return data ──────────────────────────
      if (result.data.textQuality.warning) {
        result.message = `${result.message}. Warning: ${result.data.textQuality.warning}`;
      }

      res.status(200).json(result);
    } catch (error: any) {
      console.error("[BrochureController] Error:", error.message);

      // ── Known errors with user-friendly messages ───────────────────────────
      const knownErrors: Record<string, { status: number; code: string }> = {
        "password protected": { status: 422, code: "PDF_PASSWORD_PROTECTED" },
        "corrupted": { status: 422, code: "PDF_CORRUPTED" },
        "No text content": { status: 422, code: "PDF_NO_TEXT" },
        "quota exceeded": { status: 429, code: "AI_QUOTA_EXCEEDED" },
        "GEMINI_API_KEY": { status: 500, code: "AI_NOT_CONFIGURED" },
      };

      for (const [keyword, errorInfo] of Object.entries(knownErrors)) {
        if (error.message?.toLowerCase().includes(keyword.toLowerCase())) {
          res.status(errorInfo.status).json({
            success: false,
            message: error.message,
            error: errorInfo.code,
          });
          return;
        }
      }

      next(error);
    }
  }
}

export const brochureController = new BrochureController();