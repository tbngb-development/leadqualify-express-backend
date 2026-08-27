import { Router } from "express";
import { getPublicBrochure } from "./brochure.controller";

const router = Router();

// No authenticate middleware — Bolna calls this directly
router.get("/:id", getPublicBrochure);

export default router;