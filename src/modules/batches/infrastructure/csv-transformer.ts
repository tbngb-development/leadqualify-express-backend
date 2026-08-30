import { normalizePhoneNumber } from "../../leads/domain/rules/phone.rules";
import type { LeadRow } from "../../leads/infrastructure/leadParser";

export interface CSVTransformResult {
  transformedBuffer: Buffer;
  validCount: number;
  filteredOutCount: number;
}

/**
 * Converts parsed lead rows into a Bolna-compatible CSV buffer.
 *
 * Normalizations applied:
 * 1. Forces E.164 phone format with +91 prefix
 * 2. Drops non-Indian numbers
 * 3. Renames "phone" → "contact_number"
 * 4. Injects campaign variables into columns
 */
export function transformToBolnaCSV(
  leads: LeadRow[],
  campaignVariables: Record<string, string>,
): CSVTransformResult {
  const headers = new Set<string>(["contact_number", "customer_name"]);

  for (const lead of leads) {
    for (const key of Object.keys(lead)) {
      if (!["phone", "name", "email", "company"].includes(key)) {
        headers.add(key);
      }
    }
  }

  for (const vKey of Object.keys(campaignVariables)) {
    if (!["customer_name", "customer_phone", "phone"].includes(vKey)) {
      headers.add(vKey);
    }
  }

  const headerArray = Array.from(headers);
  const rows: string[][] = [headerArray];
  let validCount = 0;
  let filteredOutCount = 0;

  for (const lead of leads) {
    const normalizedPhone = normalizePhoneNumber(lead.phone);

    if (!normalizedPhone.startsWith("+91")) {
      filteredOutCount++;
      continue;
    }

    validCount++;
    const rowData: string[] = [];

    for (const header of headerArray) {
      if (header === "contact_number") {
        rowData.push(normalizedPhone);
      } else if (header === "customer_name") {
        rowData.push(lead.name || "");
      } else {
        const value =
          lead[header] !== undefined
            ? String(lead[header] ?? "")
            : String(campaignVariables[header] ?? "");
        rowData.push(`"${value.replace(/"/g, '""')}"`);
      }
    }

    rows.push(rowData);
  }

  const csvContent = rows.map((r) => r.join(",")).join("\n");
  const transformedBuffer = Buffer.from(csvContent, "utf-8");

  return { transformedBuffer, validCount, filteredOutCount };
}
