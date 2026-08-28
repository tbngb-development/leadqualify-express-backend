# AGENT.md — AI Lead Qualification System (V1 Architecture)

# Full System Reference for AI Agents

> **Last updated:** Phase 7 V1 Migration (August 2026)
> **Stack:** Next.js 16 + Express.js + PostgreSQL + Prisma + Bolna Voice AI + Cloudinary
> **Architecture:** Bolna-Native Batch API (Stateless Backend)

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Technology Stack](#2-technology-stack)
3. [Database Schema](#3-database-schema)
4. [Backend Architecture](#4-backend-architecture)
5. [Frontend Architecture](#5-frontend-architecture)
6. [Core Data Flows](#6-core-data-flows)
7. [API Reference](#7-api-reference)
8. [Key Business Rules & Gotchas](#8-key-business-rules--gotchas)
9. [Enums Reference](#9-enums-reference)
10. [Environment Variables](#10-environment-variables)

---

## 1. System Overview

An AI-powered real estate lead qualification platform designed exclusively for the Indian market. Tenants upload leads via CSV/XLS/XLSX, assign a Bolna AI voice agent, configure auto-retry parameters, and dispatch calls in **Batches**.

### Architecture Philosophy (V1)

Our backend is **stateless regarding call dispatching**. We act as an Analytics, Storage, and Command layer.

- **Bolna AI** handles concurrency, queueing, time-based scheduling, and automatic retries.
- **Cloudinary** stores original and normalized CSV files.
- **Our System** syncs state via Webhooks, extracts property insights, and computes performance metrics.

### Core Flow

```text
CSV Upload → Cloudinary Save → Bolna POST /batches → Schedule Batch → Webhooks → Stats Update
```

---

## 2. Technology Stack

### Backend

| Layer          | Technology                             |
| -------------- | -------------------------------------- |
| Runtime        | Node.js + TypeScript                   |
| Framework      | Express.js                             |
| Database / ORM | PostgreSQL + Prisma v6.19.3            |
| Auth           | JWT (jsonwebtoken) + bcryptjs          |
| File Storage   | Cloudinary (via `streamifier`)         |
| Voice AI       | Bolna API (Batches, Calls, Executions) |

### Frontend

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Framework   | Next.js 16 (App Router) + TypeScript    |
| State/Query | Zustand (auth) + TanStack Query v5      |
| UI/Styling  | Tailwind CSS v4 + Lucide React          |
| Components  | React Hook Form + Zod + Radix/Custom UI |

---

## 3. Database Schema

Every DB record has a `tenantId`. No cross-tenant data leakage is possible.

### Core Models

#### Campaign

Aggregates stats across multiple batches.

```prisma
model Campaign {
  id                 String         @id @default(uuid())
  status             CampaignStatus @default(DRAFT) // DRAFT | RUNNING | COMPLETED | FAILED
  variables          Json?
  defaultRetryConfig Json?          // Inherited by new batches
  totalLeads         Int            @default(0)
  calledLeads        Int            @default(0)
  completedLeads     Int            @default(0)  // Replaced legacy 'successLeads'
  failedLeads        Int            @default(0)
  batches            LeadBatch[]
  // ... relations: tenant, assistant, brochure
}
```

#### LeadBatch (V1 Concept)

Tracks a single CSV upload lifecycle.

```prisma
model LeadBatch {
  id                String      @id @default(uuid())
  bolnaBatchId      String?     @unique
  status            BatchStatus @default(CREATED)
  fileName          String?
  originalFileUrl   String?     // Cloudinary URL
  transformedCsvUrl String?     // Cloudinary URL (E.164 + Variables)
  retryConfig       Json?       // e.g., { enabled: true, max_retries: 2, ... }
  scheduledAt       DateTime?   // User requested time
  bolnaScheduledAt  DateTime?   // Bolna rounded time
  totalLeads        Int         @default(0)
  calledLeads       Int         @default(0)
  completedLeads    Int         @default(0)
  failedLeads       Int         @default(0)
  leads             Lead[]
  calls             Call[]
}
```

#### Lead

```prisma
model Lead {
  id         String     @id @default(uuid())
  phone      String     // Strictly normalized to +91 E.164
  status     LeadStatus @default(PENDING) // PENDING | CALLING | CALLED | NO_ANSWER | FAILED
  batchId    String?
  doNotCall  Boolean    @default(false)
  @@unique([phone, campaignId]) // Cross-batch deduplication
}
```

#### Call

Tracks the entire lifecycle of a lead attempt, including Bolna retries.

```prisma
model Call {
  id                 String     @id @default(uuid())
  bolnaCallId        String?    @unique  // LATEST execution_id
  batchId            String?
  status             CallStatus @default(PENDING) // PENDING | CALLING | COMPLETED | NO_ANSWER | BUSY | FAILED
  callHistory        Json?      // Tracks previous Bolna retries
  // ... metrics: duration, cost, recording, transcript
  callAnalysis       CallAnalysis?
}
```

#### CallAnalysis

Stores structured data extracted by Bolna's LLM post-call (Disposition, Temperature, Budgets, Timelines).

---

## 4. Backend Architecture

### Key Service Modules

1. **`csvTransformer.ts`**: Converts user uploads into Bolna-compatible CSVs.
   - Forces `contact_number` header.
   - Enforces strict Indian Telecom validation (drops non `+91` numbers).
   - Injects campaign `variables` directly into the CSV columns.
2. **`fileStorage.ts`**: Streams raw buffers directly to Cloudinary using `resource_type: "raw"`.
3. **`batch.service.ts`**: Handles creation, scheduling, stopping, and resuming of batches via the Bolna API.
4. **`webhook.handler.ts`**: Resolves asynchronous Bolna events, manages retry snapshots, and computes campaign/batch statistics dynamically.

### Webhook Resolution Strategy (Critical)

When Bolna fires a per-call webhook, we resolve the DB `Call` record using this hierarchy:

1. **Fallback/Legacy:** Match by `payload.execution_id` === `Call.bolnaCallId`.
2. **V1 Batch Match:** Find `LeadBatch` via `payload.batch_id` → Find `Lead` via `payload.telephony_data.to_number` → Find or Create `Call`.
3. **Retry Detection:** If `payload.batch_run_details.retried > 0`, append the previous state to `Call.callHistory`, update `bolnaCallId` with the new execution ID, and reset status to `CALLING`.

### Dual Stats Increment

All terminal webhooks (`COMPLETED`, `NO_ANSWER`, `BUSY`, `FAILED`) trigger a transaction that increments counters on **both** the `LeadBatch` and the parent `Campaign`.

---

## 5. Frontend Architecture

### Data Management

- Server state managed entirely by **TanStack Query v5**.
- Filters on listing pages (Calls, Leads) sync to the URL query string (`?page=1&status=COMPLETED`) to preserve state during navigation.

### Batch UI Hierarchy

- Campaigns no longer have global Run/Pause buttons.
- Campaign Detail page renders `<BatchList />`.
- Each batch row renders `<BatchActions />` with its own `Run`, `Schedule`, `Stop`, `Resume`, and `Delete` commands.

### Component API Standards

- `Button`: `variant="danger"` (not destructive), use `loading={isPending}` (not disabled).
- `Badge`: Uses a custom color palette (`success`, `warning`, `error`, `info`, `gray`), not shadcn variants. Use `dot` boolean for status indicators.
- `EmptyState`: Pass rendered ReactNodes to `icon` (`icon={<Users size={24} />}`).

---

## 6. Core Data Flows

### A. Lead Upload & Batch Creation

1. User uploads CSV via `<UploadLeadsModal />`.
2. Phase 1 (`/parse-leads`): Normalizes numbers to E.164, filters non-Indian phones, dedups in-file, dedups against DB (`unique([phone, campaignId])`), returns preview.
3. Phase 2 (`/batches`):
   - DB creates `LeadBatch` and `Lead` records.
   - Original file uploaded to Cloudinary.
   - `csvTransformer` builds Bolna-ready CSV.
   - Bolna-ready CSV uploaded to Cloudinary.
   - `POST /batches` fired to Bolna with `retry_config` and `webhook_url`.

### B. Scheduling a Batch

1. User clicks "Run Now" or "Schedule".
2. Bolna requires schedules to be **≥ 2 minutes in the future** and utilizes a numeric UTC offset (`+05:30`), rejecting the "Z" suffix.
3. Bolna rounds the time to the nearest 10-minute block. We store this returned time in `LeadBatch.bolnaScheduledAt`.
4. Batch status becomes `SCHEDULED`. Campaign becomes `RUNNING`.

### C. Stopping & Resuming a Batch

1. **Stop:**
   - `POST /batches/:id/stop` sent to Bolna.
   - Bolna halts dispatch. In-flight calls complete normally.
   - `batch.service.ts` forces any aborted `CALLING`/`PENDING` calls to `FAILED` (reason: Stopped) and reverts their `Lead` status back to `PENDING`.
2. **Resume:**
   - Queries all `PENDING` leads in the stopped batch.
   - Creates a **brand new** `LeadBatch` containing only the remaining leads.
   - Old batch remains as a historical artifact (`STOPPED`).

### D. Call Auto-Retry Lifecycle

Configured via `RetryConfigEditor` (e.g., Retry on No Answer/Failed, intervals of 1hr and 4hr).

1. Bolna calls → lead does not answer.
2. Webhook (`status: no-answer`, `retried: 0`) → Call marked `NO_ANSWER`.
3. One hour later, Bolna calls again.
4. Webhook (`status: in-progress`, `retried: 1`, **new execution ID**) arrives.
5. `webhook.handler.ts` detects `retried > 0`. Moves previous `NO_ANSWER` state into `callHistory` JSON. Replaces `bolnaCallId`. Marks `CALLING`.

---

## 7. API Reference

All requests must include `Authorization: Bearer <JWT>`.

### Batches (New V1)

```text
POST   /api/campaigns/:id/batches                    # Upload CSV + Create Bolna Batch
GET    /api/campaigns/:id/batches                    # List all batches
GET    /api/campaigns/:id/batches/:batchId           # Get details
POST   /api/campaigns/:id/batches/:batchId/run       # Schedule at now + 2 mins
POST   /api/campaigns/:id/batches/:batchId/schedule  # Schedule at specific time
POST   /api/campaigns/:id/batches/:batchId/stop      # Halt batch
POST   /api/campaigns/:id/batches/:batchId/resume    # Branch remaining to new batch
DELETE /api/campaigns/:id/batches/:batchId           # Hard delete
GET    /api/campaigns/:id/batches/:batchId/stats     # Batch specific statistics
```

### Webhooks (No Auth)

```text
POST   /webhooks/bolna          # Per-call lifecycle + Extraction logic
POST   /webhooks/bolna-batch    # Batch completion lifecycle + stat reconciliation
```

---

## 8. Key Business Rules & Gotchas

1. **Indian Phone Enforcement:** Any number that cannot be parsed into a 10-digit base or `+91` E.164 string is violently dropped during the upload phase.
2. **"Run Now" is not instant:** Because we use Bolna Batches, "Run Now" actually schedules the call for 2-10 minutes in the future.
3. **Ghost Calls Fix:** Bolna sends `queued` and `scheduled` per-call webhooks. We **ignore** these. We only create/update `Call` rows once the status reaches `initiated` or `ringing` to prevent database clutter if a batch is stopped before dispatch.
4. **CallAnalysis Upsert:** Because retries fire multiple terminal webhooks for the same lead, `saveCallAnalysis()` uses a Prisma `upsert` linked to the `callId` rather than `create`.
5. **Campaign Deprecation:** The endpoints `POST /campaigns/:id/upload`, `/start`, `/pause`, and `/cancel-schedule` return `410 Gone`.

---

## 9. Enums Reference

### CampaignStatus

`DRAFT`, `RUNNING`, `COMPLETED`, `FAILED`

### BatchStatus (New)

`CREATED`, `SCHEDULED`, `RUNNING`, `STOPPED`, `COMPLETED`, `FAILED`

### LeadTemperature (Extracted)

`HOT` (Buy < 3m), `WARM` (Buy < 6m), `NURTURE`, `COLD`, `NOT_APPLICABLE`

### CallStatus

`PENDING`, `CALLING`, `COMPLETED`, `FAILED`, `NO_ANSWER`, `BUSY`

---

## 10. Environment Variables

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret

BOLNA_API_KEY=your-bolna-key
BOLNA_API_URL=https://api.bolna.ai

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

WEBHOOK_BASE_URL=https://your-ngrok.ngrok.io
SKIP_CROSS_BATCH_DEDUP=false   # Set to true only in Dev
```
