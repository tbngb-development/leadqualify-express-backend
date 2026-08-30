export interface RegisterTenantOwnerInput {
  tenantName: string;
  email: string;
  password: string;
  name: string;
}

export interface RegisterTenantOwnerOutput {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
  user: {
    id: string;
    email: string;
    name: string;
  };
  tenant: {
    id: string;
    name: string;
  };
  membership: {
    id: string;
    role: string;
  };
}