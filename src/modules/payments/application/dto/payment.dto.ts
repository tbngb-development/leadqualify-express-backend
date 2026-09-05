export type RechargePurpose = "ONBOARDING" | "WALLET_TOPUP";

export interface CreateOrderInput {
  tenantId: string;
  purpose: RechargePurpose;
  amountPaisa?: number; // required for WALLET_TOPUP; ignored for ONBOARDING
}

export interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
  rechargeId: string;
  purpose: RechargePurpose;
}

export interface VerifyPaymentInput {
  tenantId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  alreadyProcessed: boolean;
  rechargeId: string;
  purpose: RechargePurpose;
}

export interface OrderStatusResponse {
  orderId: string;
  payments: Array<{
    id: string;
    status: string;
    amount: number;
    currency: string;
    method: string | null;
    captured: boolean;
    createdAt: number;
  }>;
}
