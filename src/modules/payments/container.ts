import { RazorpayProvider } from "../../shared/config/external/payments/razorpay.provider";
import type { IPaymentProvider } from "../../shared/config/external/payments/payment-provider.interface";
import type { WalletRepository } from "../wallet/application/interfaces/wallet-repository.interface";
import type { PlanRepository } from "../plans/application/interfaces/plan-repository.interface";
import type { AutoAssignKeyUseCase } from "../bolna-api-keys/application/use-cases/auto-assign-key.use-case";
import type { IEmailService } from "../../shared/config/external/email/email.interface";

import { CreateOrderUseCase } from "./application/use-cases/create-order.use-case";
import { VerifyPaymentUseCase } from "./application/use-cases/verify-payment.use-case";
import { CompletePaymentUseCase } from "./application/use-cases/complete-payment.use-case";
import { GetOrderStatusUseCase } from "./application/use-cases/get-order-status.use-case";
import { ProcessRazorpayWebhookUseCase } from "./application/use-cases/process-razorpay-webhook.use-case";

import { TenantPaymentController } from "./presentation/tenant-payment.controller";
import { RazorpayWebhookController } from "./presentation/razorpay-webhook.controller";

export interface PaymentModuleDeps {
  walletRepository: WalletRepository;
  planRepository: PlanRepository;
  autoAssignKey: AutoAssignKeyUseCase;
  email: IEmailService;
  paymentProvider?: IPaymentProvider; // optional override for tests
}

export interface PaymentModule {
  tenantController: TenantPaymentController;
  webhookController: RazorpayWebhookController;
  provider: IPaymentProvider;
  useCases: {
    completePayment: CompletePaymentUseCase;
  };
}

export function buildPaymentModule(deps: PaymentModuleDeps): PaymentModule {
  const provider = deps.paymentProvider ?? new RazorpayProvider();

  const completePayment = new CompletePaymentUseCase(
    deps.walletRepository,
    deps.planRepository,
    deps.autoAssignKey,
    deps.email,
  );

  const createOrder = new CreateOrderUseCase(
    deps.planRepository,
    deps.walletRepository,
    provider,
  );
  const verifyPayment = new VerifyPaymentUseCase(provider, completePayment);
  const getOrderStatus = new GetOrderStatusUseCase(provider);
  const processWebhook = new ProcessRazorpayWebhookUseCase(
    provider,
    completePayment,
  );

  return {
    provider,
    useCases: { completePayment },
    tenantController: new TenantPaymentController(
      createOrder,
      verifyPayment,
      getOrderStatus,
    ),
    webhookController: new RazorpayWebhookController(processWebhook),
  };
}
