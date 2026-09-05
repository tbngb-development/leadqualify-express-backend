import type { PlanRepository } from "../../../plans/application/interfaces/plan-repository.interface";
import type { AutoAssignKeyUseCase } from "../../../bolna-api-keys/application/use-cases/auto-assign-key.use-case";
import type { IEmailService } from "../../../../shared/config/external/email/email.interface";
import type { WalletRepository } from "../../../wallet/application/interfaces/wallet-repository.interface";
import type { RechargeRepository } from "../interfaces/recharge-repository.interface";
import type { TenantEmailRepository } from "../interfaces/tenant-email-repository.interface";
import { paymentSuccessEmailHtml } from "../../../../shared/config/external/email/templates/payment-success.template";
import { RechargeNotFoundError } from "../../domain/errors/payment.errors";
import { PlanNotFoundError } from "../../../plans/domain/errors/plan.errors";

export interface CompletePaymentInput {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

export interface CompletePaymentResult {
  alreadyProcessed: boolean;
  rechargeId: string;
}

export class CompletePaymentUseCase {
  constructor(
    private readonly rechargeRepo: RechargeRepository,
    private readonly walletRepo: WalletRepository,
    private readonly planRepo: PlanRepository,
    private readonly autoAssignKey: AutoAssignKeyUseCase,
    private readonly email: IEmailService,
    private readonly tenantEmailRepo: TenantEmailRepository,
  ) {}

  async execute(input: CompletePaymentInput): Promise<CompletePaymentResult> {
    const recharge = await this.rechargeRepo.findByRazorpayOrderId(
      input.razorpayOrderId,
    );
    if (!recharge) throw new RechargeNotFoundError();

    if (recharge.status === "SUCCESS") {
      return { alreadyProcessed: true, rechargeId: recharge.id };
    }

    await this.rechargeRepo.markSuccess(
      recharge.id,
      input.razorpayPaymentId,
      input.razorpaySignature,
    );

    await this.walletRepo.ensureWallet(recharge.tenantId);

    if (recharge.purpose === "ONBOARDING") {
      await this.processOnboarding(recharge);
    } else {
      await this.processTopup(recharge);
    }

    await this.sendReceipt(
      recharge.tenantId,
      recharge.amount,
      recharge.purpose,
    );

    return { alreadyProcessed: false, rechargeId: recharge.id };
  }

  // ── private helpers ───────────────────────────────────────

  private async processOnboarding(recharge: {
    id: string;
    tenantId: string;
    planId: string | null;
  }) {
    if (!recharge.planId) return;

    const plan = await this.planRepo.findById(recharge.planId);
    if (!plan) throw new PlanNotFoundError(recharge.planId);

    const bonusExpiresAt = plan.bonusValidityDays
      ? new Date(Date.now() + plan.bonusValidityDays * 24 * 60 * 60 * 1000)
      : null;

    await this.planRepo.activatePlan(
      recharge.tenantId,
      recharge.planId,
      bonusExpiresAt,
    );

    try {
      await this.autoAssignKey.execute(recharge.tenantId);
    } catch (err) {
      console.error("[Payment] auto-assign Bolna key failed:", err);
    }

    if (plan.includedBalance > 0) {
      await this.walletRepo.credit({
        tenantId: recharge.tenantId,
        amount: plan.includedBalance,
        type: "BONUS",
        description: `Plan bonus — ${plan.name}`,
        referenceType: "PLAN_BONUS",
        referenceId: `${recharge.tenantId}:${recharge.planId}:${recharge.id}`,
        bonusExpiresAt,
      });
    }
  }

  private async processTopup(recharge: {
    id: string;
    tenantId: string;
    amount: number;
  }) {
    await this.walletRepo.credit({
      tenantId: recharge.tenantId,
      amount: recharge.amount,
      type: "CREDIT",
      description: "Wallet recharge",
      referenceType: "RECHARGE",
      referenceId: recharge.id,
    });
  }

  private async sendReceipt(tenantId: string, amount: number, purpose: string) {
    const email = await this.tenantEmailRepo.getEmailById(tenantId);
    if (!email) return;

    await this.email.send({
      to: email,
      subject: "Payment successful",
      html: paymentSuccessEmailHtml({
        tenantName: email.split("@")[0],
        amountPaisa: amount,
        kind: purpose,
      }),
    });
  }
}
