import { Request, Response, NextFunction } from "express";
import prisma from "../config/database";

// Extends Express Request to carry tenant info after API key validation
export interface ApiKeyRequest extends Request {
  tenant?: {
    id: string;
    name: string;
    isActive: boolean;
  };
}

/**
 * Authenticates server-to-server requests using the Tenant's apiKey.
 *
 * Reads from:
 *   - Header: x-api-key
 *   - Fallback: query param ?apiKey= (for easy webhook testing)
 *
 * This is completely separate from the JWT auth middleware.
 * Existing JWT-protected routes are unaffected.
 */
export const apiKeyAuth = async (
  req: ApiKeyRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const apiKey =
      req.headers["x-api-key"] ?? (req.query.apiKey as string | undefined);

    console.debug("api key: ", apiKey);
    if (!apiKey || Array.isArray(apiKey)) {
      res.status(401).json({
        success: false,
        error: "Missing API key. Send it as 'x-api-key' header.",
      });
      return;
    }

    const tenant = await prisma.tenant.findUnique({
      where: { apiKey },
      select: { id: true, name: true, isActive: true },
    });

    if (!tenant) {
      res.status(401).json({
        success: false,
        error: "Invalid API key.",
      });
      return;
    }

    if (!tenant.isActive) {
      res.status(403).json({
        success: false,
        error: "Tenant account is inactive.",
      });
      return;
    }

    req.tenant = tenant;
    next();
  } catch (error) {
    console.error("[ApiKeyAuth] Error:", error);
    res.status(500).json({
      success: false,
      error: "Authentication failed.",
    });
  }
};
