import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { list, get } from "./lead.controller";

const router = Router();

router.use(authenticate);

router.get("/", list);
router.get("/:id", get);

export default router;