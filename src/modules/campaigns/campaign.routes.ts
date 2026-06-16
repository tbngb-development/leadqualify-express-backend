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

const router = Router();

// ─── Multer Config ────────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "text/csv" || file.originalname.endsWith(".csv")) {
      cb(null, true);
    } else {
      cb(new Error("Only CSV files are allowed"));
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

router.use(authenticate);

router.get("/", list);
router.get("/:id", get);
router.post("/", create);
router.post("/:id/upload", upload.single("file"), uploadLeads);
router.post("/:id/start", start);
router.post("/:id/pause", pause);
router.get("/:id/stats", stats);

export default router;