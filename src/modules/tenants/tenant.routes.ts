import { Router } from "express";
import { authenticate, authorize } from "../../middleware/auth";
import { list, get, update, stats } from "./tenant.controller";

const router = Router();

router.use(authenticate);
router.use(authorize("SUPER_ADMIN"));

router.get("/", list);
router.get("/:id", get);
router.patch("/:id", update);
router.get("/:id/stats", stats);

export default router;