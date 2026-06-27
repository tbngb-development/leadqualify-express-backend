import { Router } from "express";
import { brochureController } from "./brochure.controller";
import { brochureUpload } from "../../middleware/upload";
import { authenticate } from "../../middleware/auth";

const router = Router();

/**
 * POST /api/brochure/extract
 *
 * Upload a property brochure PDF and get extracted structured data
 *
 * Body: multipart/form-data
 *   - file: PDF file (max 80MB)
 *
 * Returns: PropertyDetails JSON
 */
router.post(
  "/extract",
  authenticate,
  // Handle multer errors gracefully before they hit the controller
  (req, res, next) => {
    brochureUpload.single("file")(req, res, (err) => {
      if (err) {
        // Multer-specific errors
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(413).json({
            success: false,
            message: "File too large. Maximum allowed size is 80MB.",
            error: "FILE_TOO_LARGE",
          });
        }
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res.status(400).json({
            success: false,
            message: 'Unexpected field name. Use "file" as the field name.',
            error: "WRONG_FIELD_NAME",
          });
        }
        return res.status(400).json({
          success: false,
          message: err.message || "File upload failed",
          error: "UPLOAD_ERROR",
        });
      }
      next();
    });
  },
  brochureController.extractBrochure.bind(brochureController)
);

export default router;