import { parse } from "csv-parse/sync";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export interface LeadRow {
  name: string | null; // <─── Updated to allow null
  phone: string;
  email?: string;
  company?: string;
  [key: string]: string | null | undefined;
}

const sanitizePhone = (raw: string): string => {
  if (!raw) return "";

  const cleaned = raw.trim();

  // Keep "+" if present at start, then digits only
  if (cleaned.startsWith("+")) {
    return "+" + cleaned.slice(1).replace(/\D/g, "");
  }

  return cleaned.replace(/\D/g, ""); // digits only, normalization happens at call time
};

/**
 * Parses and extracts a valid single name part (min 3 chars) from a multi-word name.
 * Checks parts sequentially: First Name -> Middle Name -> Last Name...
 * Returns null if no part matches the minimum length of 3.
 */
const processName = (rawName: string | undefined): string | null => {
  if (!rawName) return null;

  // Split by whitespace and remove empty parts
  const parts = rawName.trim().split(/\s+/).filter(Boolean);

  for (const part of parts) {
    if (part.length >= 3) {
      return part; // Return the first matching name part
    }
  }

  return null; // Fallback to null if no part is >= 3 characters
};

// ─── Normalize a raw row from any source ──────────────────────────────────────
const normalizeRow = (row: Record<string, unknown>): LeadRow => {
  // Convert all values to string safely
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
    name: processName(rawName), // Applies new min-length (3) and first-valid-part logic

    phone: sanitizePhone(
      str(row["phone"]) ||
        str(row["Phone"]) ||
        str(row["phone_number"]) ||
        str(row["Phone Number"]) ||
        str(row["mobile"]) ||
        str(row["Mobile"]) ||
        str(row["contact"]) ||
        str(row["Contact"]) ||
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

    // Spread remaining columns as strings (for metadata)
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
    bom: true, // Handle BOM character in some CSV exports
  }) as Record<string, string>[];

  return records.map(normalizeRow);
};

// ─── Parse XLSX / XLS ─────────────────────────────────────────────────────────
const parseExcelFile = (filePath: string): LeadRow[] => {
  const workbook = XLSX.readFile(filePath, {
    type: "file",
    cellText: true, // Read cells as text
    cellDates: false, // Keep dates as strings
    raw: false, // Format values (numbers as strings, etc.)
  });

  // Use the first sheet
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Excel file has no sheets");
  }

  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet "${sheetName}" could not be read`);
  }

  // Convert sheet to JSON — header row becomes keys
  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
    defval: "", // Default value for empty cells
    raw: false, // All values as formatted strings
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
