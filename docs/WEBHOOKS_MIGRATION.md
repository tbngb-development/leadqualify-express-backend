# Webhooks Module Migration Log

**Status:** ✅ Completed
**Date:** 2026-08
**Scope:** Complete refactoring of per-call and batch lifecycle public webhook endpoints (`webhooks`) to Modular Clean Architecture.

---

## Route Maps

| Old Route                    | New Route                    | Scope  | Notes                                       |
| ---------------------------- | ---------------------------- | ------ | ------------------------------------------- |
| `POST /webhooks/bolna`       | `POST /webhooks/bolna`       | Public | Handles per-call execution & retry tracking |
| `POST /webhooks/bolna-batch` | `POST /webhooks/bolna-batch` | Public | Batch status synchronization                |

No `/v1` prefix is attached to `/webhooks` endpoints to keep existing registered webhook configurations on Bolna functional.

---

## Key Refactoring Improvements

1. **Transaction-Safe Dual Stats Increments:** Encapsulated batch-level and campaign-level increments into single SQL transaction blocks.
2. **Abstracted Database State:** Decoupled Express payload handlers from direct Prisma context queries using a strict `WebhookRepository` contract.
3. **Robust Sanitization Map:** Standardized out-of-bounds enum sanitizer mappings for extracted data sets (DNC, location matching, configuration specs) to keep unexpected LLM outputs from raising SQL constraints.
