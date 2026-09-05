import crypto from "crypto";
import { env } from "../../../../shared/config/env";
import type { InviteRepository } from "../interfaces/invite-repository.interface";
import type { IEmailService } from "../../../../shared/config/external/email/email.interface";
import { inviteTenantEmailHtml } from "../../../../shared/config/external/email/templates/invite-tenant.template";
import {
  InviteNotFoundError,
  InviteAlreadyAcceptedError,
} from "../../domain/errors/invite.errors";
import { toOwnerInviteResponse } from "../mappers/invite.mapper";

export class ResendOwnerInviteUseCase {
  constructor(
    private readonly inviteRepo: InviteRepository,
    private readonly email: IEmailService,
  ) {}

  async execute(id: string) {
    const invite = await this.inviteRepo.findById(id);
    if (!invite) throw new InviteNotFoundError();
    if (invite.status === "ACCEPTED") throw new InviteAlreadyAcceptedError();

    const newToken = crypto.randomUUID();
    const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const updated = await this.inviteRepo.bumpResend(
      id,
      newToken,
      newExpiresAt,
    );
    const inviteUrl = `${env.frontendUrl}/register?ownerInvite=${newToken}`;

    await this.email.send({
      to: updated.email,
      subject: `Reminder: Invite to ${updated.tenantName}`,
      html: inviteTenantEmailHtml({
        tenantName: updated.tenantName,
        planName: updated.plan.name,
        inviteUrl,
        expiresAt: newExpiresAt.toISOString(),
      }),
    });

    return toOwnerInviteResponse(updated, inviteUrl);
  }
}
