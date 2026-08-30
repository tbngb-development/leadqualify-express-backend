import type { RegisterTenantOwnerOutput } from "../application/dto/register.dto";
import type { LoginOutput } from "../application/dto/login.dto";
import type { SelectTenantOutput } from "../application/dto/select-tenant.dto";
import type { RefreshTokensOutput } from "../application/dto/refresh.dto";
import type {
  CreateInviteOutput,
  AcceptInviteOutput,
} from "../application/dto/invite.dto";
import { ProfileOutput } from "../application/use-cases/get-profile.use-case";

// ── Response contract types ────────────────────────────────────────────────

export interface AuthTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
}

export interface RegisterResponse {
  tokens: AuthTokenResponse;
  user: RegisterTenantOwnerOutput["user"];
  tenant: RegisterTenantOwnerOutput["tenant"];
  membership: RegisterTenantOwnerOutput["membership"];
}

export interface LoginResponse {
  tokens: AuthTokenResponse | null;
  requiresTenantSelection: boolean;
  user: LoginOutput["user"];
  memberships: LoginOutput["memberships"];
}

export interface SelectTenantResponse {
  tokens: AuthTokenResponse;
  membership: SelectTenantOutput["membership"];
}

export interface RefreshResponse {
  tokens: AuthTokenResponse;
}

export interface ProfileResponse {
  user: ProfileOutput["user"];
  memberships: ProfileOutput["memberships"];
}

export interface InviteResponse {
  inviteToken: string;
  inviteUrl: string;
  expiresAt: string;
}

export interface AcceptInviteResponse {
  tokens: AuthTokenResponse;
  user: AcceptInviteOutput["user"];
  membership: AcceptInviteOutput["membership"];
}

// ── Mappers ────────────────────────────────────────────────────────────────

export class AuthMapper {
  static toRegisterResponse(
    output: RegisterTenantOwnerOutput,
  ): RegisterResponse {
    return {
      tokens: {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        expiresIn: output.accessTokenExpiresIn,
        refreshExpiresIn: output.refreshTokenExpiresIn,
      },
      user: output.user,
      tenant: output.tenant,
      membership: output.membership,
    };
  }

  static toLoginResponse(output: LoginOutput): LoginResponse {
    return {
      tokens:
        output.accessToken && output.refreshToken
          ? {
              accessToken: output.accessToken,
              refreshToken: output.refreshToken,
              expiresIn: output.accessTokenExpiresIn ?? 0,
              refreshExpiresIn: output.refreshTokenExpiresIn ?? 0,
            }
          : null,
      requiresTenantSelection: output.requiresTenantSelection,
      user: output.user,
      memberships: output.memberships,
    };
  }

  static toSelectTenantResponse(
    output: SelectTenantOutput,
  ): SelectTenantResponse {
    return {
      tokens: {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        expiresIn: output.accessTokenExpiresIn,
        refreshExpiresIn: output.refreshTokenExpiresIn,
      },
      membership: output.membership,
    };
  }

  static toRefreshResponse(output: RefreshTokensOutput): RefreshResponse {
    return {
      tokens: {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        expiresIn: output.accessTokenExpiresIn,
        refreshExpiresIn: output.refreshTokenExpiresIn,
      },
    };
  }

  static toProfileResponse(output: ProfileOutput): ProfileResponse {
    return {
      user: output.user,
      memberships: output.memberships,
    };
  }

  static toInviteResponse(output: CreateInviteOutput): InviteResponse {
    return {
      inviteToken: output.inviteToken,
      inviteUrl: output.inviteUrl,
      expiresAt: output.expiresAt,
    };
  }

  static toAcceptInviteResponse(
    output: AcceptInviteOutput,
  ): AcceptInviteResponse {
    return {
      tokens: {
        accessToken: output.accessToken,
        refreshToken: output.refreshToken,
        expiresIn: output.accessTokenExpiresIn,
        refreshExpiresIn: output.refreshTokenExpiresIn,
      },
      user: output.user,
      membership: output.membership,
    };
  }
}