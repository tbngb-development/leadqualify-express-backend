import type { InviteRepository } from "../interfaces/invite-repository.interface";
import type { PublicInviteView } from "../dto/invite.dto";
import { InviteInvalidError, InviteNotFoundError } from "../../domain/errors/invite.errors";

export class GetOwnerInviteUseCase {
  constructor(private readonly inviteRepo: InviteRepository) {}

  async execute(token: string): Promise<PublicInviteView> {
    const invite = await this.inviteRepo.findByToken(token);
    if (!invite) throw new InviteNotFoundError();

    if (invite.status === "REVOKED" || invite.status === "ACCEPTED") {
      throw new InviteInvalidError();
    }
    if (invite.expiresAt < new Date()) {
      throw new InviteInvalidError();
    }

    return {
      email: invite.email,
      tenantName: invite.tenantName,
      plan: {
        id: invite.plan.id,
        name: invite.plan.name,
        slug: invite.plan.slug,
        onboardingFee: invite.plan.onboardingFee,
      },
      expiresAt: invite.expiresAt.toISOString(),
      status: invite.status,
    };
  }
}