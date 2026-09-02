import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import type { CompletePaymentUseCase } from "./complete-payment.use-case";
import { InvalidSignatureError } from "../../domain/errors/payment.errors";

export interface WebhookInput {
  rawBody: string;
  signature: string;
}

export class ProcessRazorpayWebhookUseCase {
  constructor(
    private readonly payments: IPaymentProvider,
    private readonly completePayment: CompletePaymentUseCase,
  ) {}

  async execute(input: WebhookInput): Promise<{ handled: boolean }> {
    if (!this.payments.verifyWebhookSignature(input.rawBody, input.signature)) {
      throw new InvalidSignatureError();
    }

    let payload: any;
    try {
      payload = JSON.parse(input.rawBody);
    } catch {
      return { handled: false };
    }

    const event = payload?.event;
    if (event !== "payment.captured") return { handled: false };

    const paymentEntity = payload?.payload?.payment?.entity;
    if (!paymentEntity?.order_id || !paymentEntity?.id)
      return { handled: false };

    // Signature came from webhook secret, not order signature —
    // pass empty string; CompletePayment is idempotent on Recharge.status.
    await this.completePayment.execute({
      razorpayOrderId: paymentEntity.order_id,
      razorpayPaymentId: paymentEntity.id,
      razorpaySignature: paymentEntity?.acquirer_data?.rrn ?? "webhook",
    });

    return { handled: true };
  }
}
