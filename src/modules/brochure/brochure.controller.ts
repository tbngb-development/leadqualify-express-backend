// src/modules/brochure/brochure.controller.ts — FULL REPLACE

import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../../middleware/auth";
import { getParam } from "../../utils/paramHelper";
import brochureService from "./brochure.service";
import { SaveBrochureSchema, UpdateBrochureSchema } from "./brochure.types";
import { cleanupUploadedFile } from "../../middleware/upload";
import prisma from "../../config/database";

// ─── POST /api/brochure/extract ───────────────────────────────────────────────
// Upload PDF → extract → return structured data (does NOT save to DB)
export const extract = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const filePath = req.file?.path;

  try {
    if (!req.file || !filePath) {
      res.status(400).json({
        success: false,
        error: "PDF file is required",
      });
      return;
    }

    const fileSizeMB = (req.file.size / (1024 * 1024)).toFixed(2);
    console.log(
      `[BrochureController] Received: ${req.file.originalname} | ${fileSizeMB}MB`,
    );

    const result = await brochureService.extract(
      filePath,
      req.file.originalname,
      fileSizeMB,
    );

    res.status(200).json({
      success: true,
      message: "Brochure extracted successfully",
      data: result,
    });
  } catch (error: any) {
    // File cleanup is handled inside service.extract()
    // but if it threw before reaching cleanup, do it here
    if (filePath) cleanupUploadedFile(filePath);

    console.error(`[BrochureController] Error:`, error.message);

    // Map known error types to proper HTTP status codes
    if (error.message?.includes("No text content")) {
      res.status(422).json({
        success: false,
        message: error.message,
        error: "UNPROCESSABLE_PDF",
      });
      return;
    }

    if (error.message?.includes("quota") || error.message?.includes("QUOTA")) {
      res.status(503).json({
        success: false,
        message: error.message,
        error: "AI_QUOTA_EXCEEDED",
      });
      return;
    }

    next(error);
  }
};

// ─── POST /api/brochure/save ──────────────────────────────────────────────────
// Save confirmed (user-reviewed) extracted data to DB
export const save = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const parsed = SaveBrochureSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: "Invalid brochure data",
        details: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const brochure = await brochureService.save(
      req.user!.tenantId,
      parsed.data,
    );

    res.status(201).json({
      success: true,
      message: "Brochure saved successfully",
      data: { brochureId: brochure.id, brochure },
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET /api/brochure ────────────────────────────────────────────────────────
export const list = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await brochureService.list(req.user!.tenantId);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// ─── GET /api/brochure/:id ────────────────────────────────────────────────────
export const get = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await brochureService.get(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error: any) {
    if (error.message === "Brochure not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── PATCH /api/brochure/:id ──────────────────────────────────────────────────
export const update = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const parsed = UpdateBrochureSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: "Invalid update data",
        details: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const data = await brochureService.update(
      req.user!.tenantId,
      id,
      parsed.data,
    );

    res.json({
      success: true,
      message: "Brochure updated successfully",
      data,
    });
  } catch (error: any) {
    if (error.message === "Brochure not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

// ─── DELETE /api/brochure/:id ─────────────────────────────────────────────────
export const remove = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = getParam(req.params["id"]);
    const data = await brochureService.delete(req.user!.tenantId, id);
    res.json({ success: true, data });
  } catch (error: any) {
    if (error.message === "Brochure not found") {
      res.status(404).json({ success: false, error: error.message });
      return;
    }
    if (error.message?.includes("Cannot delete")) {
      res.status(409).json({ success: false, error: error.message });
      return;
    }
    next(error);
  }
};

export const getPublicBrochure = async (req: Request, res: Response) => {
  try {
    const id = getParam(req.params["id"]);

    const brochure = await prisma.brochure.findUnique({
      where: { id },
    });

    if (!brochure) {
      return res.status(404).json({
        success: false,
        error: "Brochure not found",
      });
    }

    if (!brochure.isConfirmed) {
      return res.status(404).json({
        success: false,
        error: "Brochure data not yet confirmed",
      });
    }

    // Return clean, LLM-friendly response
    return res.json({
      success: true,
      data: {
        project_name: brochure.projectName,
        city: brochure.city,
        area: brochure.area,
        developer: brochure.developerName || "Not specified",
        property_type: brochure.propertyTypes || "Residential",
        status: brochure.constructionStatus || "Under Construction",
        configurations: brochure.configurations,
        starting_price: brochure.startingPrice,
        price_unit: "INR",
        amenities: brochure.amenities,
        total_units: brochure.totalUnits || null,
        available_units: brochure.sizeUnit || null,
        possession_date: brochure.possessionDate || null,
        rera_number: brochure.reraNumber || null,
        specifications: brochure.specifications || null,
      },
    });
  } catch (error) {
    console.error("Public brochure fetch error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch brochure data",
    });
  }
};
