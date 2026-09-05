import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import type { RechargeRepository } from "../interfaces/recharge-repository.interface";
import { RechargeNotFoundError } from "../../domain/errors/payment.errors";
import type { OrderStatusResponse } from "../dto/payment.dto";

export class GetOrderStatusUseCase {
  constructor(
    private readonly rechargeRepo: RechargeRepository,
    private readonly payments: IPaymentProvider,
  ) {}

  async execute(input: {
    tenantId: string;
    orderId: string;
  }): Promise<OrderStatusResponse> {
    const recharge = await this.rechargeRepo.findByRazorpayOrderId(
      input.orderId,
    );
    if (!recharge || recharge.tenantId !== input.tenantId) {
      throw new RechargeNotFoundError();
    }

    const payments = await this.payments.getOrderPayments(input.orderId);
    return { orderId: input.orderId, payments };
  }
}
