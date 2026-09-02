import prisma from "../../../../shared/config/database/prisma";
import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import { RechargeNotFoundError } from "../../domain/errors/payment.errors";
import type { OrderStatusResponse } from "../dto/payment.dto";

export class GetOrderStatusUseCase {
  constructor(private readonly payments: IPaymentProvider) {}

  async execute(input: {
    tenantId: string;
    orderId: string;
  }): Promise<OrderStatusResponse> {
    // Tenant scoping — only allow viewing your own orders
    const recharge = await prisma.recharge.findUnique({
      where: { razorpayOrderId: input.orderId },
    });
    if (!recharge || recharge.tenantId !== input.tenantId) {
      throw new RechargeNotFoundError();
    }

    const payments = await this.payments.getOrderPayments(input.orderId);
    return { orderId: input.orderId, payments };
  }
}
