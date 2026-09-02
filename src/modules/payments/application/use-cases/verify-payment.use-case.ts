import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import type { CompletePaymentUseCase } from "./complete-payment.use-case";
import { InvalidSignatureError } from "../../domain/errors/payment.errors";
import type {
  VerifyPaymentInput,
  VerifyPaymentResponse,
} from "../dto/payment.dto";
import prisma from "../../../../shared/config/database/prisma";
import { RechargeNotFoundError } from "../../domain/errors/payment.errors";

export class VerifyPaymentUseCase {
  constructor(
    private readonly payments: IPaymentProvider,
    private readonly completePayment: CompletePaymentUseCase,
  ) {}

  async execute(input: VerifyPaymentInput): Promise<VerifyPaymentResponse> {
    // 1. Signature verification MUST run first — reject even if already-paid
    const valid = this.payments.verifySignature({
      orderId: input.razorpayOrderId,
      paymentId: input.razorpayPaymentId,
      signature: input.razorpaySignature,
    });
    if (!valid) throw new InvalidSignatureError();

    // 2. Tenant scoping — reject cross-tenant verify attempts
    const recharge = await prisma.recharge.findUnique({
      where: { razorpayOrderId: input.razorpayOrderId },
    });
    if (!recharge || recharge.tenantId !== input.tenantId) {
      throw new RechargeNotFoundError();
    }

    // 3. Complete (idempotent inside CompletePaymentUseCase)
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
