// src/modules/campaigns/campaign.service.ts — FULL REPLACE

import prisma from "../../config/database";
import { bolnaClient } from "../../config/bolna";
import { LeadRow, parseLeadFile } from "../../utils/leadParser";
import brochureService from "../brochure/brochure.service";
import fs from "fs";

export class CampaignService {
  // ─── List ──────────────────────────────────────────────────────────────────
  async list(tenantId: string) {
    return prisma.campaign.findMany({
      where: { tenantId },
      include: {
        assistant: true,
        brochure: {
          select: {
            id: true,
            projectName: true,
            city: true,
            configurations: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // ─── Get ───────────────────────────────────────────────────────────────────
  async get(tenantId: string, id: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id, tenantId },
      include: {
        assistant: true,
        brochure: true,
      },
    });

    if (!campaign) throw new Error("Campaign not found");
    return campaign;
  }

  // ─── Create ────────────────────────────────────────────────────────────────
  async create(
    tenantId: string,
    data: {
      name: string;
      description?: string;
      assistantId: string;
      brochureId?: string; // ← NEW: optional
    },
  ) {
    // Verify assistant belongs to tenant
    const assistant = await prisma.assistant.findFirst({
      where: { id: data.assistantId, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    // Verify brochure belongs to tenant (if provided)
    if (data.brochureId) {
      const brochure = await prisma.brochure.findFirst({
        where: { id: data.brochureId, tenantId },
      });
      if (!brochure) throw new Error("Brochure not found");
      if (!brochure.isConfirmed) {
        throw new Error(
          "Brochure must be confirmed before linking to a campaign",
        );
      }
    }

    return prisma.campaign.create({
      data: {
        name: data.name,
        description: data.description,
        tenantId,
        assistantId: data.assistantId,
        brochureId: data.brochureId ?? null,
      },
      include: {
        assistant: true,
        brochure: {
          select: {
            id: true,
            projectName: true,
            configurations: true,
          },
        },
      },
    });
  }

  // ─── Upload CSV ────────────────────────────────────────────────────────────
  async uploadLeads(tenantId: string, campaignId: string, filePath: string) {
    // ── 1. Verify campaign ownership ──────────────────────────────────────────
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");

    // ── 2. Parse file (auto-detects csv / xls / xlsx) ─────────────────────────
    let rows: LeadRow[];
    try {
      rows = parseLeadFile(filePath);
    } catch (parseError: unknown) {
      // Clean up before throwing
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      const message =
        parseError instanceof Error
          ? parseError.message
          : "Failed to parse file";
      throw new Error(`File parsing failed: ${message}`);
    }

    // ── 3. Validate ────────────────────────────────────────────────────────────
    const validLeads = rows.filter((r) => r.phone && r.phone.trim() !== "");
    const invalidCount = rows.length - validLeads.length;

    if (rows.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error("File is empty — no rows found");
    }

    if (validLeads.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error(
        "No valid leads found — every row is missing a phone number. " +
          "Ensure your file has a column named: phone, Phone, phone_number, or mobile",
      );
    }

    for(let i of validLeads) console.log("Valid lead: ", i)

    // ── 4. Persist leads ───────────────────────────────────────────────────────
    await prisma.lead.createMany({
      data: validLeads.map((row) => ({
        name: row.name,
        phone: row.phone,
        email: row.email,
        company: row.company,
        tenantId,
        campaignId,
        metadata: row as object,
      })),
    });

    // ── 5. Update campaign total ───────────────────────────────────────────────
    await prisma.campaign.update({
      where: { id: campaignId },
      data: { totalLeads: { increment: validLeads.length } },
    });

    // ── 6. Clean up uploaded file ──────────────────────────────────────────────
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return {
      total: rows.length,
      valid: validLeads.length,
      invalid: invalidCount,
    };
  }

  // ─── Start Campaign ──────────────────────────────────────────────────────────
  async start(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: { assistant: true },
    });

    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status === "RUNNING") throw new Error("Already running");

    const leads = await prisma.lead.findMany({
      where: { campaignId, status: "PENDING" },
    });
    if (leads.length === 0) throw new Error("No pending leads found");

    // ── Fetch brochure variable values once — reused for every call ──────────
    let brochureVariables: Record<string, string> | null = null;

    if (campaign.brochureId) {
      const brochureData = await brochureService.getBrochureForPrompt(
        campaign.brochureId,
      );

      if (brochureData) {
        // Build variable map — same shape as variableValues in VAPI
        brochureVariables = brochureService.buildVariableValues(brochureData);
        console.log(
          `[Campaign] Brochure variables ready for campaign: ${campaignId}`,
          Object.keys(brochureVariables),
        );
      }
    }

    await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "RUNNING", startedAt: new Date() },
    });

    // Pass brochure variables into the background process
    this.processLeads(
      tenantId,
      campaignId,
      leads,
      campaign.assistant.bolnaId,
      brochureVariables, // ← pass variable map, not a prompt string
    )
      .then(() => console.log(`[Campaign] ${campaignId} completed`))
      .catch((err) => console.error(`[Campaign] ${campaignId} failed:`, err));

    return {
      message: `Campaign started — ${leads.length} calls queued`,
      totalLeads: leads.length,
      hasBrochure: !!brochureVariables,
      brochureVars: brochureVariables ? Object.keys(brochureVariables) : [],
    };
  }

  // ─── Process Leads ───────────────────────────────────────────────────────────
  private async processLeads(
    tenantId: string,
    campaignId: string,
    leads: { id: string; phone: string; name: string }[],
    bolnaAgentId: string,
    brochureVariables: Record<string, string> | null,
  ) {
    for (const lead of leads) {
      const campaign = await prisma.campaign.findUnique({
        where: { id: campaignId },
      });

      if (campaign?.status !== "RUNNING") {
        console.log(`[Campaign] ${campaignId} paused/stopped`);
        break;
      }

      try {
        await this.makeCall(
          tenantId,
          campaignId,
          lead,
          bolnaAgentId,
          brochureVariables,
        );
      } catch (error) {
        console.error(`[Campaign] Call failed for lead ${lead.id}:`, error);
      }
    }

    const remaining = await prisma.lead.count({
      where: { campaignId, status: "PENDING" },
    });

    if (remaining === 0) {
      await prisma.campaign.update({
        where: { id: campaignId },
        data: { status: "COMPLETED", completedAt: new Date() },
      });
    }
  }

  // ─── Make Single Call ─────────────────────────────────────────────────────────
  async makeCall(
    tenantId: string,
    campaignId: string,
    lead: { id: string; phone: string; name: string },
    bolnaAgentId: string,
    brochureVariables: Record<string, string> | null = null,
  ) {
    await prisma.lead.update({
      where: { id: lead.id },
      data: { status: "CALLING" },
    });

    const callRecord = await prisma.call.create({
      data: {
        tenantId,
        campaignId,
        leadId: lead.id,
        status: "CALLING",
      },
    });

    try {
      const bolnaCall = await bolnaClient.calls.create({
        agent_id: bolnaAgentId,
        recipient_phone_number: lead.phone,
        user_data: {
          customer_name: lead.name,
          ...(brochureVariables ?? {}),
        },
      });

      const callId =
        bolnaCall.id ?? // primary
        bolnaCall.execution_id ?? //Fallback
        bolnaCall.run_id ?? // fallback (same value)
        null;

      console.log(`[Bolna] Resolved callId: ${callId}`);

      await prisma.call.update({
        where: { id: callRecord.id },
        data: {
          bolnaCallId: callId,
          startedAt: new Date(),
        },
      });

      return callRecord;
    } catch (error) {
      await prisma.call.update({
        where: { id: callRecord.id },
        data: { status: "FAILED" },
      });
      await prisma.lead.update({
        where: { id: lead.id },
        data: { status: "FAILED" },
      });
      await prisma.campaign.update({
        where: { id: campaignId },
        data: { failedLeads: { increment: 1 } },
      });
      throw error;
    }
  }

  // ─── Pause ─────────────────────────────────────────────────────────────────
  async pause(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status !== "RUNNING")
      throw new Error("Campaign is not running");

    return prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "PAUSED" },
    });
  }

  // ─── Stats ─────────────────────────────────────────────────────────────────
  async stats(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: {
        assistant: true,
        brochure: {
          select: {
            id: true,
            projectName: true,
            configurations: true,
            startingPrice: true,
          },
        },
      },
    });
    if (!campaign) throw new Error("Campaign not found");

    const leadStats = await prisma.lead.groupBy({
      by: ["status"],
      where: { campaignId },
      _count: true,
    });

    const callStats = await prisma.call.groupBy({
      by: ["status"],
      where: { campaignId },
      _count: true,
    });

    return { campaign, leads: leadStats, calls: callStats };
  }
}

export default new CampaignService();
