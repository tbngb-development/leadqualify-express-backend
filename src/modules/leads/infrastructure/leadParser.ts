import { parse } from "csv-parse/sync";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

// ── Types ────────────────────────────────────────────────────────────────────

export interface LeadRow {
  name: string | null;
  phone: string;
  email?: string;
  company?: string;
  [key: string]: string | null | undefined;
}

export type SupportedFileType = "csv" | "xlsx" | "xls";

// ── Phone Sanitizer ──────────────────────────────────────────────────────────

const sanitizePhone = (raw: string): string => {
  if (!raw) return "";
  const cleaned = raw.trim();
  if (cleaned.startsWith("+")) {
    return "+" + cleaned.slice(1).replace(/\D/g, "");
  }
  return cleaned.replace(/\D/g, "");
};

// ── Indian Phone Validator ───────────────────────────────────────────────────

export const isIndianPhone = (sanitizedPhone: string): boolean => {
  if (!sanitizedPhone) return false;
  const digits = sanitizedPhone.replace("+", "");
  if (digits.length === 10) return true;
  if (digits.length === 12 && digits.startsWith("91")) return true;
  return false;
};

// ── Row Normalizer ───────────────────────────────────────────────────────────

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

// ── File-Based Parsing (existing — kept for backward compatibility) ──────────

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

const parseExcelFile = (filePath: string): LeadRow[] => {
  const workbook = XLSX.readFile(filePath, {
    type: "file",
    cellText: true,
    cellDates: false,
    raw: false,
  });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error("Excel file has no sheets");
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) throw new Error(`Sheet "${sheetName}" could not be read`);
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
        `Unsupported file format: "${ext}". Supported: CSV, XLS, XLSX`,
      );
  }
};

export const parseCSV = parseLeadFile;

// ── Buffer-Based Parsing (NEW — for memory storage) ──────────────────────────

const parseCSVBuffer = (buffer: Buffer): LeadRow[] => {
  const records = parse(buffer, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  }) as Record<string, string>[];
  return records.map(normalizeRow);
};

const parseExcelBuffer = (buffer: Buffer, extension: string): LeadRow[] => {
  const workbook = XLSX.read(buffer, {
    type: "buffer",
    cellText: true,
    cellDates: false,
    raw: false,
  });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error("Excel file has no sheets");
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) throw new Error(`Sheet "${sheetName}" could not be read`);
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

/**
 * Parses a lead file from a Buffer (memory storage).
 *
 * @param buffer   - File content as Buffer
 * @param fileName - Original file name (used to detect format via extension)
 */
export const parseLeadBuffer = (
  buffer: Buffer,
  fileName: string,
): LeadRow[] => {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".csv":
      return parseCSVBuffer(buffer);
    case ".xlsx":
    case ".xls":
      return parseExcelBuffer(buffer, ext);
    default:
      throw new Error(
        `Unsupported file format: "${ext}". Supported: CSV, XLS, XLSX`,
      );
  }
};

/**
 * Detects the file type from a filename extension.
 */
export function detectFileType(fileName: string): SupportedFileType | null {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".csv":
      return "csv";
    case ".xlsx":
      return "xlsx";
    case ".xls":
      return "xls";
    default:
      return null;
  }
}
