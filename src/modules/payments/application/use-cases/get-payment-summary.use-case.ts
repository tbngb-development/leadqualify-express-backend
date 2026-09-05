import type { RechargeRepository } from "../interfaces/recharge-repository.interface";
import type { PaymentSummary } from "../interfaces/recharge-repository.interface";

export class GetPaymentSummaryUseCase {
  constructor(private readonly rechargeRepo: RechargeRepository) {}

  async execute(): Promise<PaymentSummary> {
    return this.rechargeRepo.getSummary();
  }
}
