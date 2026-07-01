import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

// ─── Ensure upload directories exist ─────────────────────────────────────────
const BROCHURE_UPLOAD_DIR = path.join(process.cwd(), "uploads", "brochures");
const LEADS_UPLOAD_DIR = path.join(process.cwd(), "uploads", "leads");

[BROCHURE_UPLOAD_DIR, LEADS_UPLOAD_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// ─── Shared filename sanitizer ────────────────────────────────────────────────
const buildFilename = (
  _req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, filename: string) => void,
) => {
  const sanitized = file.originalname
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "");
  cb(null, `${Date.now()}_${sanitized}`);
};

// ═══════════════════════════════════════════════════════════════════════════════
// BROCHURE UPLOAD  (PDF only — unchanged)
// ═══════════════════════════════════════════════════════════════════════════════

const brochureStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, BROCHURE_UPLOAD_DIR),
  filename: buildFilename,
});

const pdfFileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
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
        `Invalid file type. Only PDF files are accepted. Got: ${file.mimetype}`,
      ),
    );
  }
};

export const brochureUpload = multer({
  storage: brochureStorage,
  fileFilter: pdfFileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB
    files: 1,
  },
});

// ═══════════════════════════════════════════════════════════════════════════════
// LEADS UPLOAD  (CSV / XLS / XLSX)
// ═══════════════════════════════════════════════════════════════════════════════

const leadsStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, LEADS_UPLOAD_DIR),
  filename: buildFilename,
});

const LEADS_ALLOWED_EXTENSIONS = [".csv", ".xls", ".xlsx"];

// NOTE: Browsers/clients send inconsistent MIME types for xls/xlsx,
// so we validate by file extension only (more reliable).
const leadsFileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (LEADS_ALLOWED_EXTENSIONS.includes(ext)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        `Invalid file type "${ext}". Only CSV, XLS, and XLSX files are allowed.`,
      ),
    );
  }
};

export const leadsUpload = multer({
  storage: leadsStorage,
  fileFilter: leadsFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
    files: 1,
  },
});

// ═══════════════════════════════════════════════════════════════════════════════
// Shared cleanup helper
// ═══════════════════════════════════════════════════════════════════════════════

export function cleanupUploadedFile(filePath: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`[Upload] Cleaned up temp file: ${filePath}`);
    }
  } catch (err) {
    console.warn(`[Upload] Failed to cleanup file ${filePath}:`, err);
  }
}
