# V1 Migration Tracker — MVP → Bolna-Native Batch Architecture

> **Last Updated:** Phase 6 Completed, Phase 7 Pending
> **Migration Lead:** AI Agent + Dev Team
> **Target Completion:** TBD
> **Strategy:** Bolna-Native Batch API (delegate queue/retry/schedule to Bolna)

---

## Architecture Decision Log

| #   | Decision                                                                      | Rationale                                                                                          | Date      |
| --- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------- |
| A1  | Use Bolna Batch API instead of custom BullMQ/Redis queue                      | Eliminates server-side dispatch fragility; Bolna handles concurrency, retries, scheduling natively | Confirmed |
| A2  | Keep single-call `POST /call` for "Test Run" feature                          | Devs/users need instant call testing without 2-min Bolna batch minimum                             | Confirmed |
| A3  | Cloudinary for file storage (original + transformed CSVs)                     | Persistent, CDN-backed, no local disk dependency                                                   | Confirmed |
| A4  | Indian-only phone validation (+91 E.164)                                      | Target audience is exclusively Indian real estate                                                  | Confirmed |
| A5  | Single Call record per lead per batch with `callHistory` JSON                 | Avoids DB bloat from retry rows; full audit trail in JSON array                                    | Confirmed |
| A6  | `successLeads` → `completedLeads` rename                                      | Semantic correctness — "completed" means call finished, not "successful outcome"                   | Confirmed |
| A7  | Campaign status simplified: DRAFT/RUNNING/COMPLETED/FAILED                    | SCHEDULED and PAUSED delegated to batch level                                                      | Confirmed |
| A8  | Resume = create new batch from remaining PENDING leads                        | Bolna has no resume API; clean separation of history                                               | Confirmed |
| A9  | Cross-batch dedup enforced by default, dev toggle available                   | Prevents calling same lead twice across uploads; toggle for testing                                | Confirmed |
| A10 | Retry config: campaign default → batch override → disabled                    | Hierarchical UX; user can set once at campaign level                                               | Confirmed |
| A11 | Normalize phones to E.164 _before_ dedup checks                               | Fixes bypass bugs where `9876543210` didn't match `+919876543210` in DB                            | Confirmed |
| A12 | Webhooks: `queued` ignores Call creation, `stopped` reverts Lead to `PENDING` | Prevents ghost calls in DB; ensures stopped calls can be cleanly resumed into new batches          | Confirmed |
| A13 | Fixed interval selections for Retries (1hr, 4hr, 24hr)                        | Better UX than manual input; `max_retries` auto-derived from selected intervals                    | Confirmed |

---

## Phase Tracker

### Phase 1: Schema + Migration

| Task                                     | Status  | Notes                                              |
| ---------------------------------------- | ------- | -------------------------------------------------- |
| Add `BatchStatus` enum                   | ✅ Done | CREATED/SCHEDULED/RUNNING/STOPPED/COMPLETED/FAILED |
| Add `LeadBatch` model                    | ✅ Done | Full model with stats, retry config, file URLs     |
| Add `batchId` FK to `Lead`               | ✅ Done | Nullable for zero-disruption migration             |
| Add `batchId` + `callHistory` to `Call`  | ✅ Done | JSON array for retry tracking                      |
| Rename `successLeads` → `completedLeads` | ✅ Done | Campaign + LeadBatch models                        |
| Add `defaultRetryConfig` to Campaign     | ✅ Done | JSON field                                         |
| Remove `scheduledAt` from Campaign       | ✅ Done | Moved to LeadBatch                                 |
| Simplify `CampaignStatus` enum           | ✅ Done | Removed SCHEDULED, PAUSED                          |
| Run `prisma migrate dev`                 | ✅ Done | Requires dev to run locally                        |
| Run `prisma generate`                    | ✅ Done | Stop Express first on Windows                      |

### Phase 2: Types + Utilities

| Task                                               | Status  | Notes                                                               |
| -------------------------------------------------- | ------- | ------------------------------------------------------------------- |
| Add batch types to `bolna.types.ts`                | ✅ Done | BolnaBatchResponse, BolnaExecution, RetryConfig, CallHistoryItem    |
| Add `FileStorageService` (Cloudinary)              | ✅ Done | `src/utils/fileStorage.ts`                                          |
| Add `CSVTransformer`                               | ✅ Done | `src/utils/csvTransformer.ts` — phone→contact_number, Indian filter |
| Extend `bolnaClient` with batch methods            | ✅ Done | create, schedule, stop, get, getExecutions, delete                  |
| Install `cloudinary` + `streamifier` + `form-data` | ✅ Done | `npm i cloudinary streamifier form-data`                            |
| Add env vars: CLOUDINARY\_\*                       | ✅ Done | CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET    |

### Phase 3: Batch Service + Routes

| Task                                        | Status  | Notes                                                        |
| ------------------------------------------- | ------- | ------------------------------------------------------------ |
| Refactor `parseLeads` for cross-batch dedup | ✅ Done | Strict Indian E.164 phone filter + campaign-wide dedup fixed |
| Create `batch.service.ts`                   | ✅ Done | Full CRUD + lifecycle (run/schedule/stop/resume)             |
| Create `batch.controller.ts`                | ✅ Done | Request handlers for all batch endpoints                     |
| Create `batch.routes.ts`                    | ✅ Done | Nested under `/api/campaigns/:id/batches`                    |
| Mount batch routes in campaign.routes.ts    | ✅ Done | `router.use("/:id/batches", batchRoutes)`                    |
| Deprecate old upload/start/pause endpoints  | ✅ Done | Keep functional but mark deprecated (410 responses)          |

### Phase 4: Webhook Refactor

| Task                                            | Status  | Notes                                                       |
| ----------------------------------------------- | ------- | ----------------------------------------------------------- |
| Update per-call webhook: batch correlation      | ✅ Done | `resolveCallRecord()` matches by batch_id + phone           |
| Add `callHistory` append logic for retries      | ✅ Done | Uses `batch_run_details.retried`, upserts CallAnalysis      |
| Update stat increments (batch + campaign)       | ✅ Done | `incrementTerminalStats()` dual-increments                  |
| Create batch webhook handler                    | ✅ Done | `handleBolnaBatchWebhook()` at POST `/webhooks/bolna-batch` |
| Update campaign completion check                | ✅ Done | `checkBatchAndCampaignCompletion()` checks all batches      |
| Rename successLeads → completedLeads in webhook | ✅ Done | In `incrementTerminalStats()`                               |
| Add stats reconciliation from Bolna             | ✅ Done | `reconcileBatchStats()` fetches executions on completion    |
| Backward compat for MVP calls                   | ✅ Done | Falls back to bolnaCallId match when no batch_id            |
| Handle Stopped/Canceled call lifecycle          | ✅ Done | Reverts Lead to `PENDING`, marks aborted Calls as `FAILED`  |

### Phase 5: Stats + Cleanup

| Task                                            | Status  | Notes                                                                          |
| ----------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| Update campaign stats to aggregate from batches | ✅ Done | Campaign detail response now includes nested batches with performance counters |
| Update dashboard queries                        | ✅ Done | Global rename of `successLeads` to `completedLeads` applied                    |
| Remove `processLeads()` dispatch loop           | ✅ Done | Obsolete loop completely removed from CampaignService                          |
| Remove campaign-level pause/cancel-schedule     | ✅ Done | Handlers replaced with 410 Deprecation alerts                                  |
| Update performance stats                        | ✅ Done | Replaced `successLeads` with `completedLeads` inside conversion formulas       |

### Phase 6: Frontend

| Task                                        | Status  | Notes                                               |
| ------------------------------------------- | ------- | --------------------------------------------------- |
| Add batch types to `types/index.ts`         | ✅ Done | Re-exported from modular `batch.ts`                 |
| Add batch API calls + hooks                 | ✅ Done | `batchesApi`, `useBatches`, etc.                    |
| Add Batches section to campaign detail page | ✅ Done | `<BatchList>` integrated                            |
| Batch actions: Run, Schedule, Stop, Resume  | ✅ Done | Fixed UI variants and mutation loading states       |
| Retry config UI (campaign + batch)          | ✅ Done | Reusable `<RetryConfigEditor>` with fixed intervals |
| Update upload modal for batch creation      | ✅ Done | Uses new `batchesApi.create`                        |
| Rename successLeads → completedLeads in UI  | ✅ Done | Complete                                            |
| Add "Attempts" column to CallsTable         | ✅ Done | Derived from `callHistory.length`                   |

### Phase 7: Documentation

| Task                                 | Status         | Notes            |
| ------------------------------------ | -------------- | ---------------- |
| Update AGENT.md with V1 architecture | 🔄 Pending     | Ready to execute |
| Update API reference                 | ⬜ Not Started |                  |
| Write batch upload guide             | ⬜ Not Started |                  |

---

## Breaking Changes

| Change                                           | Impact                   | Migration Path                                 |
| ------------------------------------------------ | ------------------------ | ---------------------------------------------- |
| `CampaignStatus` loses SCHEDULED, PAUSED         | Frontend badges, filters | Update badge components, remove filter options |
| `successLeads` → `completedLeads`                | API responses, dashboard | Rename in all frontend hooks + components      |
| `Campaign.scheduledAt` removed                   | Campaign detail page     | Read from `LeadBatch.scheduledAt` instead      |
| `POST /campaigns/:id/upload` deprecated          | Upload modal             | Replace with `POST /campaigns/:id/batches`     |
| `POST /campaigns/:id/start` deprecated           | Campaign actions         | Replace with batch-level run/schedule          |
| `POST /campaigns/:id/pause` deprecated           | Campaign actions         | Replace with batch-level stop                  |
| `POST /campaigns/:id/cancel-schedule` deprecated | Campaign actions         | Replace with batch-level stop                  |

---

## New Environment Variables

```env
# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Webhook (for Bolna batch callbacks)
WEBHOOK_BASE_URL=https://your-ngrok-url.ngrok.io

# Developer Testing
SKIP_CROSS_BATCH_DEDUP=false
```
