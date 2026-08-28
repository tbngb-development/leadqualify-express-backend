import { LeadRow } from "./leadParser";
import { normalizePhoneNumber } from "../config/bolna";

export interface CSVTransformResult {
  transformedBuffer: Buffer;
  validCount: number;
  filteredOutCount: number;
}

export class CSVTransformer {
  /**
   * Converts a collection of standard parsed spreadsheet row items into a Bolna-optimized
   * CSV document payload.
   *
   * CRITICAL NORMALIZATIONS applied:
   * 1. Forces E.164 phone formats and strict Indian code (+91) prepends.
   * 2. Drops any phone format that does not match validation guidelines (filtering non-Indian entries).
   * 3. Renames our local 'phone' metadata property keys into Bolna's expected 'contact_number'.
   * 4. Aligns user prompt variables into the CSV header row.
   */
  static transformToBolnaCSV(
    leads: LeadRow[],
    campaignVariables: Record<string, string>,
  ): CSVTransformResult {
    const headers = new Set<string>(["contact_number", "customer_name"]);
    
    // Auto-discover keys from metadata
    leads.forEach((lead) => {
      Object.keys(lead).forEach((key) => {
        if (!["phone", "name", "email", "company"].includes(key)) {
          headers.add(key);
        }
      });
    });

    // Merge static context configuration fields
    Object.keys(campaignVariables).forEach((vKey) => {
      if (!["customer_name", "customer_phone", "phone"].includes(vKey)) {
        headers.add(vKey);
      }
    });

    const headerArray = Array.from(headers);
    const rows: string[][] = [headerArray];
    let validCount = 0;
    let filteredOutCount = 0;

    for (const lead of leads) {
      const normalizedPhone = normalizePhoneNumber(lead.phone);
      
      // Strict constraint: must belong to the Indian Telecommunication Space (+91)
      if (!normalizedPhone.startsWith("+91")) {
        console.warn(`[CSVTransformer] Filtering out non-Indian phone target: "${lead.phone}"`);
        filteredOutCount++;
        continue;
      }

      validCount++;
      const rowData: string[] = [];

      headerArray.forEach((header) => {
        if (header === "contact_number") {
          rowData.push(normalizedPhone);
        } else if (header === "customer_name") {
          rowData.push(lead.name || "");
        } else {
          // Check lead payload override metadata first, fallback to static defaults
          const value = lead[header] !== undefined 
            ? String(lead[header] ?? "")
            : String(campaignVariables[header] ?? "");
          
          // Escape string cells
          rowData.push(`"${value.replace(/"/g, '""')}"`);
        }
      });

      rows.push(rowData);
    }

    const csvContent = rows.map((r) => r.join(",")).join("\n");
    const transformedBuffer = Buffer.from(csvContent, "utf-8");

    return {
      transformedBuffer,
      validCount,
      filteredOutCount,
    };
  }
}