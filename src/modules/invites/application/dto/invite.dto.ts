export interface CreateOwnerInviteInput {
  email: string;
  tenantName: string;
  planId: string;
  invitedBy: string;
  expiryDays?: number;
}

export interface OwnerInviteResponse {
  id: string;
  email: string;
  tenantName: string;
  planId: string;
  planName: string;
  status: string;
  expiresAt: string;
  resendCount: number;
  inviteUrl: string;
  createdAt: string;
}

export interface PublicInviteView {
  email: string;
  tenantName: string;
  plan: {
    id: string;
    name: string;
    slug: string;
    onboardingFee: number;
  };
  expiresAt: string;
  status: string;
}

export interface AcceptOwnerInviteInput {
  token: string;
  email: string;
  name: string;
  password: string;
}
