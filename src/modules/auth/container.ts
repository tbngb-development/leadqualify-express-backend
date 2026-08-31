import type { AuthRepository } from "./application/interfaces/auth-repository.interface";
import type { TokenService } from "./application/interfaces/token-service.interface";
import type { PasswordService } from "./application/interfaces/password-service.interface";
import { RegisterTenantOwnerUseCase } from "./application/use-cases/register-tenant-owner.use-case";
import { LoginUseCase } from "./application/use-cases/login.use-case";
import { SelectTenantUseCase } from "./application/use-cases/select-tenant.use-case";
import { RefreshTokensUseCase } from "./application/use-cases/refresh-tokens.use-case";
import { GetProfileUseCase } from "./application/use-cases/get-profile.use-case";
import { CreateInviteUseCase } from "./application/use-cases/create-invite.use-case";
import { AcceptInviteUseCase } from "./application/use-cases/accept-invite.use-case";
import { LogoutUseCase } from "./application/use-cases/logout.use-case";
import { TenantAuthController } from "./presentation/tenant-auth.controller";
import { AdminAuthController } from "./presentation/admin-auth.controller";

export interface AuthModule {
  tenantController: TenantAuthController;
  adminController: AdminAuthController;
}

export interface AuthModuleDeps {
  authRepository: AuthRepository;
  tokenService: TokenService;
  passwordService: PasswordService;
}

export function buildAuthModule(deps: AuthModuleDeps): AuthModule {
  const { authRepository, tokenService, passwordService } = deps;

  const loginUseCase = new LoginUseCase(
    authRepository,
    passwordService,
    tokenService,
  );

  return {
    tenantController: new TenantAuthController(
      new RegisterTenantOwnerUseCase(
        authRepository,
        passwordService,
        tokenService,
      ),
      loginUseCase,
      new SelectTenantUseCase(authRepository, tokenService),
      new RefreshTokensUseCase(authRepository, tokenService),
      new GetProfileUseCase(authRepository),
      new CreateInviteUseCase(tokenService),
      new AcceptInviteUseCase(authRepository, passwordService, tokenService),
      new LogoutUseCase(authRepository, tokenService),
    ),
    adminController: new AdminAuthController(loginUseCase),
  };
}
