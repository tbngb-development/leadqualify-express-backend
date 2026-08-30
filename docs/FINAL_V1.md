# V1 Backend System Reference — Complete API & Type Documentation

> **Version:** 1.0.0
> **Base URL:** `http://localhost:3000`
> **API Prefix:** `/api/v1/*` (tenant), `/api/v1/admin/*` (platform admin), `/webhooks/*` (public)
> **Auth:** HTTP-Only Cookies (`access_token`, `refresh_token`) + Bearer fallback
> **Architecture:** Modular Clean Architecture (Modular Monolith)

---

## Table of Contents

1. [Authentication Flow](#1-authentication-flow)
2. [Error Response Format](#2-error-response-format)
3. [Auth API](#3-auth-api)
4. [Campaigns API](#4-campaigns-api)
5. [Batches API](#5-batches-api)
6. [Leads API](#6-leads-api)
7. [Calls API](#7-calls-api)
8. [Assistants API](#8-assistants-api)
9. [Users API](#9-users-api)
10. [Dashboard API](#10-dashboard-api)
11. [Brochures API](#11-brochures-api)
12. [Tenants API (Admin)](#12-tenants-api-admin)
13. [Webhooks (Public)](#13-webhooks-public)
14. [Enums Reference](#14-enums-reference)
15. [Shared Types](#15-shared-types)

---

## 1. Authentication Flow

### Cookie-Based Auth

All auth tokens are delivered via **HTTP-Only cookies**. The frontend must set `withCredentials: true` on all Axios requests.

| Cookie          | Lifespan   | Purpose                           |
| --------------- | ---------- | --------------------------------- |
| `access_token`  | 15 minutes | Tenant-scoped JWT for API access  |
| `refresh_token` | 7 days     | Rotating token for access renewal |

### Login Flow

```
1. POST /api/v1/auth/login { email, password }
2. Response:
   - Single tenant → tokens set in cookies, requiresTenantSelection: false
   - Multiple tenants → requiresTenantSelection: true, tokens: null
3. If requiresTenantSelection:
   POST /api/v1/auth/select-tenant { tenantId }
   → Tenant-scoped tokens set in cookies
4. On 401 → POST /api/v1/auth/refresh (reads refresh_token from cookie)
   → New tokens set in cookies → retry original request
```

### Access Token Payload (decoded JWT)

```typescript
interface AccessTokenPayload {
  userId: string;
  membershipId: string | null;
  tenantId: string | null;
  tenantRole: "OWNER" | "ADMIN" | "USER" | null;
  isPlatformAdmin: boolean;
  type: "tenant" | "admin" | "base";
}
```

### Bearer Fallback

All authenticated endpoints also accept `Authorization: Bearer <access_token>` header for non-browser clients (Postman, mobile apps, scripts).

---

## 2. Error Response Format

All errors follow this consistent shape:

```typescript
interface ErrorResponse {
  success: false;
  error: string; // Human-readable message
  code: string; // Machine-readable error code
  details?: Array<{
    // Only for VALIDATION_ERROR (422)
    field: string;
    message: string;
  }>;
}
```

### Common Error Codes

| HTTP | Code                          | Meaning                                   |
| ---- | ----------------------------- | ----------------------------------------- |
| 400  | `UNAUTHORIZED`                | Invalid credentials or token              |
| 401  | `UNAUTHORIZED`                | Missing or expired token                  |
| 403  | `FORBIDDEN`                   | Insufficient permissions                  |
| 404  | `NOT_FOUND`                   | Resource not found                        |
| 409  | `CONFLICT`                    | Duplicate or state conflict               |
| 422  | `VALIDATION_ERROR`            | Input validation failed (has `details[]`) |
| 422  | `UNPROCESSABLE_PDF`           | PDF extraction failed                     |
| 502  | `BOLNA_BATCH_CREATION_FAILED` | External API failure                      |
| 503  | `AI_QUOTA_EXCEEDED`           | AI service quota hit                      |

---

## 3. Auth API

### POST `/api/v1/auth/register`

**Auth:** None (public)

**Request:**

```typescript
{
  tenantName: string; // 1-100 chars
  email: string; // valid email
  password: string; // min 8 chars, must have uppercase + lowercase + number
  name: string; // 1-100 chars
}
```

**Response (201):**

```typescript
{
  success: true;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number; // 900 (seconds)
      refreshExpiresIn: number; // 604800
    }
    user: {
      id: string;
      email: string;
      name: string;
    }
    tenant: {
      id: string;
      name: string;
    }
    membership: {
      id: string;
      role: "OWNER";
    }
  }
}
```

---

### POST `/api/v1/auth/login`

**Auth:** None (public)

**Request:**

```typescript
{
  email: string;
  password: string;
  tenantId?: string;    // optional — skip tenant selection if provided
}
```

**Response (200):**

```typescript
{
  success: true;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      refreshExpiresIn: number;
    } | null;           // null when requiresTenantSelection is true
    requiresTenantSelection: boolean;
    user: {
      id: string;
      email: string;
      name: string;
      isPlatformAdmin: boolean;
    };
    memberships: Array<{
      membershipId: string;
      tenantId: string;
      tenantName: string;
      role: "OWNER" | "ADMIN" | "USER";
    }>;
  };
}
```

---

### POST `/api/v1/auth/refresh`

**Auth:** None (reads `refresh_token` cookie automatically)

**Request:** `{}` (empty body — token from cookie)

**Response (200):**

```typescript
{
  success: true;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      refreshExpiresIn: number;
    }
  }
}
```

---

### POST `/api/v1/auth/select-tenant`

**Auth:** Any valid access token (base type)

**Request:**

```typescript
{
  tenantId: string; // UUID
}
```

**Response (200):**

```typescript
{
  success: true;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      refreshExpiresIn: number;
    }
    membership: {
      id: string;
      tenantId: string;
      tenantName: string;
      role: "OWNER" | "ADMIN" | "USER";
    }
  }
}
```

---

### GET `/api/v1/auth/profile`

**Auth:** Any valid access token

**Response (200):**

```typescript
{
  success: true;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
      isPlatformAdmin: boolean;
    }
    memberships: Array<{
      membershipId: string;
      tenantId: string;
      tenantName: string;
      role: "OWNER" | "ADMIN" | "USER";
    }>;
  }
}
```

---

### POST `/api/v1/auth/invites`

**Auth:** Tenant-scoped (OWNER or ADMIN only)

**Request:**

```typescript
{
  email: string;
  role: "ADMIN" | "USER";
}
```

**Response (201):**

```typescript
{
  success: true;
  data: {
    inviteToken: string;
    inviteUrl: string;
    expiresAt: string; // ISO 8601
  }
}
```

---

### POST `/api/v1/auth/accept-invite`

**Auth:** None (public)

**Request:**

```typescript
{
  inviteToken: string;
  email: string;
  password: string;
  name: string;
}
```

**Response (201):**

```typescript
{
  success: true;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      refreshExpiresIn: number;
    }
    user: {
      id: string;
      email: string;
      name: string;
    }
    membership: {
      id: string;
      tenantId: string;
      tenantName: string;
      role: "OWNER" | "ADMIN" | "USER";
    }
  }
}
```

---

### POST `/api/v1/auth/logout`

**Auth:** None (reads `refresh_token` cookie)

**Request:** `{}` (empty body)

**Response (200):**

```typescript
{
  success: true;
  data: {
    message: "Logged out successfully";
  }
}
```

---

### POST `/api/v1/admin/auth/login`

**Auth:** None (public — validates platform admin status)

**Request:**

```typescript
{
  email: string;
  password: string;
}
```

**Response (200):** Same shape as tenant login, but `user.isPlatformAdmin` is `true`. Returns 401 if user is not a platform admin.

---

## 4. Campaigns API

### GET `/api/v1/campaigns`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: Array<{
    id: string;
    name: string;
    description: string | null;
    status: CampaignStatus;
    totalLeads: number;
    calledLeads: number;
    completedLeads: number;
    failedLeads: number;
    createdAt: string;
    updatedAt: string;
    assistant: {
      id: string;
      name: string;
      bolnaId: string;
    } | null;
    brochure: {
      id: string;
      projectName: string | null;
      city: string | null;
      configurations: string[];
    } | null;
    batches: Array<{
      id: string;
      status: string;
      totalLeads: number;
      completedLeads: number;
    }>;
  }>;
}
```

---

### POST `/api/v1/campaigns`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:**

```typescript
{
  name: string;                          // 1-200 chars
  description?: string;                  // max 2000 chars
  assistantId: string;                   // UUID
  brochureId?: string;                   // UUID (must be confirmed)
  variables?: Record<string, string>;
  defaultRetryConfig?: {
    enabled: boolean;
    max_retries?: number;                // 0-5
    retry_on_statuses?: Array<"no-answer" | "busy" | "failed">;
    retry_on_voicemail?: boolean;
    retry_intervals_minutes?: number[];
  };
}
```

**Response (201):** Returns the created campaign entity with assistant relation.

---

### GET `/api/v1/campaigns/:id`

**Auth:** Tenant-scoped

**Response (200):** Full campaign with assistant, brochure, and batches relations.

---

### GET `/api/v1/campaigns/:id/stats`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    campaign: {
      /* full campaign with assistant, brochure, batches */
    }
    leads: Array<{ status: string; _count: number }>;
    calls: Array<{ status: string; _count: number }>;
  }
}
```

---

### GET `/api/v1/campaigns/:id/performance`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    hotLeads: number;
    callbacks: number;
    siteVisits: number;
    dnc: number;
    totalCost: number; // in dollars
    costPerLead: number; // in dollars
    qualificationRate: string; // e.g. "45.2"
    bestPickupTime: string; // e.g. "10:00 AM - 11:00 AM"
    bestConversionTime: string;
    topBudget: string;
    topConfiguration: string;
  }
}
```

---

### POST `/api/v1/campaigns/:id/parse-leads`

**Auth:** Tenant-scoped
**Content-Type:** `multipart/form-data`

**Request:** Form field `file` (CSV/XLS/XLSX, max 10MB)

**Response (200):**

```typescript
{
  success: true;
  data: {
    total: number;
    valid: number;
    invalid: number;
    nonIndian: number;
    nonIndianNumbers: string[];
    inFileDuplicates: number;
    inFileDuplicateNumbers: string[];
    dbDuplicates: number;
    dbDuplicateNumbers: string[];
    readyToImport: number;
  };
}
```

---

## 5. Batches API

All batch routes are nested under campaigns: `/api/v1/campaigns/:campaignId/batches`

### GET `/api/v1/campaigns/:campaignId/batches`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: Array<{
    id: string;
    bolnaBatchId: string | null;
    tenantId: string;
    campaignId: string;
    status: BatchStatus;
    fileName: string | null;
    originalFileUrl: string | null;
    transformedCsvUrl: string | null;
    retryConfig: Record<string, unknown> | null;
    scheduledAt: string | null;
    bolnaScheduledAt: string | null;
    totalLeads: number;
    calledLeads: number;
    completedLeads: number;
    failedLeads: number;
    createdAt: string;
    updatedAt: string;
    _count: { leads: number; calls: number };
  }>;
}
```

---

### POST `/api/v1/campaigns/:campaignId/batches`

**Auth:** Tenant-scoped
**Content-Type:** `multipart/form-data`

**Request:**

- Form field `file` (CSV/XLS/XLSX, max 10MB)
- Form field `retryConfig` (optional JSON string)

**Response (201):**

```typescript
{
  success: true;
  data: {
    batch: {
      /* LeadBatch entity */
    }
    stats: {
      totalRows: number;
      validIndian: number;
      filteredNonIndian: number;
      imported: number;
    }
  }
}
```

---

### GET `/api/v1/campaigns/:campaignId/batches/:batchId`

**Auth:** Tenant-scoped

**Response (200):** Single batch with `_count`.

---

### POST `/api/v1/campaigns/:campaignId/batches/:batchId/run`

**Auth:** Tenant-scoped

**Request:** `{}` (empty body)

**Response (200):**

```typescript
{
  success: true;
  data: {
    batch: {
      /* updated LeadBatch */
    }
    message: string; // "Batch scheduled. Bolna will start at ..."
  }
}
```

---

### POST `/api/v1/campaigns/:campaignId/batches/:batchId/schedule`

**Auth:** Tenant-scoped

**Request:**

```typescript
{
  scheduledAt: string; // ISO 8601 with timezone, min 1 minute in future
}
```

**Response (200):** Same shape as `run`.

---

### POST `/api/v1/campaigns/:campaignId/batches/:batchId/stop`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    batch: {
      /* updated LeadBatch with status STOPPED */
    }
    warning: string;
  }
}
```

---

### POST `/api/v1/campaigns/:campaignId/batches/:batchId/resume`

**Auth:** Tenant-scoped

**Response (201):**

```typescript
{
  success: true;
  data: {
    originalBatchId: string;
    newBatch: {
      /* new LeadBatch entity */
    }
    remainingLeads: number;
    message: string;
  }
}
```

---

### DELETE `/api/v1/campaigns/:campaignId/batches/:batchId`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Response (200):**

```typescript
{
  success: true;
  data: {
    message: "Batch deleted successfully";
  }
}
```

---

### GET `/api/v1/campaigns/:campaignId/batches/:batchId/stats`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    batch: {
      /* LeadBatch entity */
    }
    leads: Array<{ status: string; _count: number }>;
    calls: Array<{ status: string; _count: number }>;
    totalCost: number; // in dollars
  }
}
```

---

## 6. Leads API

### GET `/api/v1/leads`

**Auth:** Tenant-scoped

**Query Parameters:**
| Param | Type | Description |
|---|---|---|
| `campaignId` | UUID | Filter by campaign |
| `status` | string | Single or comma-separated: `PENDING,CALLED` |
| `search` | string | Search by name or phone |
| `dateFrom` | ISO datetime | Created after |
| `dateTo` | ISO datetime | Created before |
| `sortBy` | `createdAt` \| `name` \| `updatedAt` | Sort field |
| `sortOrder` | `asc` \| `desc` | Sort direction |
| `page` | number | Page number (default 1) |
| `limit` | number | Items per page (default 20) |

**Response (200):**

```typescript
{
  success: true;
  data: {
    leads: Array<{
      id: string;
      name: string | null;
      phone: string;
      email: string | null;
      company: string | null;
      status: LeadStatus;
      doNotCall: boolean;
      tenantId: string;
      campaignId: string;
      batchId: string | null;
      metadata: Record<string, unknown> | null;
      createdAt: string;
      updatedAt: string;
      campaign: {
        id: string;
        name: string;
      } | null;
    }>;
    pagination: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    }
  }
}
```

---

### GET `/api/v1/leads/:id`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    /* All Lead fields */
    campaign: {
      id: string;
      name: string;
      description: string | null;
      status: string;
    } | null;
    calls: Array<{
      id: string;
      bolnaCallId: string | null;
      status: CallStatus;
      duration: number | null;
      cost: number | null;
      recording: string | null;
      transcript: string | null;
      summary: string | null;
      createdAt: string;
      callAnalysis: {
        id: string;
        disposition: Disposition | null;
        leadTemperature: string | null;
        preferredConfiguration: string | null;
        budgetRange: string | null;
        purchaseTimeline: string | null;
        preferredNextAction: string | null;
      } | null;
    }>;
  };
}
```

---

### GET `/api/v1/leads/stats`

**Auth:** Tenant-scoped

**Query Parameters:**
| Param | Type |
|---|---|
| `campaignId` | UUID (optional) |

**Response (200):**

```typescript
{
  success: true;
  data: {
    total: number;
    pending: number;
    calling: number;
    called: number;
    failed: number;
    noAnswer: number;
    doNotCall: number;
    qualified: number;
    qualificationRate: string; // e.g. "45.2%"
  }
}
```

---

## 7. Calls API

### GET `/api/v1/calls`

**Auth:** Tenant-scoped

**Query Parameters:**
| Param | Type | Description |
|---|---|---|
| `campaignId` | UUID | Filter by campaign |
| `leadId` | UUID | Filter by lead |
| `status` | string | Comma-separated CallStatus values |
| `disposition` | string | Comma-separated Disposition values |
| `leadTemperature` | string | Comma-separated: `HOT,WARM` |
| `locationMatch` | string | Comma-separated LocationMatch values |
| `search` | string | Search by lead name or phone |
| `dateFrom` | ISO datetime | Started after |
| `dateTo` | ISO datetime | Started before |
| `sortBy` | `startedAt` \| `duration` \| `cost` \| `createdAt` | |
| `sortOrder` | `asc` \| `desc` | |
| `page` | number | Default 1 |
| `limit` | number | Default 15 |

**Response (200):**

```typescript
{
  success: true;
  data: {
    calls: Array<{
      id: string;
      bolnaCallId: string | null;
      tenantId: string;
      campaignId: string;
      leadId: string;
      batchId: string | null;
      status: CallStatus;
      duration: number | null;
      cost: number | null;
      recording: string | null;
      transcript: string | null;
      summary: string | null;
      startedAt: string | null;
      endedAt: string | null;
      createdAt: string;
      lead: {
        id: string;
        name: string | null;
        phone: string;
      } | null;
      campaign: {
        id: string;
        name: string;
      } | null;
      callAnalysis: {
        id: string;
        disposition: Disposition | null;
        leadTemperature: LeadTemperature | null;
        preferredConfiguration: string | null;
        budgetRange: string | null;
        purchaseTimeline: string | null;
      } | null;
    }>;
    pagination: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    }
  }
}
```

---

### GET `/api/v1/calls/:id`

**Auth:** Tenant-scoped

**Response (200):** Full call with lead, campaign, and complete callAnalysis (all 13 extraction fields).

---

### GET `/api/v1/calls/:id/transcript`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    transcript: string | null;
    transcriptMessages: Array<{
      role: "assistant" | "user";
      message: string;
      time: string | null;
    }> | null;
    summary: string | null;
    duration: number | null;
    recording: string | null;
    callAnalysis: {
      id: string;
      disposition: Disposition | null;
      leadTemperature: LeadTemperature | null;
    } | null;
  };
}
```

---

### GET `/api/v1/calls/stats`

**Auth:** Tenant-scoped

**Query Parameters:**
| Param | Type |
|---|---|
| `campaignId` | UUID (optional) |
| `leadId` | UUID (optional) |

**Response (200):**

```typescript
{
  success: true;
  data: {
    total: number;
    completed: number;
    failed: number;
    noAnswer: number;
    busy: number;
    avgDuration: number; // seconds, rounded
    qualifiedCount: number;
    qualificationRate: string; // e.g. "45.2%"
    dispositionBreakdown: Record<string, number>;
    temperatureBreakdown: Record<string, number>;
  }
}
```

---

## 8. Assistants API

### GET `/api/v1/assistants`

**Auth:** Tenant-scoped

**Response (200):** Array of assistant entities.

---

### GET `/api/v1/assistants/bolna-agents`

**Auth:** Tenant-scoped

**Response (200):** Array of Bolna agent objects from Bolna dashboard.

---

### GET `/api/v1/assistants/:id`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    assistant: { /* AssistantEntity */ };
    variables: string[];  // Extracted prompt variable names
  };
}
```

---

### POST `/api/v1/assistants/register`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:**

```typescript
{
  name: string; // 1-100 chars (friendly name)
  bolnaId: string; // 1-100 chars (Bolna agent ID)
}
```

**Response (201):** Created assistant entity.

---

### PATCH `/api/v1/assistants/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:** `{ name: string }` (1-100 chars)

**Response (200):** Updated assistant entity.

---

### POST `/api/v1/assistants/:id/sync`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Response (200):** Assistant entity with refreshed config from Bolna.

---

### DELETE `/api/v1/assistants/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Response (200):** `{ success: true, data: { message: "Assistant removed successfully" } }`

**Error (409):** If assistant is linked to active campaigns.

---

## 9. Users API

### GET `/api/v1/users`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Response (200):**

```typescript
{
  success: true;
  data: Array<{
    id: string;
    email: string;
    name: string;
    role: "OWNER" | "ADMIN" | "USER";
    createdAt: string;
  }>;
}
```

---

### POST `/api/v1/users`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:**

```typescript
{
  email: string;
  name: string;
  password?: string;   // optional — auto-generated if omitted
  role?: "OWNER" | "ADMIN" | "USER";  // default: USER
}
```

**Response (201):** Created user entity.

---

### PATCH `/api/v1/users/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:** `{ name?: string; role?: "OWNER" | "ADMIN" | "USER" }`

**Response (200):** Updated user entity.

---

### DELETE `/api/v1/users/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Response (200):** `{ success: true, data: { message: "User deleted successfully" } }`

**Error (400):** Cannot delete yourself.

---

## 10. Dashboard API

### GET `/api/v1/dashboard/overview`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    campaigns: {
      total: number;
      active: number;
    }
    leads: {
      total: number;
      qualified: number;
      notQualified: number;
      qualificationRate: string; // e.g. "45.2%"
    }
    calls: {
      total: number;
      completed: number;
      failed: number;
      successRate: string; // e.g. "87.5%"
    }
  }
}
```

> ⚠️ `qualificationRate` and `successRate` are **strings** with `%` suffix. Use `parseFloat()` before numeric comparisons.

---

### GET `/api/v1/dashboard/activity`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: {
    recentCalls: Array<{
      id: string;
      bolnaCallId: string | null;
      status: string;
      duration: number | null;
      cost: number | null;
      recording: string | null;
      startedAt: string | null;
      createdAt: string;
      lead: { name: string | null; phone: string } | null;
      campaign: { name: string } | null;
      callAnalysis: {
        disposition: string | null;
        leadTemperature: string | null;
      } | null;
    }>;
    qualifiedLeads: Array<{
      leadId: string;
      name: string | null;
      phone: string;
      campaign: string;
      disposition: string | null;
      leadTemperature: string | null;
      qualifiedAt: string;
    }>;
    recentCampaigns: Array<{
      id: string;
      name: string;
      status: string;
      totalLeads: number;
      calledLeads: number;
      completedLeads: number;
      failedLeads: number;
      createdAt: string;
    }>;
  }
}
```

---

### GET `/api/v1/dashboard/campaigns`

**Auth:** Tenant-scoped

**Response (200):**

```typescript
{
  success: true;
  data: Array<{
    id: string;
    name: string;
    status: string;
    assistant: string; // assistant name
    totalLeads: number;
    calledLeads: number;
    completedLeads: number;
    failedLeads: number;
    completedRate: string; // e.g. "85.0%"
    progress: string; // e.g. "60.0%"
    startedAt: string | null;
    completedAt: string | null;
    createdAt: string;
  }>;
}
```

---

## 11. Brochures API

### POST `/api/v1/brochures/extract`

**Auth:** Tenant-scoped (OWNER or ADMIN)
**Content-Type:** `multipart/form-data`

**Request:** Form field `file` (PDF only, max 100MB)

**Response (200):**

```typescript
{
  success: true;
  message: "Brochure extracted successfully";
  data: {
    propertyDetails: {
      /* AI-extracted property data */
    }
    flattenedForSave: {
      /* flat object ready for /save */
    }
    pdfMeta: {
      fileName: string;
      pageCount: number;
      fileSizeBytes: number;
      fileSizeMB: string;
      textLength: number;
      truncated: boolean;
      extractedAt: string;
    }
    textQuality: {
      hasUsableText: boolean;
      /* quality metrics */
    }
  }
}
```

---

### POST `/api/v1/brochures/save`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:** Full brochure data object (all fields from `flattenedForSave` in extract response).

**Response (201):** Created brochure entity with `isConfirmed: true`.

---

### GET `/api/v1/brochures`

**Auth:** Tenant-scoped

**Response (200):** Array of brochure summaries with campaign counts.

---

### GET `/api/v1/brochures/:id`

**Auth:** Tenant-scoped

**Response (200):** Full brochure with linked campaigns.

---

### PATCH `/api/v1/brochures/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Request:** Partial brochure fields.

**Response (200):** Updated brochure entity.

---

### DELETE `/api/v1/brochures/:id`

**Auth:** Tenant-scoped (OWNER or ADMIN)

**Error (409):** If linked to active campaigns.

---

## 12. Tenants API (Admin)

All routes under `/api/v1/admin/tenants` require **platform admin** authentication.

### GET `/api/v1/admin/tenants`

**Response (200):** Array of tenants with `_count` (memberships, campaigns, leads, calls).

### GET `/api/v1/admin/tenants/:id`

**Response (200):** Single tenant with counts.

### PATCH `/api/v1/admin/tenants/:id`

**Request:** `{ name?: string; isActive?: boolean }`

### GET `/api/v1/admin/tenants/:id/stats`

**Response (200):**

```typescript
{
  success: true;
  data: {
    tenant: {
      /* TenantEntity */
    }
    stats: {
      totalUsers: number;
      totalLeads: number;
      qualifiedLeads: number;
      totalCalls: number;
      completedCalls: number;
      activeCampaigns: number;
      qualificationRate: number; // numeric, not string
    }
  }
}
```

---

## 13. Webhooks (Public)

No authentication. Posted by Bolna AI.

### POST `/webhooks/bolna`

Per-call lifecycle events. Handles: `initiated`, `ringing`, `in-progress`, `completed`, `no-answer`, `busy`, `failed`, `stopped`, `canceled`. Ignores: `queued`, `scheduled`.

### POST `/webhooks/bolna-batch`

Batch lifecycle events. Handles: `completed`, `stopped`, `failed`, `running`, `scheduled`.

---

## 14. Enums Reference

### CampaignStatus

```
DRAFT | RUNNING | COMPLETED | FAILED
```

### BatchStatus

```
CREATED | SCHEDULED | RUNNING | STOPPED | COMPLETED | FAILED
```

### LeadStatus

```
PENDING | CALLING | CALLED | QUALIFIED | NOT_QUALIFIED | NO_ANSWER | FAILED
```

### CallStatus

```
PENDING | CALLING | COMPLETED | FAILED | NO_ANSWER | BUSY
```

### Disposition

```
INTERESTED_SEND_DETAILS | QUALIFIED_CONSULTANT_FOLLOWUP | SITE_VISIT_INTEREST |
INTERESTED_GENERAL | FOLLOWUP_REQUESTED | NOT_INTERESTED | DO_NOT_CALL |
WRONG_NUMBER | ALREADY_PURCHASED | BROKER | LANGUAGE_CALLBACK_REQUIRED |
CALL_ENDED_BY_CUSTOMER | CALL_ENDED_ABUSIVE | NO_RESPONSE | CALL_DROPPED
```

### LeadTemperature

```
HOT | WARM | NURTURE | COLD | NOT_APPLICABLE
```

### TenantRole

```
OWNER | ADMIN | USER
```

### PurchaseTimeline

```
WITHIN_3_MONTHS | WITHIN_6_MONTHS | WITHIN_1_YEAR | AFTER_1_YEAR | FLEXIBLE | NOT_SHARED
```

### PurchasePurpose

```
OWN_USE | INVESTMENT | BOTH | NOT_SHARED
```

### PreferredNextAction

```
SEND_DETAILS | CONSULTANT_CALL | SITE_VISIT | FOLLOWUP_CALL | NONE
```

### ContactChannel

```
WHATSAPP | EMAIL | NOT_ASKED
```

### LocationMatch

```
MATCH | MISMATCH | NOT_ASKED | NOT_MENTIONED
```

### ExtractionFlag

```
YES | NO
```

---

## 15. Shared Types

### Standard Success Response

```typescript
interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
}
```

### Standard Error Response

```typescript
interface ApiError {
  success: false;
  error: string;
  code: string;
  details?: Array<{ field: string; message: string }>;
}
```

### RetryConfig

```typescript
interface RetryConfig {
  enabled: boolean;
  max_retries: number;
  retry_on_statuses?: Array<"no-answer" | "busy" | "failed">;
  retry_on_voicemail?: boolean;
  retry_intervals_minutes?: number[];
}
```

### CallHistoryItem

```typescript
interface CallHistoryItem {
  attempt: number;
  bolnaCallId: string;
  status: string;
  duration?: number | null;
  cost?: number | null;
  timestamp: string;
  errorMessage?: string | null;
}
```

### Pagination

```typescript
interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}
```

---

## Frontend Migration Quick Reference

| What Changed         | Old                                       | New                                                      |
| -------------------- | ----------------------------------------- | -------------------------------------------------------- |
| API base path        | `/api/*`                                  | `/api/v1/*`                                              |
| Auth transport       | `Authorization: Bearer` header            | HTTP-Only cookies (`withCredentials: true`)              |
| User shape           | `{ id, email, name, role, tenantId }`     | `{ id, email, name, isPlatformAdmin, memberships[] }`    |
| Login response       | `{ token, user, tenant }`                 | `{ tokens, requiresTenantSelection, user, memberships }` |
| Error shape          | `{ success, error }`                      | `{ success, error, code, details? }`                     |
| Brochure path        | `/api/brochure/*`                         | `/api/v1/brochures/*`                                    |
| Admin path           | `/api/tenants/*`                          | `/api/v1/admin/tenants/*`                                |
| Deprecated endpoints | `/:id/upload`, `/:id/start`, `/:id/pause` | **Removed** — use batch routes                           |
