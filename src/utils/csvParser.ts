import { parse } from "csv-parse/sync";
import fs from "fs";

export interface LeadRow {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  [key: string]: string | undefined;
}

export const parseCSV = (filePath: string): LeadRow[] => {
  const content = fs.readFileSync(filePath);

  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  return records.map((row) => ({
    name: row["name"] || row["Name"] || row["full_name"] || "Unknown",
    phone:
      row["phone"] ||
      row["Phone"] ||
      row["phone_number"] ||
      row["mobile"] ||
      "",
    email: row["email"] || row["Email"] || undefined,
    company: row["company"] || row["Company"] || undefined,
    ...row,
  }));
};