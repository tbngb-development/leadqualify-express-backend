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

    if (payload?.event !== "payment.captured") return { handled: false };

    const entity = payload?.payload?.payment?.entity;
    if (!entity?.order_id || !entity?.id) return { handled: false };

    await this.completePayment.execute({
      razorpayOrderId: entity.order_id,
      razorpayPaymentId: entity.id,
      razorpaySignature: entity?.acquirer_data?.rrn ?? "webhook",
    });

    return { handled: true };
  }
}
