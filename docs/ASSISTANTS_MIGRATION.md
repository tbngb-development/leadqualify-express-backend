# Assistants Module Migration Log

**Status:** ✅ Completed
**Date:** 2026-08
**Scope:** Complete refactoring of system Assistants (`assistants`) to the Clean Architecture standard.

---

## Route Maps

| Old Route                          | New Route                             | Scope         | Notes                                            |
| ---------------------------------- | ------------------------------------- | ------------- | ------------------------------------------------ |
| `GET /api/assistants/bolna-agents` | `GET /api/v1/assistants/bolna-agents` | Tenant scoped | For registration dropdown                        |
| `GET /api/assistants`              | `GET /api/v1/assistants`              | Tenant scoped |                                                  |
| `GET /api/assistants/:id`          | `GET /api/v1/assistants/:id`          | Tenant scoped | Verified prompt variable extraction              |
| `POST /api/assistants/register`    | `POST /api/v1/assistants/register`    | Tenant scoped | OWNER/ADMIN, verifies on Bolna first             |
| `PATCH /api/assistants/:id`        | `PATCH /api/v1/assistants/:id`        | Tenant scoped | OWNER/ADMIN                                      |
| `POST /api/assistants/:id/sync`    | `POST /api/v1/assistants/:id/sync`    | Tenant scoped | OWNER/ADMIN                                      |
| `DELETE /api/assistants/:id`       | `DELETE /api/v1/assistants/:id`       | Tenant scoped | OWNER/ADMIN, prevents deleting referenced agents |

---

## Key Refactoring Improvements

1. **Clean Decoupled Architecture:** Extracted core logic from fat controllers and services into atomic, single-responsibility use cases.
2. **Bolna Verification Sandbox:** Decoupled external API verification by abstracting remote checks behind a clean `BolnaAgentProvider` port.
3. **Robust Input Validation:** Replaced basic manual checks in the controller with strict validation via Zod schemas, enforcing friendly name constraints and strict formats before execution.
4. **Prisma Cascade Cleanups:** Safely guards assistant deletions by querying campaign dependency states on the database, raising `AssistantInUseError` dynamically to prevent foreign key errors.
5. **Prompt Analysis Pipeline:** Retained dynamic variable extraction from remote system prompts and first-message configurations by cleanly piping outputs through verified parsing helpers.
