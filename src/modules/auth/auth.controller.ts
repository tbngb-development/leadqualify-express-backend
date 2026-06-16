import { Request, Response, NextFunction } from "express";
import authService from "./auth.service";
import { AuthRequest } from "../../middleware/auth";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tenantName, email, password, name } = req.body;

    if (!tenantName || !email || !password || !name) {
      res.status(400).json({
        success: false,
        error: "tenantName, email, password, name are required"
      });
      return;
    }

    const data = await authService.register({
      tenantName,
      email,
      password,
      name
    });

    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: "email and password are required"
      });
      return;
    }

    const data = await authService.login(email, password);

    res.json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

export const profile = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, error: "Unauthorized" });
      return;
    }

    const data = await authService.getProfile(req.user.id);

    res.json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};