import type { Request, Response, NextFunction } from "express";

import { AuthMapper } from "./auth.mapper";
import { sendSuccess } from "../../../shared/utils/response";
import { env } from "../../../shared/config/env";
import { HttpStatus } from "../../../shared/constants/http-status";
import { AuthMessages } from "../../../shared/constants/messages";
import { UnauthorizedError } from "../../../shared/errors/unauthorized.error";
import type {
  RegisterTenantOwnerBody,
  LoginBody,
  SelectTenantBody,
  RefreshTokensBody,
  LogoutBody,
  CreateInviteBody,
  AcceptInviteBody,
  AdminLoginBody,
} from "./auth.schema";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { RegisterTenantOwnerUseCase } from "../application/use-cases/register-tenant-owner.use-case";
import { LoginUseCase } from "../application/use-cases/login.use-case";
import { SelectTenantUseCase } from "../application/use-cases/select-tenant.use-case";
import { RefreshTokensUseCase } from "../application/use-cases/refresh-tokens.use-case";
import { GetProfileUseCase } from "../application/use-cases/get-profile.use-case";
import { CreateInviteUseCase } from "../application/use-cases/create-invite.use-case";
import { AcceptInviteUseCase } from "../application/use-cases/accept-invite.use-case";
import { LogoutUseCase } from "../application/use-cases/logout.use-case";

export class AuthController {
  constructor(
    private readonly registerTenantOwnerUseCase: RegisterTenantOwnerUseCase,
    private readonly loginUseCase: LoginUseCase,
    private readonly selectTenantUseCase: SelectTenantUseCase,
    private readonly refreshTokensUseCase: RefreshTokensUseCase,
    private readonly getProfileUseCase: GetProfileUseCase,
    private readonly createInviteUseCase: CreateInviteUseCase,
    private readonly acceptInviteUseCase: AcceptInviteUseCase,
    private readonly logoutUseCase: LogoutUseCase,
  ) {}

  register = async (
    req: Request<unknown, unknown, RegisterTenantOwnerBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const output = await this.registerTenantOwnerUseCase.execute(req.body);

      this.setTokenCookies(res, {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        accessTokenExpiresIn: output.accessTokenExpiresIn,
        refreshTokenExpiresIn: output.refreshTokenExpiresIn,
      });

      sendSuccess(
        res,
        AuthMapper.toRegisterResponse(output),
        HttpStatus.CREATED,
      );
    } catch (err) {
      next(err);
    }
  };

  login = async (
    req: Request<unknown, unknown, LoginBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const output = await this.loginUseCase.execute(req.body);

      // Only set cookies if authentication completed (no tenant selection step needed)
      if (output.accessToken && output.refreshToken) {
        this.setTokenCookies(res, {
          accessToken: output.accessToken,
          refreshToken: output.refreshToken,
          accessTokenExpiresIn: output.accessTokenExpiresIn ?? 900,
          refreshTokenExpiresIn: output.refreshTokenExpiresIn ?? 604800,
        });
      }

      sendSuccess(res, AuthMapper.toLoginResponse(output), HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };

  adminLogin = async (
    req: Request<unknown, unknown, AdminLoginBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const output = await this.loginUseCase.execute(req.body);

      if (!output.user.isPlatformAdmin) {
        throw new UnauthorizedError(AuthMessages.NOT_PLATFORM_ADMIN);
      }

      if (output.accessToken && output.refreshToken) {
        this.setTokenCookies(res, {
          accessToken: output.accessToken,
          refreshToken: output.refreshToken,
          accessTokenExpiresIn: output.accessTokenExpiresIn ?? 900,
          refreshTokenExpiresIn: output.refreshTokenExpiresIn ?? 604800,
        });
      }

      sendSuccess(res, AuthMapper.toLoginResponse(output), HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };

  selectTenant = async (
    req: Request<unknown, unknown, SelectTenantBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const authReq = req as AuthRequest;
      const output = await this.selectTenantUseCase.execute({
        userId: authReq.user.userId,
        tenantId: req.body.tenantId,
      });

      this.setTokenCookies(res, {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        accessTokenExpiresIn: output.accessTokenExpiresIn,
        refreshTokenExpiresIn: output.refreshTokenExpiresIn,
      });

      sendSuccess(
        res,
        AuthMapper.toSelectTenantResponse(output),
        HttpStatus.OK,
      );
    } catch (err) {
      next(err);
    }
  };

  refresh = async (
    req: Request<unknown, unknown, Partial<RefreshTokensBody>>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Pull refresh token from body or from cookie fallback
      let refreshToken = req.body.refreshToken;
      if (!refreshToken && req.cookies && req.cookies.refresh_token) {
        refreshToken = req.cookies.refresh_token as string;
      }

      if (!refreshToken) {
        throw new UnauthorizedError(AuthMessages.REFRESH_TOKEN_INVALID);
      }

      const output = await this.refreshTokensUseCase.execute({ refreshToken });

      this.setTokenCookies(res, {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        accessTokenExpiresIn: output.accessTokenExpiresIn,
        refreshTokenExpiresIn: output.refreshTokenExpiresIn,
      });

      sendSuccess(res, AuthMapper.toRefreshResponse(output), HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };

  profile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const authReq = req as AuthRequest;
      const output = await this.getProfileUseCase.execute(authReq.user.userId);
      sendSuccess(res, AuthMapper.toProfileResponse(output), HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };

  createInvite = async (
    req: Request<unknown, unknown, CreateInviteBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const authReq = req as AuthRequest;
      const context = authReq.user as TenantAuthContext;

      const output = this.createInviteUseCase.execute({
        tenantId: context.tenantId,
        email: req.body.email,
        role: req.body.role,
        inviterId: context.userId,
      });

      sendSuccess(res, AuthMapper.toInviteResponse(output), HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  acceptInvite = async (
    req: Request<unknown, unknown, AcceptInviteBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const output = await this.acceptInviteUseCase.execute(req.body);

      this.setTokenCookies(res, {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        accessTokenExpiresIn: output.accessTokenExpiresIn,
        refreshTokenExpiresIn: output.refreshTokenExpiresIn,
      });

      sendSuccess(
        res,
        AuthMapper.toAcceptInviteResponse(output),
        HttpStatus.CREATED,
      );
    } catch (err) {
      next(err);
    }
  };

  logout = async (
    req: Request<unknown, unknown, Partial<LogoutBody>>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      let refreshToken = req.body.refreshToken;
      if (!refreshToken && req.cookies && req.cookies.refresh_token) {
        refreshToken = req.cookies.refresh_token as string;
      }

      if (refreshToken) {
        await this.logoutUseCase.execute({ refreshToken });
      }

      this.clearTokenCookies(res);

      sendSuccess(res, { message: AuthMessages.LOGOUT_SUCCESS }, HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };

  // ── Cookie Helpers ────────────────────────────────────────────────────────

  private setTokenCookies(
    res: Response,
    tokens: {
      accessToken: string;
      refreshToken: string;
      accessTokenExpiresIn: number;
      refreshTokenExpiresIn: number;
    },
  ): void {
    const isProduction = env.nodeEnv === "production";

    // Access Token Cookie
    res.cookie("access_token", tokens.accessToken, {
      httpOnly: true,
      secure: isProduction, // Uses secure SSL connection only in production
      sameSite: isProduction ? "none" : "lax", // Lax local, None cross-origin production
      maxAge: tokens.accessTokenExpiresIn * 1000,
      path: "/",
    });

    // Refresh Token Cookie
    res.cookie("refresh_token", tokens.refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: tokens.refreshTokenExpiresIn * 1000,
      path: "/",
    });
  }

  private clearTokenCookies(res: Response): void {
    const isProduction = env.nodeEnv === "production";

    res.clearCookie("access_token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });

    res.clearCookie("refresh_token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
  }
}
