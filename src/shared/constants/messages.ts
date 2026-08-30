export const AuthMessages = {
  // Success
  REGISTER_SUCCESS: "Registration successful",
  LOGIN_SUCCESS: "Login successful",
  TOKEN_REFRESHED: "Token refreshed successfully",
  TENANT_SELECTED: "Tenant selected successfully",
  INVITE_CREATED: "Invite created successfully",
  INVITE_ACCEPTED: "Invite accepted successfully",
  LOGOUT_SUCCESS: "Logged out successfully",

  // Errors
  INVALID_CREDENTIALS: "Invalid email or password",
  EMAIL_ALREADY_EXISTS: "A user with this email already exists",
  INVALID_TOKEN: "Invalid or expired token",
  TOKEN_NOT_PROVIDED: "Authentication token not provided",
  TOKEN_EXPIRED: "Token has expired",
  REFRESH_TOKEN_INVALID: "Invalid or revoked refresh token",
  REFRESH_TOKEN_EXPIRED: "Refresh token has expired",
  FORBIDDEN: "You do not have permission to perform this action",
  USER_NOT_FOUND: "User not found",
  TENANT_NOT_FOUND: "Tenant not found",
  MEMBERSHIP_NOT_FOUND: "Membership not found for this tenant",
  TENANT_INACTIVE: "Tenant account is inactive",
  ALREADY_MEMBER: "User is already a member of this tenant",
  INVALID_INVITE: "Invalid or expired invite token",
  INVITE_EMAIL_MISMATCH: "Invite email does not match your account email",
  NOT_PLATFORM_ADMIN: "Platform admin access required",
  MULTIPLE_TENANTS: "Multiple memberships found. Please select a tenant.",

  // Validation
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters",
  PASSWORD_TOO_LONG: "Password must not exceed 128 characters",
  PASSWORD_WEAK:
    "Password must contain at least one uppercase letter, one lowercase letter, and one number",
  NAME_REQUIRED: "Name is required",
  EMAIL_REQUIRED: "Email is required",
  TENANT_NAME_REQUIRED: "Tenant name is required",
} as const;

export const GeneralMessages = {
  INTERNAL_ERROR: "An unexpected error occurred",
  RESOURCE_CREATED: "Resource created successfully",
  RESOURCE_UPDATED: "Resource updated successfully",
  RESOURCE_DELETED: "Resource deleted successfully",
} as const;
