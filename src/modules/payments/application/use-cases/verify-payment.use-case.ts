import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import type { CompletePaymentUseCase } from "./complete-payment.use-case";
import type { RechargeRepository } from "../interfaces/recharge-repository.interface";
import {
  InvalidSignatureError,
  RechargeNotFoundError,
} from "../../domain/errors/payment.errors";
import type {
  VerifyPaymentInput,
  VerifyPaymentResponse,
} from "../dto/payment.dto";

export class VerifyPaymentUseCase {
  constructor(
    private readonly payments: IPaymentProvider,
    private readonly rechargeRepo: RechargeRepository,
    private readonly completePayment: CompletePaymentUseCase,
  ) {}

  async execute(input: VerifyPaymentInput): Promise<VerifyPaymentResponse> {
    // 1. Signature verification first
    const valid = this.payments.verifySignature({
      orderId: input.razorpayOrderId,
      paymentId: input.razorpayPaymentId,
      signature: input.razorpaySignature,
    });
    if (!valid) throw new InvalidSignatureError();

    // 2. Tenant scoping
    const recharge = await this.rechargeRepo.findByRazorpayOrderId(
      input.razorpayOrderId,
    );
    if (!recharge || recharge.tenantId !== input.tenantId) {
      throw new RechargeNotFoundError();
    }

    // 3. Complete (idempotent)
    const result = await this.completePayment.execute({
      razorpayOrderId: input.razorpayOrderId,
      razorpayPaymentId: input.razorpayPaymentId,
      razorpaySignature: input.razorpaySignature,
    });

    return {
      success: true,
      alreadyProcessed: result.alreadyProcessed,
      rechargeId: result.rechargeId,
      purpose: recharge.purpose,
    };
  }
}
