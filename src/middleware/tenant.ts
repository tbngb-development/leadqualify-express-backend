import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth";
import prisma from "../config/database";

export const resolveTenant = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user?.tenantId) {
      res.status(401).json({ success: false, error: "Tenant not found" });
      return;
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: req.user.tenantId },
    });

    if (!tenant || !tenant.isActive) {
      res.status(403).json({ success: false, error: "Tenant is inactive" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};