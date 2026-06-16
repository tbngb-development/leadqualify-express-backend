import { Router, Response, NextFunction } from "express";
import { authenticate, authorize, AuthRequest } from "../../middleware/auth";
import prisma from "../../config/database";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";
import { getParam } from "../../utils/paramHelper";

const router = Router();

router.use(authenticate);

// ─── List Users ───────────────────────────────────────────────────────────────
router.get(
  "/",
  authorize("ADMIN", "SUPER_ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const users = await prisma.user.findMany({
        where: { tenantId: req.user!.tenantId },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      });

      res.json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  }
);

// ─── Create User ──────────────────────────────────────────────────────────────
router.post(
  "/",
  authorize("ADMIN", "SUPER_ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const { email, name, password, role = "USER" } = req.body;

      if (!email || !name || !password) {
        res
          .status(400)
          .json({ success: false, error: "email, name, password required" });
        return;
      }

      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        res.status(400).json({ success: false, error: "Email already exists" });
        return;
      }

      const hashed = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashed,
          role: role as Role,
          tenantId: req.user!.tenantId,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });

      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
);

// ─── Update User ──────────────────────────────────────────────────────────────
router.patch(
  "/:id",
  authorize("ADMIN", "SUPER_ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      // ✅ Fix — use getParam helper
      const id = getParam(req.params["id"]);
      const { name, role } = req.body;

      const user = await prisma.user.findFirst({
        where: { id, tenantId: req.user!.tenantId },
      });

      if (!user) {
        res.status(404).json({ success: false, error: "User not found" });
        return;
      }

      const updated = await prisma.user.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(role && { role: role as Role }),
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        },
      });

      res.json({ success: true, data: updated });
    } catch (error) {
      next(error);
    }
  }
);

// ─── Delete User ──────────────────────────────────────────────────────────────
router.delete(
  "/:id",
  authorize("ADMIN", "SUPER_ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      // ✅ Fix — use getParam helper
      const id = getParam(req.params["id"]);

      const user = await prisma.user.findFirst({
        where: { id, tenantId: req.user!.tenantId },
      });

      if (!user) {
        res.status(404).json({ success: false, error: "User not found" });
        return;
      }

      if (user.id === req.user!.id) {
        res
          .status(400)
          .json({ success: false, error: "Cannot delete yourself" });
        return;
      }

      await prisma.user.delete({ where: { id } });

      res.json({ success: true, data: null, message: "User deleted" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;