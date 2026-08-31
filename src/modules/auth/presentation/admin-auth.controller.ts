import type { Request, Response, NextFunction } from "express";
import type { AdminLoginBody } from "./auth.schema";
import { AuthMapper } from "./auth.mapper";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import {
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN,
  getCookieSameSite,
} from "../../../shared/constants/cookies";
import { env } from "../../../shared/config/env";
import { UnauthorizedError } from "../../../shared/errors/unauthorized.error";
import { AuthMessages } from "../../../shared/constants/messages";
import { LoginUseCase } from "../application/use-cases/login.use-case";

const DEFAULT_ACCESS_EXPIRY = 900;
const DEFAULT_REFRESH_EXPIRY = 604800;

export class AdminAuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  login = async (
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
        const isProduction = env.nodeEnv === "production";
        const sameSite = getCookieSameSite(isProduction);

        res.cookie(COOKIE_ACCESS_TOKEN, output.accessToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite,
          maxAge: (output.accessTokenExpiresIn ?? DEFAULT_ACCESS_EXPIRY) * 1000,
          path: "/",
        });

        res.cookie(COOKIE_REFRESH_TOKEN, output.refreshToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite,
          maxAge:
            (output.refreshTokenExpiresIn ?? DEFAULT_REFRESH_EXPIRY) * 1000,
          path: "/",
        });
      }

      sendSuccess(res, AuthMapper.toLoginResponse(output), HttpStatus.OK);
    } catch (err) {
      next(err);
    }
  };
}
