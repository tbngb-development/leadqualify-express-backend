// src/modules/campaigns/campaign.service.ts

import prisma from "../../config/database";
import { bolnaClient } from "../../config/bolna";
import { LeadRow, parseLeadFile } from "../../utils/leadParser";
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
      include: { assistant: true, brochure: true },
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
      brochureId?: string;
      variables?: Record<string, string>;
    },
  ) {
    const assistant = await prisma.assistant.findFirst({
      where: { id: data.assistantId, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

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
        brochureId: data.brochureId,
        variables: data.variables,
      },
      include: { assistant: true },
    });
  }

  // ─── Upload Leads ──────────────────────────────────────────────────────────
  async uploadLeads(tenantId: string, campaignId: string, filePath: string) {
    // ── 1. Verify campaign ownership ──────────────────────────────────────────
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");

    // ── 2. Block upload only for FAILED campaigns ─────────────────────────────
    if (campaign.status === "FAILED") {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error(
        "Cannot upload leads to a failed campaign. Please create a new campaign.",
      );
    }

    // ── 3. Parse file ─────────────────────────────────────────────────────────
    let rows: LeadRow[];
    try {
      rows = parseLeadFile(filePath);
    } catch (parseError: unknown) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      const message =
        parseError instanceof Error
          ? parseError.message
          : "Failed to parse file";
      throw new Error(`File parsing failed: ${message}`);
    }

    // ── 4. Validate rows ──────────────────────────────────────────────────────
    const validRows = rows.filter((r) => r.phone && r.phone.trim() !== "");
    const invalidCount = rows.length - validRows.length;

    if (rows.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error("File is empty — no rows found");
    }

    if (validRows.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error(
        "No valid leads found — every row is missing a phone number.",
      );
    }

    // ── 5. Deduplicate against existing leads in this campaign ────────────────
    const incomingPhones = validRows.map((r) => r.phone.trim());

    const existingLeads = await prisma.lead.findMany({
      where: {
        campaignId,
        phone: { in: incomingPhones },
      },
      select: { phone: true },
    });

    const existingPhoneSet = new Set(existingLeads.map((l) => l.phone));

    const newLeads = validRows.filter(
      (r) => !existingPhoneSet.has(r.phone.trim()),
    );
    const duplicateNumbers = validRows
      .filter((r) => existingPhoneSet.has(r.phone.trim()))
      .map((r) => r.phone.trim());

    // ── 6. Insert only new leads ──────────────────────────────────────────────
    if (newLeads.length > 0) {
      await prisma.lead.createMany({
        data: newLeads.map((row) => ({
          name: row.name,
          phone: row.phone.trim(),
          email: row.email,
          company: row.company,
          tenantId,
          campaignId,
          metadata: row as object,
        })),
        skipDuplicates: true, // DB-level safety net for race conditions
      });

      await prisma.campaign.update({
        where: { id: campaignId },
        data: { totalLeads: { increment: newLeads.length } },
      });
    }

    // ── 7. Cleanup ────────────────────────────────────────────────────────────
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return {
      total: rows.length,
      valid: validRows.length,
      imported: newLeads.length,
      duplicates: duplicateNumbers.length,
      invalid: invalidCount,
      duplicateNumbers,
    };
  }

  // ─── Start Campaign ────────────────────────────────────────────────────────
  async start(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: { assistant: true },
    });

    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status === "RUNNING") throw new Error("Already running");

    const leads = await prisma.lead.findMany({
      where: { campaignId, status: "PENDING", doNotCall: false },
    });
    if (leads.length === 0) throw new Error("No pending leads found");

    const campaignVariables =
      (campaign.variables as Record<string, string>) ?? {};

    await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "RUNNING", startedAt: new Date() },
    });

    this.processLeads(
      tenantId,
      campaignId,
      leads,
      campaign.assistant.bolnaId,
      campaignVariables,
    )
      .then(() => console.log(`[Campaign] ${campaignId} completed`))
      .catch((err) => console.error(`[Campaign] ${campaignId} failed:`, err));

    return {
      message: `Campaign started — ${leads.length} calls queued`,
      totalLeads: leads.length,
      variableKeys: Object.keys(campaignVariables),
    };
  }

  // ─── Process Leads — batched concurrent dispatch ───────────────────────────
  private async processLeads(
    tenantId: string,
    campaignId: string,
    leads: { id: string; phone: string; name: string }[],
    bolnaAgentId: string,
    campaignVariables: Record<string, string>,
    batchSize = 50,
  ) {
    for (let i = 0; i < leads.length; i += batchSize) {
      // Check if campaign is still running before each batch
      const campaign = await prisma.campaign.findUnique({
        where: { id: campaignId },
      });

      if (campaign?.status !== "RUNNING") {
        console.log(
          `[Campaign] ${campaignId} paused/stopped — halting dispatch`,
        );
        break;
      }

      const batch = leads.slice(i, i + batchSize);

      // Fire batch concurrently — Bolna queues and manages concurrency
      await Promise.all(
        batch.map((lead) =>
          this.makeCall(
            tenantId,
            campaignId,
            lead,
            bolnaAgentId,
            campaignVariables,
          ).catch((err) =>
            console.error(`[Campaign] Call failed for lead ${lead.id}:`, err),
          ),
        ),
      );

      // Small delay between batches to respect Bolna rate limits
      if (i + batchSize < leads.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
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

  // ─── Make Single Call ───────────────────────────────────────────────────────
  async makeCall(
    tenantId: string,
    campaignId: string,
    lead: { id: string; phone: string; name: string },
    bolnaAgentId: string,
    campaignVariables: Record<string, string>,
  ) {
    await prisma.lead.update({
      where: { id: lead.id },
      data: { status: "CALLING" },
    });

    const callRecord = await prisma.call.create({
      data: { tenantId, campaignId, leadId: lead.id, status: "CALLING" },
    });

    try {
      // Merge campaign variables + lead-specific data
      // Lead fields override campaign fields if same key exists

      const hasCustomerName =
        !!lead.name &&
        !["unknown", "null", "unavailable", ""].includes(
          lead.name.trim().toLowerCase(),
        );

      const welcome_message = hasCustomerName
        ? `Hi, am I speaking with ${lead.name}? I'm ${campaignVariables.agent_name} from ${campaignVariables.builder_name}. Is this a good time to talk?`
        : `Hi, I'm ${campaignVariables.agent_name} from ${campaignVariables.builder_name} regarding a property enquiry. Is this a good time to talk?`;

      const callVariables: Record<string, string> = {
        ...campaignVariables,
        welcome_message,
        customer_name: lead.name,
        customer_phone: lead.phone,
      };

      const bolnaCall = await bolnaClient.calls.create({
        agent_id: bolnaAgentId,
        recipient_phone_number: lead.phone,
        user_data: callVariables,
      });

      const callId =
        bolnaCall.id ?? bolnaCall.execution_id ?? null;

      console.log(`[Bolna] Resolved callId: ${callId}`);

      await prisma.call.update({
        where: { id: callRecord.id },
        data: { bolnaCallId: callId, startedAt: new Date() },
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
