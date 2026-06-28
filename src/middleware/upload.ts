import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

// ─── Ensure upload dir exists ─────────────────────────────────────────────────
const UPLOAD_DIR = path.join(process.cwd(), "uploads", "brochures");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ─── Storage Config ───────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    // Sanitize original name — remove spaces and special chars
    const sanitized = file.originalname
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9._-]/g, "");

    // Add timestamp prefix to avoid collisions
    const uniqueName = `${Date.now()}_${sanitized}`;
    cb(null, uniqueName);
  },
});

// ─── File Filter — PDFs only ──────────────────────────────────────────────────
const pdfFileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedMimeTypes = ["application/pdf", "application/x-pdf"];
  const allowedExtensions = [".pdf"];

  const ext = path.extname(file.originalname).toLowerCase();
  const isMimeOk = allowedMimeTypes.includes(file.mimetype);
  const isExtOk = allowedExtensions.includes(ext);

  if (isMimeOk && isExtOk) {
    cb(null, true);
  } else {
    cb(
      new Error(
        `Invalid file type. Only PDF files are accepted. Got: ${file.mimetype}`
      )
    );
  }
};

// ─── Multer Instance ─────────────────────────────────────────────────────────
// 80MB limit to match requirement
export const brochureUpload = multer({
  storage,
  fileFilter: pdfFileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB
    files: 1,                    // Only one file at a time
  },
});

// ─── Cleanup helper — delete temp file after processing ───────────────────────
export function cleanupUploadedFile(filePath: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`[Upload] Cleaned up temp file: ${filePath}`);
    }
  } catch (err) {
    // Non-fatal — just log it
    console.warn(`[Upload] Failed to cleanup file ${filePath}:`, err);
  }
}