# Auth Module Migration Log

**Status:** ✅ Completed
**Date:** 2026-08
**Scope:** Complete rewrite of auth module using Clean Architecture + new multi-tenant schema.

---

## Schema Changes

### Removed

- `User.role` (single-tenant role enum)
- `User.tenantId` (single-tenant FK)
- `Tenant.apiKey` (moved to dedicated `ApiKey` model)
- `enum Role { SUPER_ADMIN | ADMIN | USER }`

### Added

- `TenantUser` — join table for user↔tenant membership
- `PlatformAdmin` — separate platform-level admin table
- `ApiKey` — tenant-owned API keys (hashed)
- `RefreshToken` — hashed refresh tokens with rotation
- `enum TenantRole { OWNER | ADMIN | USER }`

### Retained

- All other domain models (Campaign, LeadBatch, Lead, Call, CallAnalysis, etc.)

---

## Route Changes

| Old Route                 | New Route                         | Notes                                    |
| ------------------------- | --------------------------------- | ---------------------------------------- |
| `POST /api/auth/register` | `POST /api/v1/auth/register`      | Creates tenant + owner                   |
| `POST /api/auth/login`    | `POST /api/v1/auth/login`         | Returns memberships or tokens            |
| `GET  /api/auth/profile`  | `GET  /api/v1/auth/profile`       | Requires access token                    |
| —                         | `POST /api/v1/auth/refresh`       | Rotate access + refresh                  |
| —                         | `POST /api/v1/auth/logout`        | Revokes refresh token                    |
| —                         | `POST /api/v1/auth/select-tenant` | For multi-tenant users                   |
| —                         | `POST /api/v1/auth/invites`       | Owner/Admin only                         |
| —                         | `POST /api/v1/auth/accept-invite` | Public — creates user or adds membership |
| —                         | `POST /api/v1/admin/auth/login`   | Platform admin login                     |
| —                         | `POST /api/v1/admin/auth/refresh` | Admin refresh                            |
| —                         | `POST /api/v1/admin/auth/logout`  | Admin logout                             |

---

## Token Strategy

### HTTP-Only Cookie Transport Configuration

To secure client sessions from Cross-Site Scripting (XSS) attacks, access tokens and refresh tokens are fully served via standard secure cookies:

- `access_token`: HTTP-Only cookie, scope: `/`, lifespan matching access configuration (`15m` default).
- `refresh_token`: HTTP-Only cookie, scope: `/`, lifespan matching configuration expiry (`7d` default).

A request is automatically analyzed for cookies. Standard headers (`Authorization: Bearer <token>`) continue to be evaluated fallback-style for external script/webhook executions.

#### CORS / Credentials Requirement

Cross-Origin Resource Sharing (CORS) configurations must maintain `credentials: true` on both the client (e.g. Axios `withCredentials: true`) and this API's backend instance to allow browser agents to securely read and set cookies.

---

## Response Contract Changes

### Old Login Response

```json
{
  "success": true,
  "data": {
    "token": "...",
    "user": { "id", "email", "name", "role" },
    "tenant": { "id", "name", "apiKey" }
  }
}

### Frontend Migration Checklist

 Update NEXT_PUBLIC_API_URL base path to include /v1
 Store accessToken + refreshToken separately (short + long-lived)
 Implement refresh flow on 401 → retry once
 Handle requiresTenantSelection: true — show tenant picker UI
 Update user.role → membership.role (from tenant-scoped calls)
 Update admin login to hit /api/v1/admin/auth/login
 Handle TenantAuthContext shape in response — no more user.tenantId/user.role at top level
 Add invite acceptance UI at /register?invite=<token>
```
