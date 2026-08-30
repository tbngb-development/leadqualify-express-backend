# Brochure Modules Migration Log

**Status:** ✅ Completed
**Date:** 2026-08
**Scope:** Migration of project Brochures (`brochures`) to Modular Clean Architecture.

---

## Route Maps

| Old Route                    | New Route                        | Scope         | Notes                               |
| ---------------------------- | -------------------------------- | ------------- | ----------------------------------- |
| `POST /api/brochure/extract` | `POST /api/v1/brochures/extract` | Tenant scoped | Multipart PDF review generation     |
| `POST /api/brochure/save`    | `POST /api/v1/brochures/save`    | Tenant scoped | Confirmed payload saving            |
| `GET /api/brochure`          | `GET /api/v1/brochures`          | Tenant scoped |                                     |
| `GET /api/brochure/:id`      | `GET /api/v1/brochures/:id`      | Tenant scoped | Mapped Campaign refs                |
| `PATCH /api/brochure/:id`    | `PATCH /api/v1/brochures/:id`    | Tenant scoped | Editable field mappings             |
| `DELETE /api/brochure/:id`   | `DELETE /api/v1/brochures/:id`   | Tenant scoped | Prevent remove if bound to Campaign |

---

## Key Refactoring Improvements

1. **Transactional Integrity Verification:** Prevents delete cascades on active brochures by checking campaign dependencies before purging records.
2. **Explicit Type Safety Mapping:** Handled all update properties using type-safe optional Zod schema checks, filtering inputs to keep null values from overwriting active configurations.
3. **Decoupled Integrations:** Fully separated PDF text parsed evaluations mapping their configurations cleanly away from controllers.
