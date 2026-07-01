import { Router } from "express";
import multer from "multer";
import path from "path";
import { authenticate } from "../../middleware/auth";
import {
  list,
  get,
  create,
  uploadLeads,
  start,
  pause,
  stats,
} from "./campaign.controller";
import { leadsUpload } from "../../middleware/upload";

const router = Router();


router.use(authenticate);

router.get("/", list);
router.get("/:id", get);
router.post("/", create);
router.post("/:id/upload", leadsUpload.single("file"), uploadLeads);
router.post("/:id/start", start);
router.post("/:id/pause", pause);
router.get("/:id/stats", stats);

export default router;
