import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { z } from "zod";
import { PDFExtractionResult } from "./pdfExtractor";

// ─── Zod Schema ───────────────────────────────────────────────────────────────
// This is our ground truth schema — used for validation after Gemini responds

const LocationSchema = z.object({
  city: z.string().nullable(),
  area: z.string().nullable(),
  state: z.string().nullable(),
  landmark: z.string().nullable(),
  fullAddress: z.string().nullable(),
});

const SizeRangeSchema = z.object({
  min: z.number().nullable(),
  max: z.number().nullable(),
  unit: z.enum(["sqft", "sqm", "sqyd", "cent", "acre"]).nullable(),
});

const PricingSchema = z.object({
  startingPrice: z.number().nullable(),
  maxPrice: z.number().nullable(),
  pricePerSqft: z.number().nullable(),
  currency: z.string().default("INR"),
  priceLabel: z.string().nullable(), // e.g. "Starting from ₹45 Lakhs"
});

const QualificationCriteriaSchema = z.object({
  minimumBudget: z.number().nullable(), // Minimum a lead should have
  maximumBudget: z.number().nullable(),
  targetBuyerProfile: z.string().nullable(), // e.g. "First-time homebuyers, NRIs, Investors"
  preferredLocations: z.array(z.string()), // Where target buyers should be from
  investmentType: z.array(z.string()), // ['end-use', 'investment', 'nri']
  keyQualifyingQuestions: z.array(z.string()), // AI-generated questions for the call
});

export const PropertyDetailsSchema = z.object({
  // ── Core Identity ──────────────────────────────────────────────
  projectName: z.string().nullable(),
  developerName: z.string().nullable(),
  reraNumber: z.string().nullable(),
  projectWebsite: z.string().nullable(),
  contactNumber: z.string().nullable(),

  // ── Location ───────────────────────────────────────────────────
  location: LocationSchema,

  // ── Property Specs ─────────────────────────────────────────────
  propertyTypes: z.array(z.string()), // ['Apartment', 'Villa', 'Plot']
  configurations: z.array(z.string()), // ['1 BHK', '2 BHK', '3 BHK']
  totalUnits: z.number().nullable(),
  totalTowers: z.number().nullable(),
  totalFloors: z.number().nullable(),
  sizeRange: SizeRangeSchema,

  // ── Financials ─────────────────────────────────────────────────
  pricing: PricingSchema,
  paymentPlan: z.string().nullable(), // e.g. "20:80", "Construction Linked"
  bankApprovals: z.array(z.string()), // ['SBI', 'HDFC', 'ICICI']
  maintenanceCharge: z.string().nullable(),

  // ── Timeline ───────────────────────────────────────────────────
  possessionDate: z.string().nullable(), // e.g. "December 2026"
  launchDate: z.string().nullable(),
  constructionStatus: z
    .enum([
      "pre-launch",
      "under-construction",
      "ready-to-move",
      "completed",
      "unknown",
    ])
    .default("unknown"),

  // ── Features ───────────────────────────────────────────────────
  amenities: z.array(z.string()),
  specifications: z.array(z.string()), // Flat specs, flooring, fixtures etc.
  nearbyInfrastructure: z.array(z.string()), // Schools, hospitals, metro, malls nearby
  usps: z.array(z.string()), // Unique selling points

  // ── Lead Qualification (Critical for call script) ──────────────
  qualificationCriteria: QualificationCriteriaSchema,

  // ── Meta ───────────────────────────────────────────────────────
  confidence: z.number().min(0).max(1), // How confident is the extraction
  extractionWarnings: z.array(z.string()), // Fields that couldn't be found
  rawTextLength: z.number(),
});

export type PropertyDetails = z.infer<typeof PropertyDetailsSchema>;

// ─── Gemini Client ────────────────────────────────────────────────────────────
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }
  return new GoogleGenerativeAI(apiKey);
}

// ─── Main Extractor ───────────────────────────────────────────────────────────
export async function extractPropertyDetails(
  pdfResult: PDFExtractionResult,
): Promise<PropertyDetails> {
  console.log(
    `[PropertyExtractor] Starting AI extraction for: ${pdfResult.fileName}`,
  );

  if (pdfResult.textLength === 0) {
    throw new Error("No text content found in PDF. Cannot perform extraction.");
  }

  const genAI = getGeminiClient();

  // Use gemini-1.5-flash for speed and large context
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      // Force JSON output
      responseMimeType: "application/json",
      temperature: 0.1, // Low temp = more deterministic, factual extraction
      topP: 0.8,
      topK: 40,
    },
  });

  const prompt = buildExtractionPrompt(pdfResult);

  console.log(
    `[PropertyExtractor] Sending ${prompt.length} chars to Gemini...`,
  );

  let responseText = "";

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    responseText = response.text();
  } catch (geminiError: any) {
    if (geminiError.message?.includes("SAFETY")) {
      throw new Error(
        "Content was blocked by Gemini safety filters. Please check the PDF content.",
      );
    }

    console.log("[Gemini Raw Error]", {
      message: geminiError.message,
      status: geminiError.status,
      statusText: geminiError.statusText,
      errorDetails: geminiError.errorDetails, // ← This tells you exactly which limit
    });

    if (
      geminiError.message?.includes("quota") ||
      geminiError.message?.includes("429")
    ) {
      throw new Error("Gemini API quota exceeded. Please try again later.");
    }
    throw new Error(`Gemini API error: ${geminiError.message}`);
  }

  // ─── Parse & Validate Response ───────────────────────────────────────────────
  let parsed: unknown;

  try {
    parsed = JSON.parse(responseText);
  } catch {
    console.error(
      "[PropertyExtractor] Gemini returned invalid JSON:",
      responseText.substring(0, 500),
    );

    throw new Error("AI returned invalid JSON. Please try again.");
  }

  // ─── Zod Validation ──────────────────────────────────────────────────────────
  const validated = PropertyDetailsSchema.safeParse(parsed);

  if (!validated.success) {
    console.error(
      "[PropertyExtractor] Zod validation failed:",
      validated.error.flatten(),
    );
    // Attempt partial recovery — return raw parsed with defaults
    return applyDefaults(parsed as Partial<PropertyDetails>, pdfResult);
  }

  console.log(
    `[PropertyExtractor] Extraction successful. Confidence: ${validated.data.confidence}`,
  );

  return validated.data;
}

// ─── Prompt Builder ───────────────────────────────────────────────────────────
function buildExtractionPrompt(pdfResult: PDFExtractionResult): string {
  return `
You are an expert real estate data extraction AI. Your job is to extract structured property information from a real estate brochure text.

This data will be used by an AI sales agent to qualify leads over phone calls. So accuracy is critical — especially pricing, location, configurations, and qualification criteria.

## INSTRUCTIONS:
1. Extract ONLY information explicitly present in the text
2. Use null for any field not found — do NOT hallucinate or guess
3. For prices: convert to numeric values in INR (e.g., "45 Lakhs" → 4500000, "1.2 Crore" → 12000000)
4. For configurations: normalize to standard format (e.g., "2 BHK", "3 BHK", "Studio")
5. For qualificationCriteria.keyQualifyingQuestions: generate 5-7 smart questions an AI agent should ask to qualify a lead for THIS specific property
6. Confidence score: 0.0 to 1.0 — how complete was the extracted data (1.0 = all fields found)
7. Return ONLY valid JSON matching the schema below — no markdown, no explanation

## OUTPUT JSON SCHEMA:
{
  "projectName": "string | null",
  "developerName": "string | null",
  "reraNumber": "string | null",
  "projectWebsite": "string | null",
  "contactNumber": "string | null",
  "location": {
    "city": "string | null",
    "area": "string | null",
    "state": "string | null",
    "landmark": "string | null",
    "fullAddress": "string | null"
  },
  "propertyTypes": ["array of strings like Apartment, Villa, Plot"],
  "configurations": ["array like 1 BHK, 2 BHK, 3 BHK"],
  "totalUnits": "number | null",
  "totalTowers": "number | null",
  "totalFloors": "number | null",
  "sizeRange": {
    "min": "number | null",
    "max": "number | null",
    "unit": "sqft | sqm | sqyd | cent | acre | null"
  },
  "pricing": {
    "startingPrice": "number in INR | null",
    "maxPrice": "number in INR | null",
    "pricePerSqft": "number in INR | null",
    "currency": "INR",
    "priceLabel": "original price string from brochure | null"
  },
  "paymentPlan": "string | null",
  "bankApprovals": ["array of bank names"],
  "maintenanceCharge": "string | null",
  "possessionDate": "string | null",
  "launchDate": "string | null",
  "constructionStatus": "pre-launch | under-construction | ready-to-move | completed | unknown",
  "amenities": ["array of amenity strings"],
  "specifications": ["array of flat specification strings"],
  "nearbyInfrastructure": ["schools, hospitals, metro stations, malls near project"],
  "usps": ["top unique selling points for this project"],
  "qualificationCriteria": {
    "minimumBudget": "number in INR | null",
    "maximumBudget": "number in INR | null",
    "targetBuyerProfile": "string describing ideal buyer | null",
    "preferredLocations": ["cities/areas target buyers likely come from"],
    "investmentType": ["end-use | investment | nri | commercial"],
    "keyQualifyingQuestions": [
      "Question 1 the AI agent should ask",
      "Question 2...",
      "... up to 7 questions"
    ]
  },
  "confidence": 0.0,
  "extractionWarnings": ["list any important fields that were missing or unclear"],
  "rawTextLength": ${pdfResult.textLength}
}

## QUALIFYING QUESTIONS GUIDANCE:
Generate questions that help determine if a lead is genuinely interested and financially capable. Examples of good questions:
- Budget-related: "What is your budget range for this investment?"
- Timeline: "Are you looking to move in immediately or is this a future investment?"
- Intent: "Are you buying for personal use or as an investment?"
- Location match: "Are you familiar with the [area name] locality?"
- Configuration preference: "How many bedrooms are you looking for?"
- Financial readiness: "Have you arranged financing or are you looking for home loan assistance?"
- Decision making: "Are you the sole decision maker for this purchase?"

## REAL ESTATE BROCHURE TEXT:
---
${pdfResult.rawText}
---

Return ONLY the JSON object. No markdown code blocks. No explanation text.
`.trim();
}

// ─── Fallback defaults if Zod validation fails ────────────────────────────────
function applyDefaults(
  partial: Partial<PropertyDetails>,
  pdfResult: PDFExtractionResult,
): PropertyDetails {
  console.warn(
    "[PropertyExtractor] Applying defaults due to validation failure",
  );

  return {
    projectName: partial.projectName ?? null,
    developerName: partial.developerName ?? null,
    reraNumber: partial.reraNumber ?? null,
    projectWebsite: partial.projectWebsite ?? null,
    contactNumber: partial.contactNumber ?? null,
    location: partial.location ?? {
      city: null,
      area: null,
      state: null,
      landmark: null,
      fullAddress: null,
    },
    propertyTypes: partial.propertyTypes ?? [],
    configurations: partial.configurations ?? [],
    totalUnits: partial.totalUnits ?? null,
    totalTowers: partial.totalTowers ?? null,
    totalFloors: partial.totalFloors ?? null,
    sizeRange: partial.sizeRange ?? { min: null, max: null, unit: null },
    pricing: partial.pricing ?? {
      startingPrice: null,
      maxPrice: null,
      pricePerSqft: null,
      currency: "INR",
      priceLabel: null,
    },
    paymentPlan: partial.paymentPlan ?? null,
    bankApprovals: partial.bankApprovals ?? [],
    maintenanceCharge: partial.maintenanceCharge ?? null,
    possessionDate: partial.possessionDate ?? null,
    launchDate: partial.launchDate ?? null,
    constructionStatus: partial.constructionStatus ?? "unknown",
    amenities: partial.amenities ?? [],
    specifications: partial.specifications ?? [],
    nearbyInfrastructure: partial.nearbyInfrastructure ?? [],
    usps: partial.usps ?? [],
    qualificationCriteria: partial.qualificationCriteria ?? {
      minimumBudget: null,
      maximumBudget: null,
      targetBuyerProfile: null,
      preferredLocations: [],
      investmentType: [],
      keyQualifyingQuestions: [],
    },
    confidence: partial.confidence ?? 0,
    extractionWarnings: [
      ...(partial.extractionWarnings ?? []),
      "Validation failed — some fields may be missing or incorrectly typed",
    ],
    rawTextLength: pdfResult.textLength,
  };
}
