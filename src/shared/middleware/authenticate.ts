import type { Request, Response, NextFunction, RequestHandler } from "express";
import type { TokenService } from "../../modules/auth/application/interfaces/token-service.interface";
import type { AuthRepository } from "../../modules/auth/application/interfaces/auth-repository.interface";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { ForbiddenError } from "../errors/forbidden.error";
import { AuthMessages } from "../constants/messages";
import type {
  AuthContext,
  TenantAuthContext,
  AdminAuthContext,
  BaseAuthContext,
} from "../types";

export class AuthenticateMiddleware {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authRepository: AuthRepository,
  ) {}

  any(): RequestHandler {
    return async (req, _res, next) => {
      try {
        const context = await this.resolveContext(req);
        (req as Request & { user: AuthContext }).user = context;
        next();
      } catch (err) {
        next(err);
      }
    };
  }

  tenant(): RequestHandler {
    return async (req, _res, next) => {
      try {
        const context = await this.resolveContext(req);
        if (context.type !== "tenant") {
          throw new ForbiddenError(AuthMessages.MULTIPLE_TENANTS);
        }
        (req as Request & { user: TenantAuthContext }).user = context;
        next();
      } catch (err) {
        next(err);
      }
    };
  }

  admin(): RequestHandler {
    return async (req, _res, next) => {
      try {
        const context = await this.resolveContext(req);
        if (!context.isPlatformAdmin) {
          throw new ForbiddenError(AuthMessages.NOT_PLATFORM_ADMIN);
        }
        (req as Request & { user: AuthContext }).user = context;
        next();
      } catch (err) {
        next(err);
      }
    };
  }

  private async resolveContext(req: Request): Promise<AuthContext> {
    let token: string | undefined;

    // 1. Try reading the access token from HTTP-Only Cookies
    if (req.cookies && req.cookies.access_token) {
      token = req.cookies.access_token as string;
    }

    // 2. Fallback to standard Authorization Header if cookie is missing
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.slice(7);
      }
    }

    if (!token) {
      throw new UnauthorizedError(AuthMessages.TOKEN_NOT_PROVIDED);
    }

    const payload = this.tokenService.verifyAccessToken(token);

    // Verify user still exists in database
    const user = await this.authRepository.findUserById(payload.userId);
    if (!user) {
      throw new UnauthorizedError(AuthMessages.USER_NOT_FOUND);
    }

    // Tenant-scoped token payload evaluation
    if (
      payload.type === "tenant" &&
      payload.tenantId &&
      payload.membershipId &&
      payload.tenantRole
    ) {
      const membership = await this.authRepository.findMembership(
        payload.userId,
        payload.tenantId,
      );
      if (!membership) {
        throw new UnauthorizedError(AuthMessages.MEMBERSHIP_NOT_FOUND);
      }
      if (!membership.tenantActive) {
        throw new ForbiddenError(AuthMessages.TENANT_INACTIVE);
      }

      const context: TenantAuthContext = {
        type: "tenant",
        userId: user.id,
        email: user.email,
        membershipId: payload.membershipId,
        tenantId: payload.tenantId,
        tenantRole: payload.tenantRole,
        isPlatformAdmin: payload.isPlatformAdmin,
      };
      return context;
    }

    // Admin token
    if (payload.type === "admin" && payload.isPlatformAdmin) {
      const context: AdminAuthContext = {
        type: "admin",
        userId: user.id,
        email: user.email,
        isPlatformAdmin: true,
      };
      return context;
    }

    // Base token (user is authenticated but hasn't completed tenant selection yet)
    const context: BaseAuthContext = {
      type: "base",
      userId: user.id,
      email: user.email,
      isPlatformAdmin: payload.isPlatformAdmin,
    };
    return context;
  }
}
