// src/modules/brochure/brochure.types.ts — FULL REPLACE

import { z } from "zod";

// ─── Save/Confirm Request Body ────────────────────────────────────────────────
// This is what the frontend sends after the user reviews and edits extracted data

export const SaveBrochureSchema = z.object({
  // PDF Meta (comes from extraction, not editable)
  originalFileName: z.string(),
  fileSizeMB:       z.string(),
  pageCount:        z.number(),
  rawTextLength:    z.number(),

  // Core Identity
  projectName:    z.string().nullable().optional(),
  developerName:  z.string().nullable().optional(),
  reraNumber:     z.string().nullable().optional(),
  projectWebsite: z.string().nullable().optional(),
  contactNumber:  z.string().nullable().optional(),

  // Location
  city:        z.string().nullable().optional(),
  area:        z.string().nullable().optional(),
  state:       z.string().nullable().optional(),
  landmark:    z.string().nullable().optional(),
  fullAddress: z.string().nullable().optional(),

  // Property Specs
  propertyTypes:  z.array(z.string()).default([]),
  configurations: z.array(z.string()).default([]),
  totalUnits:     z.number().nullable().optional(),
  totalTowers:    z.number().nullable().optional(),
  totalFloors:    z.number().nullable().optional(),
  sizeMin:        z.number().nullable().optional(),
  sizeMax:        z.number().nullable().optional(),
  sizeUnit:       z.string().nullable().optional(),

  // Financials
  startingPrice:    z.number().nullable().optional(),
  maxPrice:         z.number().nullable().optional(),
  pricePerSqft:     z.number().nullable().optional(),
  priceLabel:       z.string().nullable().optional(),
  paymentPlan:      z.string().nullable().optional(),
  bankApprovals:    z.array(z.string()).default([]),
  maintenanceCharge: z.string().nullable().optional(),

  // Timeline
  possessionDate:     z.string().nullable().optional(),
  launchDate:         z.string().nullable().optional(),
  constructionStatus: z
    .enum(["pre-launch", "under-construction", "ready-to-move", "completed", "unknown"])
    .default("unknown"),

  // Features
  amenities:            z.array(z.string()).default([]),
  specifications:       z.array(z.string()).default([]),
  nearbyInfrastructure: z.array(z.string()).default([]),
  usps:                 z.array(z.string()).default([]),

  // Lead Qualification
  minimumBudget:          z.number().nullable().optional(),
  maximumBudget:          z.number().nullable().optional(),
  targetBuyerProfile:     z.string().nullable().optional(),
  preferredLocations:     z.array(z.string()).default([]),
  investmentType:         z.array(z.string()).default([]),
  keyQualifyingQuestions: z.array(z.string()).default([]),

  // Extraction Meta
  confidence:         z.number().min(0).max(1).default(0),
  extractionWarnings: z.array(z.string()).default([]),
});

export type SaveBrochureInput = z.infer<typeof SaveBrochureSchema>;

// ─── Update Request Body ──────────────────────────────────────────────────────
// All fields optional for PATCH
export const UpdateBrochureSchema = SaveBrochureSchema.partial().omit({
  originalFileName: true,
  fileSizeMB:       true,
  pageCount:        true,
  rawTextLength:    true,
});

export type UpdateBrochureInput = z.infer<typeof UpdateBrochureSchema>;

// ─── Brochure → VAPI Prompt Builder ──────────────────────────────────────────
// Shape used when injecting into call prompt
export interface BrochurePromptData {
  projectName:            string | null;
  developerName:          string | null;
  fullAddress:            string | null;
  configurations:         string[];
  sizeMin:                number | null;
  sizeMax:                number | null;
  sizeUnit:               string | null;
  startingPrice:          number | null;
  maxPrice:               number | null;
  possessionDate:         string | null;
  constructionStatus:     string | null;
  usps:                   string[];
  amenities:              string[];
  nearbyInfrastructure:   string[];
  targetBuyerProfile:     string | null;
  minimumBudget:          number | null;
  maximumBudget:          number | null;
  investmentType:         string[];
  keyQualifyingQuestions: string[];
}