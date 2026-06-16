import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { list, get, getTranscript } from "./call.controller";

const router = Router();

router.use(authenticate);

router.get("/", list);
router.get("/:id", get);
router.get("/:id/transcript", getTranscript);

export default router;