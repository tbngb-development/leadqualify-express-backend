import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import type { PDFExtractionResult } from "./pdfExtractor";
import { AppError } from "../../../shared/errors";
import { HttpStatus } from "../../../shared/constants";

// ─── Zod Schema ───────────────────────────────────────────────────────────────
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
  priceLabel: z.string().nullable(),
});

const QualificationCriteriaSchema = z.object({
  minimumBudget: z.number().nullable(),
  maximumBudget: z.number().nullable(),
  targetBuyerProfile: z.string().nullable(),
  preferredLocations: z.array(z.string()),
  investmentType: z.array(z.string()),
  keyQualifyingQuestions: z.array(z.string()),
});

export const PropertyDetailsSchema = z.object({
  projectName: z.string().nullable(),
  developerName: z.string().nullable(),
  reraNumber: z.string().nullable(),
  projectWebsite: z.string().nullable(),
  contactNumber: z.string().nullable(),
  location: LocationSchema,
  propertyTypes: z.array(z.string()),
  configurations: z.array(z.string()),
  totalUnits: z.number().nullable(),
  totalTowers: z.number().nullable(),
  totalFloors: z.number().nullable(),
  sizeRange: SizeRangeSchema,
  pricing: PricingSchema,
  paymentPlan: z.string().nullable(),
  bankApprovals: z.array(z.string()),
  maintenanceCharge: z.string().nullable(),
  possessionDate: z.string().nullable(),
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
  amenities: z.array(z.string()),
  specifications: z.array(z.string()),
  nearbyInfrastructure: z.array(z.string()),
  usps: z.array(z.string()),
  qualificationCriteria: QualificationCriteriaSchema,
  confidence: z.number().min(0).max(1),
  extractionWarnings: z.array(z.string()),
  rawTextLength: z.number(),
});

export type PropertyDetails = z.infer<typeof PropertyDetailsSchema>;

// ─── Gemini Client ────────────────────────────────────────────────────────────
function getGeminiClient(): GoogleGenerativeAI {
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
  console.info(
    `[PropertyExtractor] Starting AI extraction for: ${pdfResult.fileName}`,
  );

  if (pdfResult.textLength === 0) {
    throw new Error("No text content found in PDF. Cannot perform extraction.");
  }

  const genAI = getGeminiClient();
  const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

  const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const prompt = buildExtractionPrompt(pdfResult);

  console.info(
    `[PropertyExtractor] Sending ${prompt.length} chars to Gemini...`,
  );

  // eslint-disable-next-line no-useless-assignment
  let responseText = "";

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    responseText = response.text();
  } catch (geminiError: unknown) {
    const error = geminiError as {
      message?: string;
      status?: number;
      statusText?: string;
      errorDetails?: unknown;
    };

    if (error.message?.includes("SAFETY")) {
      throw new AppError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Content was blocked by Gemini safety filters. Please check the PDF content.",
        "LLM_MODEL_BLOCKED_DUE_TO_SAFETY",
      );
    }

    console.error("[Gemini Raw Error]", {
      message: error.message,
      status: error.status,
      statusText: error.statusText,
      errorDetails: error.errorDetails,
    });

    if (error.message?.includes("quota") || error.message?.includes("429")) {
      throw new AppError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Gemini API quota exceeded. Please try again later.",
        "LLM_MODEL_DAILY_QUOTA_EXCEEDED",
      );
    }
    throw new AppError(
      HttpStatus.BAD_REQUEST,
      `Gemini API error: ${error.message}`,
      "LLM_MODEL_API_ERROR",
    );
  }

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

  const validated = PropertyDetailsSchema.safeParse(parsed);

  if (!validated.success) {
    console.error(
      "[PropertyExtractor] Zod validation failed:",
      validated.error.flatten(),
    );
    return applyDefaults(parsed as Partial<PropertyDetails>, pdfResult);
  }

  console.info(
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
