# AGENT.md — AI Lead Qualification System

# Full System Reference for AI Agents

> **Last updated:** August 2026
> **Stack:** Next.js 16 + Express.js + PostgreSQL + Prisma v6.19.3 + Bolna Voice AI + Cloudinary
> **Architecture:** Bolna-Native Batch API (stateless dispatch backend)

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Repository Structure](#2-repository-structure)
3. [Technology Stack](#3-technology-stack)
4. [Database Schema](#4-database-schema)
5. [Backend Architecture](#5-backend-architecture)
6. [Frontend Architecture](#6-frontend-architecture)
7. [Core Data Flows](#7-core-data-flows)
8. [API Reference](#8-api-reference)
9. [Key Business Rules & Gotchas](#9-key-business-rules--gotchas)
10. [Enums Reference](#10-enums-reference)
11. [Environment Variables](#11-environment-variables)
12. [Known Patterns](#12-known-patterns)
13. [Architecture Decision Log](#13-architecture-decision-log)
14. [Deferred / Not Yet Implemented](#14-deferred--not-yet-implemented)

---

## 1. System Overview

An AI-powered real estate lead qualification platform, built exclusively for the Indian
market. Tenants upload leads via CSV/XLS/XLSX, assign a Bolna AI voice agent, configure
auto-retry parameters, and dispatch calls in **Batches**. After each call, Bolna extracts
structured data (disposition, lead temperature, budget, timeline, etc.) and sends it back via
webhook. The system stores this as `CallAnalysis` and surfaces it on the frontend.

### Architecture Philosophy

The backend is **stateless regarding call dispatching**. It acts as an Analytics, Storage, and
Command layer only:

- **Bolna AI** handles concurrency, queueing, time-based scheduling, and automatic retries.
- **Cloudinary** stores original and normalized CSV files.
- **Our system** syncs state via webhooks, extracts property insights, and computes
  performance metrics.

There is no BullMQ/Redis queue and no cron/scheduler on our side — **Bolna is the queue**.

### Core Flow

```
CSV Upload → Parse Preview → Cloudinary Save → Bolna POST /batches
           → Schedule Batch → Webhooks (per-call + batch) → Stats Update → Dashboard
```

### Multi-tenancy

Every DB record has `tenantId`. All queries are scoped to `req.user.tenantId`. No
cross-tenant data leakage is possible through the API layer.

---

## 2. Repository Structure

### Backend — `express-backend/`

```
express-backend/
├── prisma/
│   ├── schema.prisma              # Single source of truth for all models + enums
│   └── migrations/                # Auto-generated migration history
├── src/
│   ├── config/
│   │   ├── database.ts            # Prisma client singleton
│   │   └── bolna.ts               # Bolna API client — includes batch methods
│   │                              #   (create, schedule, stop, get, getExecutions, delete)
│   ├── generated/
│   │   └── prisma/                # Auto-generated Prisma client — DO NOT EDIT
│   ├── middleware/
│   │   ├── auth.ts                # JWT verification, attaches req.user
│   │   ├── errorHandler.ts        # Global error handler
│   │   ├── tenant.ts              # Tenant resolution middleware
│   │   └── upload.ts              # Multer config for CSV/PDF uploads
│   ├── modules/
│   │   ├── assistants/
│   │   │   ├── assistant.controller.ts
│   │   │   ├── assistant.routes.ts
│   │   │   └── assistant.service.ts
│   │   ├── auth/
│   │   │   ├── auth.controller.ts  # register, login, profile handlers
│   │   │   ├── auth.routes.ts      # POST /register, POST /login, GET /profile
│   │   │   └── auth.service.ts     # register(), login(), getProfile()
│   │   ├── batches/
│   │   │   ├── batch.controller.ts  # create, list, get, run, schedule, stop, resume, delete, stats
│   │   │   ├── batch.routes.ts      # nested under /api/campaigns/:id/batches
│   │   │   └── batch.service.ts     # full CRUD + lifecycle, talks to bolnaClient + fileStorage
│   │   ├── brochure/
│   │   │   ├── brochure.controller.ts
│   │   │   ├── brochure.routes.ts
│   │   │   ├── brochure.service.ts
│   │   │   └── brochure.types.ts
│   │   ├── calls/
│   │   │   ├── call.controller.ts  # list, get, getTranscript, getStats
│   │   │   ├── call.routes.ts      # GET /stats MUST be before GET /:id
│   │   │   └── call.service.ts     # list(), get(), getTranscript(), getStats()
│   │   ├── campaigns/
│   │   │   ├── campaign.controller.ts   # parseLeads handler
│   │   │   ├── campaign.routes.ts       # /parse-leads; mounts batchRoutes at /:id/batches
│   │   │   └── campaign.service.ts      # parseLeads(), stats/performance aggregation
│   │   ├── dashboard/
│   │   │   └── dashboard.routes.ts # overview, activity, campaigns endpoints
│   │   ├── leads/
│   │   │   ├── lead.controller.ts  # list, get, getStats
│   │   │   ├── lead.routes.ts      # GET /stats MUST be before GET /:id
│   │   │   └── lead.service.ts     # list() supports leadTemperature filter
│   │   ├── tenants/
│   │   │   ├── tenant.controller.ts
│   │   │   ├── tenant.routes.ts
│   │   │   └── tenant.service.ts
│   │   ├── users/
│   │   │   └── user.routes.ts
│   │   └── webhooks/
│   │       ├── webhook.handler.ts  # Per-call webhook logic, batch correlation, retry handling
│   │       └── webhook.routes.ts   # /webhooks/bolna AND /webhooks/bolna-batch
│   ├── types/
│   │   ├── bolna.types.ts          # Bolna API + extraction + batch types (BolnaBatchResponse,
│   │   │                          #   BolnaExecution, RetryConfig, CallHistoryItem)
│   │   └── index.ts                # Shared Express types
│   ├── utils/
│   │   ├── csvTransformer.ts       # phone→contact_number, Indian filter, injects variables
│   │   ├── fileStorage.ts          # Cloudinary streaming upload (streamifier)
│   │   ├── leadParser.ts           # CSV/XLS/XLSX parser
│   │   ├── paramHelper.ts          # Safe req.params extraction
│   │   ├── pdfExtractor.ts         # PDF text extraction
│   │   ├── promptVariableExtractor.ts # Extracts {variables} from agent prompt
│   │   ├── propertyExtractor.ts    # AI property data extraction from PDF
│   │   └── response.ts             # Standard response helpers
│   └── index.ts                    # Express app entry point
```

### Frontend — `frontend/`

```
frontend/src/
├── app/
│   ├── (admin)/                   # SUPER_ADMIN area
│   │   ├── admin/dashboard/       # Platform admin dashboard
│   │   ├── admin/tenants/         # Tenant management
│   │   └── layout.tsx
│   ├── (admin-auth)/              # Admin login page
│   │   └── admin/login/
│   ├── (auth)/                    # Tenant user auth
│   │   ├── login/
│   │   └── register/
│   └── (dashboard)/               # Main tenant app
│       ├── assistants/            # List, detail, create assistant
│       ├── calls/                 # All calls list + [id] detail page
│       ├── campaigns/             # List + [id] detail + [id]/calls/ + [callId] details + [id]/leads
│       ├── dashboard/             # Main dashboard page
│       ├── leads/                 # All leads list + [id] detail page
│       └── users/                 # Team management
├── components/
│   ├── assistants/                # AssistantCard, AssistantForm, AssistantModal
│   ├── auth/                      # LoginForm, RegisterForm
│   ├── brochure/                  # BrochureUploader, BrochureReviewForm
│   ├── calls/
│   │   ├── CallStatusBadge.tsx
│   │   ├── CallStatsCards.tsx     # Stats cards for calls pages
│   │   ├── CallsTable.tsx         # Disposition, Temperature, and Attempts columns
│   │   │                          #   (Attempts derived from callHistory.length)
│   │   └── TranscriptViewer.tsx
│   ├── campaigns/
│   │   ├── UploadLeadsModal.tsx   # 2-step upload: Select → Parse Preview → creates a
│   │   │                          #   LeadBatch via batchesApi.create
│   │   ├── BatchList.tsx          # Renders all batches for a campaign
│   │   ├── BatchActions.tsx       # Per-batch Run / Schedule / Stop / Resume / Delete
│   │   ├── RetryConfigEditor.tsx  # Reusable — used at campaign (default) + batch (override)
│   │   ├── CampaignDetailsForm.tsx
│   │   ├── CampaignDetailsStep.tsx
│   │   ├── CampaignStats.tsx
│   │   ├── CampaignStatusBadge.tsx  # Renders DRAFT / RUNNING / COMPLETED / FAILED
│   │   └── CampaignVariablesStep.tsx # Required fields + char limits validation
│   ├── dashboard/
│   │   ├── ActivityFeed.tsx       # Shows qualified leads feed
│   │   ├── CampaignPerformance.tsx
│   │   └── StatsCard.tsx
│   ├── layout/
│   │   ├── AdminSidebar.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── leads/
│   │   ├── LeadStatusBadge.tsx
│   │   ├── LeadStatsCards.tsx     # Stats cards for leads pages
│   │   └── LeadsTable.tsx         # Table with DNC column
│   └── ui/
│       ├── Badge.tsx              # Custom palette: success/warning/error/info/gray + dot bool
│       ├── Button.tsx             # variant="danger"; loading={isPending} prop
│       ├── Card.tsx
│       ├── ConfirmModal.tsx
│       ├── EmptyState.tsx         # icon prop takes a rendered ReactNode, e.g. icon={<Users/>}
│       ├── FilterBar.tsx          # FilterSelect, SortSelect, FilterBar components
│       ├── FloatingInput.tsx
│       ├── GoBackButton.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── NumberInput.tsx
│       ├── Pagination.tsx
│       ├── Select.tsx
│       ├── Spinner.tsx
│       └── TextArea.tsx
├── constants/
│   ├── api-routes/auth-endpoint.ts
│   └── routes/admin.routes.ts
├── hooks/
│   ├── useAssistants.ts
│   ├── useAuth.ts
│   ├── useBatches.ts              # useBatches, useBatch, useCreateBatch, useRunBatch,
│   │                              #   useScheduleBatch, useStopBatch, useResumeBatch,
│   │                              #   useDeleteBatch, useBatchStats
│   ├── useBrochure.ts
│   ├── useCalls.ts                # useCalls, useCall, useCallTranscript, useCallStats
│   ├── useCampaigns.ts            # useParseCSV (dry-run leads preview)
│   ├── useDebounce.ts
│   ├── useDashboard.ts            # useDashboardOverview, useDashboardActivity, useDashboardCampaigns
│   ├── useLeads.ts                # useLeads (supports leadTemperature), useLead, useLeadStats
│   ├── usePagination.ts
│   ├── useTenants.ts
│   └── useUsers.ts
├── lib/
│   ├── api/
│   │   ├── assistants.ts
│   │   ├── auth.ts
│   │   ├── batches.ts             # batchesApi: create, list, get, run, schedule, stop,
│   │   │                          #   resume, delete, getStats
│   │   ├── brochure.ts
│   │   ├── calls.ts               # getAll, getById, getTranscript, getStats
│   │   ├── campaigns.ts           # parseCSV (dry-run preview)
│   │   ├── dashboard.ts           # getOverview, getActivity, getCampaigns
│   │   ├── leads.ts               # getAll (supports leadTemperature), getById, getStats
│   │   ├── tenants.ts
│   │   └── users.ts
│   ├── utils/
│   │   ├── cn.ts                  # clsx utility
│   │   ├── formatDate.ts
│   │   └── formatDuration.ts
│   ├── axios-error-message.ts
│   ├── axios.ts                   # Axios instance with base URL + auth interceptor
│   └── campaign-draft.ts
├── store/
│   └── authStore.ts               # Zustand auth store — user, token, tenant
├── styles/
│   └── globals.css
└── types/
    ├── api.ts
    ├── batch.ts                   # LeadBatch, BatchStatus, RetryConfig, CallHistoryItem
    ├── index.ts                   # ALL shared types — single source of truth; re-exports
    │                              #   everything from batch.ts
    └── user.ts
```

---

## 3. Technology Stack

### Backend

| Layer          | Technology                                          |
| -------------- | ---------------------------------------------------- |
| Runtime        | Node.js + TypeScript                                 |
| Framework      | Express.js                                            |
| ORM            | Prisma v6.19.3                                        |
| Database       | PostgreSQL                                            |
| Auth           | JWT (jsonwebtoken) + bcryptjs                         |
| File Upload    | Multer (incoming) → Cloudinary (persistent storage)   |
| File Storage   | Cloudinary, via `streamifier` (raw buffer streaming)  |
| Voice AI       | Bolna API — Batches, Calls, Executions                |
| PDF Parsing    | Custom `pdfExtractor` utility                         |

### Frontend

| Layer       | Technology                                        |
| ----------- | -------------------------------------------------- |
| Framework   | Next.js 16 (App Router)                            |
| Language    | TypeScript                                         |
| State       | Zustand (auth) + TanStack Query v5 (server state)  |
| Forms       | React Hook Form + Zod                              |
| HTTP        | Axios                                               |
| Styling     | Tailwind CSS v4                                     |
| Charts      | Recharts                                            |
| Toast       | Sonner                                              |
| Icons       | Lucide React                                        |
| Date Picker | react-datepicker                                    |

---

## 4. Database Schema

Every DB record has a `tenantId`. All queries scoped to `req.user.tenantId` — no cross-tenant
data leakage is possible through the API layer.

### Models Overview

```
Tenant
  ├── Users[]
  ├── Campaigns[]
  │     ├── LeadBatches[]
  │     │     ├── Leads[]
  │     │     │     └── Calls[]
  │     │     │           └── CallAnalysis (one-to-one)
  │     │     └── Calls[]
  │     └── Assistants[] (linked)
  ├── Brochures[]
  └── CallAnalyses[]
```

### Model: Tenant

```prisma
model Tenant {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  apiKey    String   @unique @default(uuid())
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Model: User

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String   // bcrypt hashed
  name      String
  role      Role     @default(USER)  // SUPER_ADMIN | ADMIN | USER
  tenantId  String   // required (see §14 for nullable SUPER_ADMIN support)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Model: Campaign

Aggregates stats across multiple batches.

```prisma
model Campaign {
  id                 String         @id @default(uuid())
  name               String
  description        String?
  status             CampaignStatus @default(DRAFT) // DRAFT | RUNNING | COMPLETED | FAILED
  tenantId           String
  assistantId        String
  brochureId         String?
  variables          Json?
  defaultRetryConfig Json?          // inherited by new batches unless overridden
  totalLeads         Int            @default(0)
  calledLeads        Int            @default(0)
  completedLeads     Int            @default(0)
  failedLeads        Int            @default(0)
  createdAt          DateTime       @default(now())
  updatedAt          DateTime       @updatedAt
  startedAt          DateTime?
  completedAt        DateTime?
  batches            LeadBatch[]
}
```

### Model: LeadBatch

Tracks a single CSV upload's full lifecycle — the unit of dispatch.

```prisma
model LeadBatch {
  id                String      @id @default(uuid())
  bolnaBatchId      String?     @unique
  tenantId          String
  campaignId        String
  status            BatchStatus @default(CREATED)
  fileName          String?
  originalFileUrl   String?     // Cloudinary URL (raw upload as-is)
  transformedCsvUrl String?     // Cloudinary URL (E.164 + variables injected)
  retryConfig       Json?       // e.g. { enabled: true, max_retries: 2, intervals: [1,4] }
  scheduledAt       DateTime?   // user-requested time
  bolnaScheduledAt  DateTime?   // Bolna's rounded time (10-min blocks)
  totalLeads        Int         @default(0)
  calledLeads       Int         @default(0)
  completedLeads    Int         @default(0)
  failedLeads       Int         @default(0)
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  leads             Lead[]
  calls             Call[]
}
```

### Model: Lead

```prisma
model Lead {
  id         String     @id @default(uuid())
  name       String
  phone      String     // strictly normalized to +91 E.164 before storage
  email      String?
  company    String?
  status     LeadStatus @default(PENDING)
  doNotCall  Boolean    @default(false)   // set true when extraction returns do_not_call=YES
  tenantId   String
  campaignId String
  batchId    String?    // which LeadBatch this lead currently belongs to
  metadata   Json?      // raw CSV row stored here

  @@unique([phone, campaignId])  // cross-batch dedup — prevents duplicate leads per campaign
}
```

### Model: Call

Tracks the entire lifecycle of a lead attempt, including Bolna's own retries.

```prisma
model Call {
  id                 String     @id @default(uuid())
  bolnaCallId        String?    @unique   // LATEST Bolna execution_id (replaced on each retry)
  tenantId           String
  campaignId         String
  batchId            String?
  leadId             String
  status             CallStatus @default(PENDING)
  callHistory        Json?      // array of prior attempt snapshots (see §7.E)
  duration           Int?       // seconds
  cost               Float?     // cents
  recording          String?    // URL
  transcript         String?    // plain text
  transcriptMessages Json?      // [{role, message, time}]
  summary            String?    // from call_summary extraction field (NOT Bolna raw summary)
  startedAt          DateTime?
  endedAt            DateTime?
  callAnalysis       CallAnalysis?
}
```

> The call outcome lives entirely in `CallAnalysis.disposition`. One `Call` row persists per
> lead per batch — retries do not create new rows; they append to `callHistory` and update
> the row in place (see ADR A5).

### Model: CallAnalysis

Structured data extracted by Bolna's LLM post-call.

```prisma
model CallAnalysis {
  id       String @id @default(uuid())
  callId   String @unique    // one-to-one with Call — saved via upsert, not create (see §9.4)
  tenantId String

  // Call Outcome
  disposition             Disposition?
  leadTemperature         LeadTemperature?

  // Lead Qualification
  preferredConfiguration  String?     // free text
  budgetRange             String?     // free text
  purchaseTimeline        PurchaseTimeline?
  purchasePurpose         PurchasePurpose?
  locationMatch           LocationMatch?
  customerLocationPref    String?     // free text

  // Next Action
  preferredNextAction     PreferredNextAction?
  preferredContactChannel ContactChannel?
  followupSchedule        String?     // free text e.g. "tomorrow noon"

  // Compliance
  doNotCall               ExtractionFlag?
  languageSupportRequired ExtractionFlag?
}
```

### Model: Brochure

Stores AI-extracted property data from PDF upload. Linked optionally to campaigns.
Key fields: `projectName`, `city`, `area`, `configurations[]`, `startingPrice`,
`amenities[]`, `isConfirmed` (must be `true` before campaign can use it).

### Model: Assistant

```prisma
model Assistant {
  id      String @id @default(uuid())
  bolnaId String @unique   // Bolna agent ID
  name    String
  config  Json             // full Bolna agent config stored here
}
```

---

## 5. Backend Architecture

### Route Registration (`index.ts`)

```
/api/auth          → auth.routes.ts
/api/campaigns     → campaign.routes.ts        (mounts /:id/batches → batch.routes.ts)
/api/leads         → lead.routes.ts
/api/calls         → call.routes.ts
/api/assistants    → assistant.routes.ts
/api/brochures     → brochure.routes.ts
/api/dashboard     → dashboard.routes.ts
/api/tenants       → tenant.routes.ts
/webhooks/bolna         → webhook.routes.ts   (per-call events)
/webhooks/bolna-batch   → webhook.routes.ts   (batch-level events)
```

### Auth Middleware (`src/middleware/auth.ts`)

- Reads `Authorization: Bearer <token>` header
- Verifies JWT
- Attaches `req.user` with `{ id, tenantId, role }`
- All protected routes use `router.use(authenticate)`
- Webhook routes are the exception — **no auth** (Bolna posts directly)

### Important Route Order Rule

```typescript
// ALWAYS register fixed paths (e.g. /stats) before /:id
// Otherwise Express matches "stats" as an :id param
router.get("/stats", getStats);
router.get("/", list);
router.get("/:id", get);
```

This applies to `call.routes.ts` and `lead.routes.ts`. It does not create a conflict in
`batch.routes.ts` because `/:batchId/stats` is nested after the id segment, not before it.

### Key Service Modules

1. **`csvTransformer.ts`** — Converts user uploads into Bolna-compatible CSVs:
   - Forces `contact_number` header.
   - Enforces strict Indian telecom validation (drops non `+91` numbers).
   - Injects campaign `variables` directly into the CSV columns.
2. **`fileStorage.ts`** — Streams raw buffers directly to Cloudinary using
   `resource_type: "raw"`.
3. **`batch.service.ts`** — Handles creation, scheduling, stopping, and resuming of batches
   via the Bolna API.
4. **`webhook.handler.ts`** — Resolves asynchronous Bolna events, manages retry snapshots, and
   computes campaign/batch statistics dynamically.

### Campaign & Batch Dispatch Flow

```
Phase 1 — POST /api/campaigns/:id/parse-leads   (dry-run preview, no DB writes)
Phase 2 — POST /api/campaigns/:id/batches       (creates LeadBatch + Leads, uploads to
                                                  Cloudinary, builds Bolna-ready CSV,
                                                  fires POST to Bolna Batch API)
Then, per batch:
  POST /api/campaigns/:id/batches/:batchId/run       → schedule at now + 2 min
  POST /api/campaigns/:id/batches/:batchId/schedule  → schedule at specific time
  POST /api/campaigns/:id/batches/:batchId/stop      → halt dispatch
  POST /api/campaigns/:id/batches/:batchId/resume    → new batch from remaining PENDING leads
```

### Webhook Resolution Strategy

When Bolna fires a per-call webhook, the DB `Call` record is resolved as follows:

1. **Batch Match:** Find `LeadBatch` via `payload.batch_id` → find `Lead` via
   `payload.telephony_data.to_number` → find or create `Call`.
2. **Retry Detection:** If `payload.batch_run_details.retried > 0`, append the previous state
   to `Call.callHistory`, update `bolnaCallId` with the new execution ID, and reset status to
   `CALLING`.

### Webhook Event Handling (per-call — `/webhooks/bolna`)

```
queued        → IGNORED — no Call row created/touched (prevents ghost calls if the batch
                is stopped before dispatch)
scheduled     → IGNORED, same reason
initiated     → Call created/updated, status = CALLING
ringing       → log only
in-progress   → Call.status = CALLING
call-disconnected → log only (terminal event follows seconds later with full data)
completed     → handleCallCompleted() + checkBatchAndCampaignCompletion() (dual increment)
no-answer     → Call.status = NO_ANSWER, Lead.status = NO_ANSWER, completion check
busy          → Call.status = BUSY, Lead.status = NO_ANSWER, completion check
failed/error  → Call.status = FAILED, Lead.status = FAILED, completion check
stopped/canceled → Call.status = FAILED (reason: Stopped), Lead.status reverted to PENDING
```

#### `handleCallCompleted()` flow:

1. Resolve `Call` via the resolution strategy above.
2. Normalize transcript messages.
3. `parseExtractionData(payload.extracted_data)`:
   - `sanitizeEnum()` validates **all** enum fields against allowed sets.
   - Unknown values become `null` (never crash Prisma).
   - Returns `null` if all fields are null (no `CallAnalysis` created).
4. Update `Call`: status, summary, transcript, duration, recording, cost (from
   `payload.total_cost`), and append to `callHistory` if this is a retry.
5. Update `Lead`: status = `CALLED`.
6. If parsed: `saveCallAnalysis()` — **`upsert` keyed on `callId`**, not `create` (retries can
   fire multiple terminal webhooks for the same lead).
7. If `doNotCall === YES`: `Lead.doNotCall = true`.
8. `incrementTerminalStats()` — increments counters on **both** the `LeadBatch` and the parent
   `Campaign` in a single transaction.
9. `checkBatchAndCampaignCompletion()` — marks the batch (and campaign, if all its batches are
   done) as `COMPLETED` once no active leads remain.

### Batch-Level Webhook (`/webhooks/bolna-batch`)

Handles batch completion lifecycle. On batch completion, `reconcileBatchStats()` fetches the
full list of executions from Bolna and reconciles local counters against Bolna's own record —
a safety net against any missed or out-of-order per-call webhooks.

### Enum Sanitization (critical)

```typescript
// All enum fields from Bolna AI are sanitized before Prisma insert
// Bolna can return unexpected values like "NOT_MENTIONED" for locationMatch
// sanitizeEnum() maps unknowns to null — CallAnalysis still saves with other valid fields
function sanitizeEnum<T extends string>(
  value: string | null | undefined,
  allowed: readonly T[],
): T | null;
```

### Call.summary Source

```
Call.summary ← extracted_data.Summary.call_summary.subjective
```

Bolna's raw `payload.summary` string is discarded. Only extraction data is used.

---

## 6. Frontend Architecture

### Auth Flow

- `authStore.ts` (Zustand) — stores `user`, `token`, `tenant`
- `lib/axios.ts` — Axios instance attaches `Bearer token` from store on every request
- Protected routes check store at layout level
- `(auth)/` layout — for unauthenticated tenant users
- `(admin-auth)/` layout — for SUPER_ADMIN login

### Data Fetching Pattern

```
Page → useHook() → lib/api/*.ts → Axios → Backend API
```

All server state managed by TanStack Query v5. All mutations show a toast via Sonner on
success/error.

### Query Key Conventions

```typescript
CAMPAIGNS_KEY = ['campaigns']
BATCHES_KEY   = ['batches']
CALLS_KEY     = ['calls']
LEADS_KEY     = ['leads']
DASHBOARD_KEY = ['dashboard']

// Scoped queries
[...CAMPAIGNS_KEY, id]                 // single campaign
[...BATCHES_KEY, campaignId]           // batches for a campaign
[...BATCHES_KEY, campaignId, batchId]  // single batch
[...CALLS_KEY, params]                 // filtered call list
[...CALLS_KEY, 'stats', params]        // call stats
[...LEADS_KEY, 'stats', params]        // lead stats
```

### URL-Synced Filter State (Critical Pattern)

On listing pages (Calls, Leads), filters are **not** stored in local `useState`. They sync
directly to the URL (`?search=John&status=COMPLETED&page=2`).

- Allows deep-linking and refreshing without losing context.
- Used with `router.replace({ scroll: false })` to avoid page jumps.

### Preserving State via `router.back()`

When navigating from a filtered listing page to a detail page, the Back button triggers
`router.back()`. This pops the browser history stack, restoring the exact URL parameters
(filters/pagination) seamlessly.

### Interactive Stat Cards

Summary stat cards at the top of listing pages double as quick filters. Clicking "Hot Leads"
updates the URL parameter `?leadTemperature=HOT`, automatically filtering the table below.

### Batch UI Hierarchy

- Campaign Detail page renders `<BatchList />`.
- Each batch row renders `<BatchActions />` with its own `Run`, `Schedule`, `Stop`, `Resume`,
  and `Delete` commands.
- `<RetryConfigEditor />` is reusable — shown at campaign level (sets `defaultRetryConfig`)
  and at batch level (per-batch override).

### Component API Standards

- `Button`: `variant="danger"` (not `"destructive"`); use `loading={isPending}` (not
  `disabled`).
- `Badge`: custom color palette (`success`, `warning`, `error`, `info`, `gray`), not shadcn
  variants. Use the `dot` boolean prop for status indicators.
- `EmptyState`: pass rendered ReactNodes to `icon` (e.g. `icon={<Users size={24} />}`).

### Types (`src/types/index.ts`)

Single source of truth for **all** frontend types (re-exports `types/batch.ts`). Never import
from generated Prisma types on the frontend.

Key interfaces:

```typescript
CallAnalysis;       // mirrors DB model — all 13 extraction fields
Call;               // includes callAnalysis?: CallAnalysis | null, callHistory
Lead;               // includes doNotCall: boolean, batchId?: string
LeadBatch;          // mirrors DB model — status, retryConfig, scheduledAt, stats
BatchStatus;        // CREATED | SCHEDULED | RUNNING | STOPPED | COMPLETED | FAILED
RetryConfig;        // { enabled, max_retries, intervals: number[] }
CallHistoryItem;    // snapshot of a prior call attempt
UploadResult;       // total, valid, imported, duplicates, invalid, duplicateNumbers[]
ParseLeadsResult;   // total, valid, invalid, inFileDuplicates, dbDuplicates, readyToImport
CallStats;          // total, completed, failed, noAnswer, busy, avgDuration,
                    //   dispositionBreakdown, temperatureBreakdown
LeadStats;          // total, pending, calling, called, failed, noAnswer, doNotCall,
                    //   qualified, qualificationRate
DashboardActivity;  // recentCalls[], qualifiedLeads[], recentCampaigns[]
DashboardOverview;  // qualificationRate and successRate are STRING ("45.2%") not number
Campaign;           // status, variables, defaultRetryConfig, batches[]
CampaignStatus;     // DRAFT | RUNNING | COMPLETED | FAILED
LeadQueryParams;    // includes leadTemperature?: string (comma-separated)
CallQueryParams;    // includes leadTemperature?: string (comma-separated)
```

> ⚠️ `DashboardOverview.leads.qualificationRate` and `calls.successRate` are strings.
> Always use `parseFloat()` before numeric comparisons.

### FilterBar Component (`src/components/ui/FilterBar.tsx`)

Three exported components:

```typescript
<FilterBar hasActiveFilters onReset>   // wrapper with reset button
<FilterSelect label value onChange options />  // single filter dropdown
<SortSelect sortBy sortOrder onSortByChange onSortOrderChange options /> // sort controls
```

Used on: `campaigns/[id]/calls`, `campaigns/[id]/leads`.

---

## 7. Core Data Flows

### A. Campaign Creation

```
1. User fills CampaignDetailsStep (name, description, assistantId)
2. Assistant selected → fetch assistant variables from Bolna prompt
3. CampaignVariablesStep:
   - LEAD_AUTO_FIELDS filtered out (customer_name, customer_phone, phone, lead_source)
   - REQUIRED_VARIABLES validated: agent_name, project_short_description
   - project_short_description char limit: 100
   - Optional: brochure PDF upload → auto-fills matching variable fields
4. POST /api/campaigns with variables as JSON (+ optional defaultRetryConfig)
```

### B. Lead Upload & Batch Creation

```
Phase 1 — Preview (POST /api/campaigns/:id/parse-leads)
1. UploadLeadsModal → user picks file
2. Backend normalizes numbers to E.164, strictly filters non-Indian phones, checks:
   - Missing phone (invalid)
   - Duplicates within the uploaded file itself
   - Duplicates against existing DB leads for this campaign (cross-batch dedup)
3. Backend returns ParseLeadsResult (no DB writes)
4. Frontend shows stats grid + duplicate breakdown

Phase 2 — Batch Creation (POST /api/campaigns/:id/batches)
5. User clicks "Create Batch" / "Import N Leads"
6. DB creates LeadBatch + Lead records (same dedup logic re-enforced, race-condition safe)
7. Original file uploaded to Cloudinary (originalFileUrl)
8. csvTransformer builds a Bolna-ready CSV (contact_number header, variables injected)
9. Bolna-ready CSV uploaded to Cloudinary (transformedCsvUrl)
10. POST fired to Bolna Batch API with retry_config + webhook_url
```

### C. Scheduling a Batch

```
1. User clicks "Run Now" or "Schedule" on a specific batch
2. Bolna requires schedules ≥ 2 minutes in the future, using a numeric UTC offset
   (e.g. "+05:30") — it rejects the "Z" suffix
3. Bolna rounds the time to the nearest 10-minute block; the returned time is stored in
   LeadBatch.bolnaScheduledAt
4. Batch status becomes SCHEDULED; Campaign status becomes RUNNING
5. First webhook (initiated) transitions the batch to RUNNING
6. Subsequent completion webhooks trigger checkBatchAndCampaignCompletion() — once no
   active leads remain across ALL of a campaign's batches, Campaign → COMPLETED
```

> ⚠️ "Run Now" is **not instant** — because dispatch goes through the Bolna Batch API, it
> actually schedules calls 2–10 minutes out. A separate single-call `POST /call` endpoint is
> kept for the "Test Run" feature, where instant dispatch is required (see ADR A2).

### D. Stopping & Resuming a Batch

```
Stop:
1. POST /api/campaigns/:id/batches/:batchId/stop sent to Bolna
2. Bolna halts further dispatch; in-flight calls complete normally
3. batch.service.ts forces any aborted CALLING/PENDING calls to FAILED (reason: Stopped)
   and reverts their Lead status back to PENDING

Resume:
4. Queries all PENDING leads in the stopped batch
5. Creates a BRAND NEW LeadBatch containing only the remaining leads
   (Bolna has no resume API — this keeps a clean separation of history)
6. Old batch remains as a historical artifact with status STOPPED
```

### E. Call Auto-Retry Lifecycle

Configured via `<RetryConfigEditor />` (e.g. retry on No Answer/Failed, at fixed intervals of
1hr / 4hr / 24hr — `max_retries` is auto-derived from the selected intervals).

```
1. Bolna calls → lead does not answer
2. Webhook (status: no-answer, retried: 0) → Call marked NO_ANSWER
3. One hour later, Bolna calls again automatically
4. Webhook (status: in-progress, retried: 1, NEW execution ID) arrives
5. webhook.handler.ts detects retried > 0:
   - Moves previous NO_ANSWER state into callHistory JSON
   - Replaces bolnaCallId with the new execution ID
   - Marks Call.status = CALLING
```

Retry config precedence: **batch-level `retryConfig`** (if set) overrides
**campaign-level `defaultRetryConfig`**; if neither is set, retries are disabled.

### F. Bolna Extraction → CallAnalysis

```
payload.extracted_data structure:
{
  "Call Outcome": {
    disposition:     { objective: "QUALIFIED_CONSULTANT_FOLLOWUP", ... }
    lead_temperature: { objective: "WARM", ... }
  }
  "Lead Qualification": {
    preferred_configuration: { subjective: "2 BHK", ... }
    budget_range:            { subjective: "under 80 lakhs", ... }
    purchase_timeline:       { objective: "NOT_SHARED", ... }
    purchase_purpose:        { objective: "NOT_SHARED", ... }
    location_match:          { objective: "MISMATCH", ... }
    customer_location_pref:  { subjective: "Banerjapur", ... }
  }
  "Next Action and Contact Preference": {
    preferred_next_action:    { objective: "CONSULTANT_CALL", ... }
    preferred_contact_channel:{ objective: "NOT_ASKED", ... }
  }
  "Follow-Up Schedule": {
    followup_schedule: { subjective: "tomorrow noon", ... }
  }
  "Compliance": {
    do_not_call:              { objective: "NO", ... }
    language_support_required:{ objective: "NO", ... }
  }
  "Summary": {
    call_summary: { subjective: "Customer is actively looking...", ... }
  }
}

Parsing rules:
- Enum fields  → read .objective → sanitizeEnum() → null if invalid
- Free text    → read .subjective → store as-is
- call_summary → read .subjective → stored in Call.summary
```

---

## 8. API Reference

All requests must include `Authorization: Bearer <JWT>`, except `/webhooks/*`.

### Auth

```
POST /api/auth/register    { tenantName, email, password, name }
POST /api/auth/login       { email, password }
GET  /api/auth/profile     (authenticated)
```

### Campaigns

```
GET    /api/campaigns
POST   /api/campaigns                   { name, description, assistantId, brochureId?,
                                           variables?, defaultRetryConfig? }
GET    /api/campaigns/:id
PATCH  /api/campaigns/:id
POST   /api/campaigns/:id/parse-leads   (multipart — dry-run, returns stats WITHOUT saving)
GET    /api/campaigns/:id/stats         # aggregates across all batches
GET    /api/campaigns/:id/performance
```

### Batches

```
POST   /api/campaigns/:id/batches                    # Upload CSV + create Bolna Batch
GET    /api/campaigns/:id/batches                    # List all batches
GET    /api/campaigns/:id/batches/:batchId           # Get batch details
POST   /api/campaigns/:id/batches/:batchId/run       # Schedule at now + 2 min
POST   /api/campaigns/:id/batches/:batchId/schedule  # Schedule at specific time
POST   /api/campaigns/:id/batches/:batchId/stop      # Halt batch
POST   /api/campaigns/:id/batches/:batchId/resume    # Branch remaining PENDING to new batch
DELETE /api/campaigns/:id/batches/:batchId           # Hard delete
GET    /api/campaigns/:id/batches/:batchId/stats     # Batch-specific statistics
```

### Calls

```
GET  /api/calls/stats          ?campaignId=&leadId=&batchId=
GET  /api/calls                ?campaignId=&leadId=&batchId=&status=&disposition=
                                &leadTemperature=&dateFrom=&dateTo=&sortBy=&sortOrder=
                                &page=&limit=
GET  /api/calls/:id
GET  /api/calls/:id/transcript
```

### Leads

```
GET  /api/leads/stats          ?campaignId=&batchId=
GET  /api/leads                ?campaignId=&batchId=&status=&doNotCall=&leadTemperature=
                                &dateFrom=&dateTo=&sortBy=&sortOrder=&page=&limit=
GET  /api/leads/:id
```

### Dashboard

```
GET  /api/dashboard/overview
GET  /api/dashboard/activity
GET  /api/dashboard/campaigns
```

### Assistants

```
GET   /api/assistants
POST  /api/assistants
GET   /api/assistants/:id
PATCH /api/assistants/:id
```

### Brochures

```
POST /api/brochures/extract    (multipart — PDF)
POST /api/brochures/save
GET  /api/brochures
GET  /api/brochures/:id
POST /api/brochures/:id/confirm
```

### Webhooks

```
POST /webhooks/bolna          (no auth — per-call lifecycle + extraction logic)
POST /webhooks/bolna-batch    (no auth — batch completion lifecycle + stat reconciliation)
```

---

## 9. Key Business Rules & Gotchas

### 9.1 Lead Deduplication

- `@@unique([phone, campaignId])` in schema — enforced **across batches**, not per-batch.
- Phones are normalized to **+91 E.164 before** dedup checks.
- Backend checks existing phones before insert; `createMany({ skipDuplicates: true })` as a
  race-condition safety net.
- Cross-batch dedup is **enabled by default**; can be disabled for dev/testing via
  `SKIP_CROSS_BATCH_DEDUP=true`.
- Frontend shows a duplicate report after upload (via the `parse-leads` dry-run).

### 9.2 Indian Phone Enforcement

Any number that cannot be parsed into a 10-digit base or `+91` E.164 string is **dropped**
during the upload phase. This is intentional — the platform targets the Indian market only.

### 9.3 Do Not Call

- If `extracted_data.Compliance.do_not_call.objective === "YES"`: `Lead.doNotCall = true`.
- New batch creation / dispatch skips leads where `doNotCall = true`.
- Displayed as a red "DNC" badge in `LeadsTable` and on the lead detail page.

### 9.4 CallAnalysis Upsert

Because retries fire multiple terminal webhooks for the same lead, `saveCallAnalysis()` uses
a Prisma **`upsert`** keyed on `callId`, never `create`.

### 9.5 Queued/Scheduled Webhooks Are Ignored

Bolna sends `queued` and `scheduled` per-call webhooks before dispatch actually happens. We
**ignore both** — a `Call` row is only created/updated once status reaches `initiated` or
`ringing`. This prevents DB clutter if a batch is stopped before dispatch.

### 9.6 Brochure Confirmation

- A brochure must have `isConfirmed = true` before it can be linked to a campaign.
- Campaign creation validates this on the backend.

### 9.7 Call Summary Source

- `Call.summary` = `extracted_data.Summary.call_summary.subjective`.
- Bolna's own `payload.summary` string is ignored entirely.

### 9.8 Qualification Definition

Qualifying dispositions (used across dashboard + stats):

```
QUALIFIED_CONSULTANT_FOLLOWUP
SITE_VISIT_INTEREST
INTERESTED_SEND_DETAILS
INTERESTED_GENERAL
```

Disqualifying dispositions:

```
NOT_INTERESTED
DO_NOT_CALL
WRONG_NUMBER
ALREADY_PURCHASED
BROKER
CALL_ENDED_ABUSIVE
```

### 9.9 Qualified Leads Filtering

- Frontend Quick Action cards link to `/campaigns/:id/calls?leadTemperature=HOT,WARM`.
- Backend supports `leadTemperature` filter on both `GET /api/leads` and `GET /api/calls`.
- Comma-separated, e.g. `?leadTemperature=HOT,WARM`.
- For leads: filters via `calls.some.callAnalysis.leadTemperature { in: [...] }`.
- For calls: filters via `callAnalysis.leadTemperature { in: [...] }` directly.
- Frontend displays an amber filter chip on filtered pages with a clear (X) button.

### 9.10 Campaign / Batch Counter Behaviour

- `calledLeads` — incremented on every completed call (webhook), on **both** `LeadBatch` and
  parent `Campaign` in a single transaction (`incrementTerminalStats()`).
- `failedLeads` — incremented on FAILED calls (webhook), same dual-increment.
- `completedLeads` — incremented when a call reaches a terminal state (represents "call
  finished," not "positive outcome").
- `totalLeads` — incremented on successful CSV import (per batch, then rolled up to campaign).
- On batch completion, `reconcileBatchStats()` fetches Bolna's own execution list and
  reconciles counters as a safety net.

### 9.11 Performance Overview Metrics

Calculated on-the-fly from relational tables (`CallAnalysis`, `Call`, `Lead`), aggregated
across all of a campaign's batches:

| Metric                 | Source Fields                                      | Extraction Logic / Aggregation                                                             |
| ---------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Hot Leads**          | `CallAnalysis.leadTemperature`                      | Count of records strictly equal to `HOT`                                                    |
| **Callbacks**          | `CallAnalysis.preferredNextAction`                  | Count where action is `CONSULTANT_CALL` or `FOLLOWUP_CALL`                                  |
| **Site Visits**        | `CallAnalysis.disposition` / `preferredNextAction`  | Count where disposition is `SITE_VISIT_INTEREST` OR next action is `SITE_VISIT`             |
| **DNC**                | `CallAnalysis.doNotCall`                            | Count of records flagged `YES` in extraction data                                           |
| **Total Cost**         | `Call.cost`                                         | Sum of call costs (stored in cents, divided by 100 for dollars)                             |
| **Cost Per Lead**      | Computed                                            | `(totalCost / 100) / campaign.calledLeads`                                                  |
| **Qualification Rate** | `CallAnalysis.disposition`                          | Count of qualifying dispositions / total calls with any disposition                         |

---

## 10. Enums Reference

### Disposition (CallAnalysis)

```
INTERESTED_SEND_DETAILS        Customer agreed to receive details
QUALIFIED_CONSULTANT_FOLLOWUP  Customer agreed to consultant callback
SITE_VISIT_INTEREST            Customer wants site visit
INTERESTED_GENERAL             Interested, no specific next step
FOLLOWUP_REQUESTED             Customer asked to be called back later
NOT_INTERESTED                 Customer declined
DO_NOT_CALL                    Customer asked not to be contacted
WRONG_NUMBER                   Reached wrong person
ALREADY_PURCHASED              Customer already bought property
BROKER                         Customer is a broker/channel partner
LANGUAGE_CALLBACK_REQUIRED     Needs callback in another language
CALL_ENDED_BY_CUSTOMER         Customer hung up abruptly
CALL_ENDED_ABUSIVE             Abusive call
NO_RESPONSE                    No response from customer
CALL_DROPPED                   Call disconnected unexpectedly
```

### LeadTemperature

```
HOT            Site visit, booking, buying within 3 months
WARM           Interested, agreed to callback, shared requirements
NURTURE        Open but not ready, timeline beyond 1 year
COLD           Not interested, DNC, already purchased
NOT_APPLICABLE Wrong number, broker, dropped, no conversation
```

### LeadStatus

```
PENDING        Not yet called
CALLING        Call in progress
CALLED         Call completed (status after completed webhook)
NO_ANSWER      No answer or busy
FAILED         Call or system failure
```

### CallStatus

```
PENDING    Not yet initiated
CALLING    In progress
COMPLETED  Finished successfully
FAILED     Error
NO_ANSWER  Lead did not answer
BUSY       Line was busy
```

### BatchStatus

```
CREATED    Batch record + leads created, not yet dispatched to Bolna
SCHEDULED  Dispatched to Bolna with a scheduled_at time, awaiting first webhook
RUNNING    First call webhook received, actively dispatching/executing
STOPPED    Manually halted; in-flight calls allowed to finish, rest reverted to PENDING
COMPLETED  No active leads (PENDING/CALLING) remain
FAILED     Batch-level failure (e.g. Bolna API rejection)
```

### CampaignStatus

```
DRAFT      No batches dispatched yet
RUNNING    At least one batch is SCHEDULED or RUNNING
COMPLETED  All batches COMPLETED
FAILED     Batch-level failure propagated up
```

### LocationMatch

```
MATCH          Customer's preferred location matches project
MISMATCH       Location mismatch
NOT_ASKED      Location not discussed
NOT_MENTIONED  AI returned this — valid enum value
```

### PurchaseTimeline

```
WITHIN_3_MONTHS / WITHIN_6_MONTHS / WITHIN_1_YEAR / AFTER_1_YEAR / FLEXIBLE / NOT_SHARED
```

### PurchasePurpose

```
OWN_USE / INVESTMENT / BOTH / NOT_SHARED
```

### PreferredNextAction

```
SEND_DETAILS / CONSULTANT_CALL / SITE_VISIT / FOLLOWUP_CALL / NONE
```

### ContactChannel

```
WHATSAPP / EMAIL / NOT_ASKED
```

### ExtractionFlag

```
YES / NO
```

---

## 11. Environment Variables

### Backend (`express-backend/.env`)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/voice-agent-mvp
JWT_SECRET=your-secret-key-min-32-chars

BOLNA_API_KEY=your-bolna-api-key
BOLNA_API_URL=https://api.bolna.ai

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Webhook base (for Bolna batch callbacks — e.g. ngrok in dev)
WEBHOOK_BASE_URL=https://your-ngrok-url.ngrok.io

# Developer testing only
SKIP_CROSS_BATCH_DEDUP=false
```

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## 12. Known Patterns

### Adding a new backend endpoint

1. Add method to `*.service.ts`
2. Add handler to `*.controller.ts`
3. Register route in `*.routes.ts`
   - If route is `/stats` or similar fixed path, register BEFORE `/:id`
4. Add type to `src/types/bolna.types.ts` or backend types if needed

### Adding a new frontend API call

1. Add function to `src/lib/api/*.ts`
2. Add hook to `src/hooks/use*.ts`
3. Add type to `src/types/index.ts` (or `types/batch.ts` if batch-related, then re-export)
4. Use hook in page/component

### Adding a new batch-related feature

1. Add method to `batch.service.ts` (talks to `bolnaClient` batch methods + `fileStorage`)
2. Add handler to `batch.controller.ts`
3. Register route in `batch.routes.ts` (mounted at `/api/campaigns/:id/batches`)
4. Add/extend types in `bolna.types.ts` (backend) and `types/batch.ts` (frontend)
5. Add hook to `useBatches.ts` + function to `lib/api/batches.ts`
6. Surface in `<BatchList />` / `<BatchActions />`

### Adding a new extraction field from Bolna

1. Add to `BolnaExtractedData` interface in `bolna.types.ts`
2. Add to `ParsedCallAnalysis` interface in `bolna.types.ts`
3. Add field to `CallAnalysis` model in `schema.prisma`
4. If enum: add enum to schema + add to sanitizer constants in `webhook.handler.ts`
5. Add parsing logic in `parseExtractionData()` in `webhook.handler.ts`
6. Add to `CallAnalysis` interface in frontend `types/index.ts`
7. Run `prisma migrate dev` + `prisma generate`
8. Display in `calls/[id]/page.tsx` CallAnalysisSection

### Typography Standard

- Root font-size: **16px** (set in `globals.css` on `html`)
- Default body text: **`text-base`** (1rem = 16px)
- `text-sm` (14px): secondary labels, table headers, sidebar nav only
- `text-xs` (12px): badges, timestamps, captions only
- Never use `text-sm` as default body text — always `text-base`

### Prisma schema change checklist

```
1. Edit prisma/schema.prisma
2. npx prisma migrate dev --name description_of_change
3. npx prisma generate (stop server first on Windows — EPERM issue)
4. Restart dev server
```

> ⚠️ On Windows: stop the Express server before running `prisma generate`. The DLL file is
> locked by Node.js and cannot be overwritten while running.

---

## 13. Architecture Decision Log

| #   | Decision                                                                          | Rationale                                                                                            |
| --- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| A1  | Use Bolna Batch API instead of a custom BullMQ/Redis queue                        | Eliminates server-side dispatch fragility; Bolna handles concurrency, retries, scheduling natively    |
| A2  | Keep a single-call `POST /call` for the "Test Run" feature                        | Devs/users need instant call testing without the 2-min Bolna batch minimum                            |
| A3  | Cloudinary for file storage (original + transformed CSVs)                         | Persistent, CDN-backed, no local disk dependency                                                       |
| A4  | Indian-only phone validation (+91 E.164)                                          | Target audience is exclusively Indian real estate                                                      |
| A5  | Single `Call` record per lead per batch with `callHistory` JSON                   | Avoids DB bloat from retry rows; full audit trail kept in JSON array                                   |
| A6  | `completedLeads` reflects call completion, not outcome quality                    | Semantic correctness — "completed" means the call finished, not that the outcome was positive          |
| A7  | Campaign status simplified: DRAFT/RUNNING/COMPLETED/FAILED                        | Scheduling and pausing are handled at the batch level                                                  |
| A8  | Resume = create new batch from remaining PENDING leads                            | Bolna has no resume API; keeps a clean separation of history                                           |
| A9  | Cross-batch dedup enforced by default, dev toggle available                       | Prevents calling the same lead twice across uploads; toggle exists for testing                         |
| A10 | Retry config precedence: batch override → campaign default → disabled             | Hierarchical UX; user can set a sensible default once at campaign level                                |
| A11 | Normalize phones to E.164 *before* dedup checks                                   | Avoids bypass bugs where `9876543210` doesn't match `+919876543210` already in the DB                  |
| A12 | Webhooks: `queued` ignores Call creation; `stopped` reverts Lead to `PENDING`      | Prevents ghost calls in the DB; ensures stopped calls can be cleanly resumed into new batches           |
| A13 | Fixed interval selections for retries (1hr, 4hr, 24hr)                            | Better UX than manual input; `max_retries` auto-derived from selected intervals                        |

---

## 14. Deferred / Not Yet Implemented

- SUPER_ADMIN with nullable `tenantId`
- Email verification flow
- Webhook signature verification (security)
- Domain error classes (`AppError`, `NotFoundError`, etc.)
- Repository pattern (separate DB layer from business logic)
- Zod validation on all backend routes
- Structured logging (Winston/Pino)
- Rate limiting on API routes

---

This file covers every layer of the system as it currently stands. Any AI agent reading this
can:

- Navigate to the exact file for any feature, including the `batches` module
- Understand data flow end to end (parse preview, batch creation, scheduling, stop/resume,
  auto-retry)
- Know which enums exist and their valid values
- Follow the correct patterns for extending the system, including batch-related features
- Avoid known pitfalls (route order, Windows EPERM, string rates, Bolna resume limitations,
  ghost-call webhooks, upsert-not-create on `CallAnalysis`)