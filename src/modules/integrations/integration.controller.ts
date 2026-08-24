import { Response, NextFunction } from "express";
import { ApiKeyRequest } from "../../middleware/apiKeyAuth";
import integrationService from "./integration.service";

/**
 * POST /api/integrations/instant-call
 *
 * Triggered by tenant's external backend when a lead form is submitted.
 * Authenticates via x-api-key header (NOT JWT).
 *
 * Request body:
 *   phone       (required) — customer phone number
 *   assistantId (required) — which AI voice agent to use
 *   name        (optional) — customer name
 *   email       (optional) — customer email
 *   variables   (optional) — key-value pairs passed to Bolna (agent_name, builder_name, etc.)
 *   source      (optional) — tracking label (e.g. "website_form", "facebook_lead")
 */
export const instantCall = async (
  req: ApiKeyRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tenantId = req.tenant!.id;
    const { phone, name, email, assistantId, variables, source } = req.body;

    // ── Validation ─────────────────────────────────────────────────────────
    if (!phone) {
      res.status(400).json({
        success: false,
        error: "'phone' is required.",
      });
      return;
    }

    if (!assistantId) {
      res.status(400).json({
        success: false,
        error:
          "'assistantId' is required. Pass the ID of the AI voice agent to use.",
      });
      return;
    }

    // ── Execute ────────────────────────────────────────────────────────────
    const result = await integrationService.instantCall(tenantId, {
      phone,
      name,
      email,
      assistantId,
      variables,
      source,
    });

    res.status(201).json({
      success: true,
      message: "Call initiated successfully.",
      data: result,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to initiate call";

    // Map known business errors to appropriate HTTP status codes
    if (message.includes("Do-Not-Call")) {
      res.status(403).json({ success: false, error: message });
      return;
    }

    if (message.includes("already has an active lead")) {
      res.status(409).json({ success: false, error: message });
      return;
    }

    if (message.includes("not found")) {
      res.status(404).json({ success: false, error: message });
      return;
    }

    next(error);
  }
};