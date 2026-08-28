import { parse } from "csv-parse/sync";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export interface LeadRow {
  name: string | null;
  phone: string;
  email?: string;
  company?: string;
  [key: string]: string | null | undefined;
}

const sanitizePhone = (raw: string): string => {
  if (!raw) return "";

  const cleaned = raw.trim();

  if (cleaned.startsWith("+")) {
    return "+" + cleaned.slice(1).replace(/\D/g, "");
  }

  return cleaned.replace(/\D/g, "");
};

// ─── V1: Indian Phone Validator ──────────────────────────────────────────────
/**
 * Validates that a sanitized phone number belongs to the Indian telecom space.
 *
 * Accepted formats after sanitization:
 *   +91XXXXXXXXXX  (13 chars with +)
 *   91XXXXXXXXXX   (12 digits)
 *   XXXXXXXXXX     (10 digits — will be normalized later)
 *
 * Returns true if the number is Indian, false otherwise.
 */
export const isIndianPhone = (sanitizedPhone: string): boolean => {
  if (!sanitizedPhone) return false;

  const digits = sanitizedPhone.replace("+", "");

  // 10-digit bare Indian mobile
  if (digits.length === 10) return true;

  // 12-digit with 91 prefix
  if (digits.length === 12 && digits.startsWith("91")) return true;

  // Anything else is non-Indian
  return false;
};

// ─── Normalize a raw row from any source ──────────────────────────────────────
const normalizeRow = (row: Record<string, unknown>): LeadRow => {
  const str = (val: unknown): string | undefined => {
    if (val === null || val === undefined || val === "") return undefined;
    const s = String(val).trim();
    return s === "" ? undefined : s;
  };

  const rawName =
    str(row["name"]) ||
    str(row["Name"]) ||
    str(row["full_name"]) ||
    str(row["Full Name"]) ||
    str(row["FullName"]);

  return {
    name: rawName ?? null,

    phone: sanitizePhone(
      str(row["phone"]) ||
        str(row["Phone"]) ||
        str(row["phone_number"]) ||
        str(row["Phone Number"]) ||
        str(row["mobile"]) ||
        str(row["Mobile"]) ||
        str(row["contact"]) ||
        str(row["Contact"]) ||
        str(row["contact_number"]) ||
        str(row["Contact Number"]) ||
        "",
    ),

    email:
      str(row["email"]) ||
      str(row["Email"]) ||
      str(row["email_address"]) ||
      str(row["Email Address"]) ||
      undefined,

    company:
      str(row["company"]) ||
      str(row["Company"]) ||
      str(row["organization"]) ||
      str(row["Organization"]) ||
      undefined,

    ...Object.fromEntries(
      Object.entries(row).map(([k, v]) => [k, str(v) ?? null]),
    ),
  };
};

// ─── Parse CSV ────────────────────────────────────────────────────────────────
const parseCSVFile = (filePath: string): LeadRow[] => {
  const content = fs.readFileSync(filePath);

  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  }) as Record<string, string>[];

  return records.map(normalizeRow);
};

// ─── Parse XLSX / XLS ─────────────────────────────────────────────────────────
const parseExcelFile = (filePath: string): LeadRow[] => {
  const workbook = XLSX.readFile(filePath, {
    type: "file",
    cellText: true,
    cellDates: false,
    raw: false,
  });

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Excel file has no sheets");
  }

  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet "${sheetName}" could not be read`);
  }

  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
    defval: "",
    raw: false,
    blankrows: false,
  });

  if (records.length === 0) {
    throw new Error("Excel file is empty or has no data rows");
  }

  return records.map(normalizeRow);
};

// ─── Main Parser (auto-detects format) ───────────────────────────────────────
export type SupportedFileType = "csv" | "xlsx" | "xls";

export const parseLeadFile = (filePath: string): LeadRow[] => {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case ".csv":
      return parseCSVFile(filePath);

    case ".xlsx":
    case ".xls":
      return parseExcelFile(filePath);

    default:
      throw new Error(
        `Unsupported file format: "${ext}". Supported formats: CSV, XLS, XLSX`,
      );
  }
};

export const parseCSV = parseLeadFile;
