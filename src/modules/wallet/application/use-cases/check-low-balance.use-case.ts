import prisma from "../../../../shared/config/database/prisma";
import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { IEmailService } from "../../../../shared/config/external/email/email.interface";
import { lowBalanceEmailHtml } from "../../../../shared/config/external/email/templates/low-balance.template";

export class CheckLowBalanceUseCase {
  constructor(
    private readonly walletRepo: WalletRepository,
    private readonly email: IEmailService,
  ) {}

  async execute(input: { tenantId: string }): Promise<void> {
    const wallet = await this.walletRepo.findByTenantId(input.tenantId);
    if (!wallet) return;

    const threshold = wallet.lowBalanceThreshold ?? 10000;
    if (wallet.balance >= threshold) return;
    if (wallet.lowBalanceAlertSent) return;

    const tenant = await prisma.tenant.findUnique({
      where: { id: input.tenantId },
      select: { email: true, name: true },
    });
    if (!tenant) return;

    await this.email.send({
      to: tenant.email,
      subject: `Low wallet balance — ${tenant.name}`,
      html: lowBalanceEmailHtml({
        tenantName: tenant.name,
        balancePaisa: wallet.balance,
        thresholdPaisa: threshold,
      }),
    });

    await this.walletRepo.markLowBalanceAlertSent(input.tenantId, true);
  }
}
