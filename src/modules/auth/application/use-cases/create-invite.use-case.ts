import { env } from "../../../../shared/config/env";
import type {
  CreateInviteInput,
  CreateInviteOutput,
} from "../dto/invite.dto";
import { TokenService } from "../interfaces/token-service.interface";

const INVITE_EXPIRY_HOURS = 168; // 7 days

export class CreateInviteUseCase {
  constructor(private readonly tokenService: TokenService) {}

  execute(input: CreateInviteInput): CreateInviteOutput {
    const inviteToken = this.tokenService.generateInviteToken(
      input.tenantId,
      input.role,
      input.email,
      input.inviterId,
    );

    const inviteUrl = `${env.frontendUrl}/register?invite=${inviteToken}`;

    const expiresAt = new Date(
      Date.now() + INVITE_EXPIRY_HOURS * 60 * 60 * 1000,
    );

    return {
      inviteToken,
      inviteUrl,
      expiresAt: expiresAt.toISOString(),
    };
  }
}