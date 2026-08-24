import prisma from "../../config/database";
import campaignService from "../campaigns/campaign.service";

// ─── Constants ────────────────────────────────────────────────────────────────
const INSTANT_CAMPAIGN_NAME = "__instant_callbacks__";

export class IntegrationService {
  // ─── Instant Call ──────────────────────────────────────────────────────────
  // Triggered by tenant's external backend when a form is submitted.
  // Creates a lead + fires a Bolna call immediately. No CSV, no campaign setup.
  async instantCall(
    tenantId: string,
    data: {
      phone: string;
      name?: string;
      email?: string;
      assistantId: string;
      variables?: Record<string, string>;
      source?: string;
    },
  ) {
    // ── 1. Validate assistant exists and belongs to this tenant ──────────────
    const assistant = await prisma.assistant.findFirst({
      where: { id: data.assistantId, tenantId },
    });

    if (!assistant) {
      throw new Error(
        "Assistant not found. Make sure the assistantId belongs to your account.",
      );
    }

    // ── 2. Normalize phone ───────────────────────────────────────────────────
    const phone = data.phone.trim();
    if (!phone) {
      throw new Error("Phone number is required.");
    }

    // ── 3. Check Do-Not-Call list ────────────────────────────────────────────
    const dncLead = await prisma.lead.findFirst({
      where: {
        tenantId,
        phone,
        doNotCall: true,
      },
      select: { id: true },
    });

    if (dncLead) {
      throw new Error(
        "This phone number is on the Do-Not-Call list. Call blocked.",
      );
    }

    // ── 4. Check for active duplicate (same phone already being called) ──────
    // const activeLead = await prisma.lead.findFirst({
    //   where: {
    //     tenantId,
    //     phone,
    //     status: { in: ["PENDING", "CALLING"] },
    //   },
    //   select: { id: true, status: true },
    // });

    // if (activeLead) {
    //   throw new Error(
    //     `This phone number already has an active lead (status: ${activeLead.status}). ` +
    //       "Wait for the current call to complete before retrying.",
    //   );
    // }

    // ── 5. Get or create the instant callbacks campaign ──────────────────────
    // This avoids any schema changes. The campaign acts as a bucket for all
    // instant calls. Webhook handler increments its counters normally.
    const campaign = await this.getOrCreateInstantCampaign(
      tenantId,
      data.assistantId,
    );

    // ── 6. Create Lead record ────────────────────────────────────────────────
    const lead = await prisma.lead.create({
      data: {
        name: data.name ?? null,
        phone,
        email: data.email ?? null,
        tenantId,
        campaignId: campaign.id,
        status: "PENDING",
        metadata: {
          source: data.source ?? "instant_api",
          createdAt: new Date().toISOString(),
        },
      },
    });

    // Increment campaign totalLeads counter
    await prisma.campaign.update({
      where: { id: campaign.id },
      data: { totalLeads: { increment: 1 } },
    });

    // ── 7. Fire the call ─────────────────────────────────────────────────────
    // Reuses the exact same makeCall() logic as campaign-based calls.
    // Bolna dispatch, webhook lifecycle, CallAnalysis — all work identically.
    const callVariables: Record<string, string> = {
      agent_name: data.variables?.agent_name ?? "Agent",
      builder_name: data.variables?.builder_name ?? "",
      ...data.variables,
    };

    const callRecord = await campaignService.makeCall(
      tenantId,
      campaign.id,
      { id: lead.id, phone: lead.phone, name: lead.name },
      assistant.bolnaId,
      callVariables,
    );

    return {
      leadId: lead.id,
      callId: callRecord.id,
      bolnaCallId: callRecord.bolnaCallId,
      status: callRecord.status,
      campaignId: campaign.id,
    };
  }

  // ─── Get or Create Instant Campaign ────────────────────────────────────────
  // One hidden campaign per tenant+assistant combo. Created automatically
  // on first instant call. Reused for all subsequent instant calls.
  private async getOrCreateInstantCampaign(
    tenantId: string,
    assistantId: string,
  ) {
    let campaign = await prisma.campaign.findFirst({
      where: {
        tenantId,
        name: INSTANT_CAMPAIGN_NAME,
        assistantId,
      },
    });

    if (!campaign) {
      campaign = await prisma.campaign.create({
        data: {
          name: INSTANT_CAMPAIGN_NAME,
          description:
            "Auto-created campaign for instant callback API calls. " +
            "All real-time form-triggered calls are grouped here.",
          tenantId,
          assistantId,
          status: "RUNNING",
          startedAt: new Date(),
        },
      });

      console.log(
        `[Integration] Created instant campaign ${campaign.id} for tenant ${tenantId}`,
      );
    }

    return campaign;
  }
}

export default new IntegrationService();