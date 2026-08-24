// src/modules/leads/lead.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { list, get, getStats } from "./lead.controller";

const router = Router();

router.use(authenticate);

router.get("/stats", getStats);   
router.get("/", list);
router.get("/:id", get);

export default router;