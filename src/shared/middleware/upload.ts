import multer, { type FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import type { Request } from "express";

// ── Ensure upload directories exist (for brochure disk storage) ──────────────

const BROCHURE_UPLOAD_DIR = path.join(process.cwd(), "uploads", "brochures");

if (!fs.existsSync(BROCHURE_UPLOAD_DIR)) {
  fs.mkdirSync(BROCHURE_UPLOAD_DIR, { recursive: true });
}

// ── Shared filename sanitizer ────────────────────────────────────────────────

const buildFilename = (
  _req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, filename: string) => void,
): void => {
  const sanitized = file.originalname
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "");
  cb(null, `${Date.now()}_${sanitized}`);
};

// ═════════════════════════════════════════════════════════════════════════════
// BROCHURE UPLOAD (PDF only — disk storage, unchanged)
// ═════════════════════════════════════════════════════════════════════════════

const brochureStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, BROCHURE_UPLOAD_DIR),
  filename: buildFilename,
});

const pdfFileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
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
  limits: { fileSize: 100 * 1024 * 1024, files: 1 },
});

// ═════════════════════════════════════════════════════════════════════════════
// LEADS UPLOAD — DISK STORAGE (legacy, kept for backward compatibility)
// ═════════════════════════════════════════════════════════════════════════════

const LEADS_UPLOAD_DIR = path.join(process.cwd(), "uploads", "leads");

if (!fs.existsSync(LEADS_UPLOAD_DIR)) {
  fs.mkdirSync(LEADS_UPLOAD_DIR, { recursive: true });
}

const leadsStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, LEADS_UPLOAD_DIR),
  filename: buildFilename,
});

const LEADS_ALLOWED_EXTENSIONS = [".csv", ".xls", ".xlsx"];

const leadsFileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
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
  limits: { fileSize: 10 * 1024 * 1024, files: 1 },
});

// ═════════════════════════════════════════════════════════════════════════════
// LEADS UPLOAD — MEMORY STORAGE (NEW — for Clean Architecture use cases)
// ═════════════════════════════════════════════════════════════════════════════
//
// Stores the file in req.file.buffer instead of writing to disk.
// Eliminates the need for cleanup logic in use cases.
// Use this in the new v1 routes; keep leadsUpload for legacy routes.

export const leadsUploadMemory = multer({
  storage: multer.memoryStorage(),
  fileFilter: leadsFileFilter,
  limits: { fileSize: 10 * 1024 * 1024, files: 1 },
});

// ═════════════════════════════════════════════════════════════════════════════
// Shared cleanup helper (for disk storage only)
// ═════════════════════════════════════════════════════════════════════════════

export function cleanupUploadedFile(filePath: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.warn(`[Upload] Failed to cleanup file ${filePath}:`, err);
  }
}
