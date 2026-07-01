import { parse } from "csv-parse/sync";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export interface LeadRow {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  [key: string]: string | undefined;
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

// ─── Normalize a raw row from any source ──────────────────────────────────────
const normalizeRow = (row: Record<string, unknown>): LeadRow => {
  // Convert all values to string safely
  const str = (val: unknown): string | undefined => {
    if (val === null || val === undefined || val === "") return undefined;
    const s = String(val).trim();
    return s === "" ? undefined : s;
  };

  return {
    name:
      str(row["name"]) ||
      str(row["Name"]) ||
      str(row["full_name"]) ||
      str(row["Full Name"]) ||
      str(row["FullName"]) ||
      "Unknown",

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
    ...Object.fromEntries(Object.entries(row).map(([k, v]) => [k, str(v)])),
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

// ─── Keep backward-compat export ─────────────────────────────────────────────
// Existing code importing parseCSV will still work
export const parseCSV = parseLeadFile;
