import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { list, get, create, update, remove } from "./assistant.controller";

const router = Router();

router.use(authenticate);

router.get("/", list);
router.get("/:id", get);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;