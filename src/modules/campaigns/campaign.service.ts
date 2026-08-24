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

  async parseLeads(tenantId: string, campaignId: string, filePath: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });

    if (!campaign) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error("Campaign not found");
    }

    if (campaign.status === "FAILED") {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error(
        "Cannot upload leads to a failed campaign. Please create a new campaign.",
      );
    }

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
    } finally {
      // Always clean up the parse-preview temp file
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch {
          /* ignore */
        }
      }
    }

    if (rows.length === 0) {
      throw new Error("File is empty — no rows found");
    }

    // ── Bucket 1: rows missing phone ────────────────────────────────────────
    const validRows = rows.filter((r) => r.phone && r.phone.trim() !== "");
    const invalidCount = rows.length - validRows.length;

    // ── Bucket 2: duplicates WITHIN the uploaded file itself ───────────────
    const seenInFile = new Set<string>();
    const inFileDuplicateNumbers: string[] = [];
    const uniqueRows: LeadRow[] = [];

    for (const row of validRows) {
      const phone = row.phone.trim();
      if (seenInFile.has(phone)) {
        inFileDuplicateNumbers.push(phone);
      } else {
        seenInFile.add(phone);
        uniqueRows.push(row);
      }
    }

    // ── Bucket 3: duplicates against EXISTING leads in this campaign ───────
    const uniquePhones = uniqueRows.map((r) => r.phone.trim());
    const existingLeads =
      uniquePhones.length > 0
        ? await prisma.lead.findMany({
            where: { campaignId, phone: { in: uniquePhones } },
            select: { phone: true },
          })
        : [];

    const existingPhoneSet = new Set(existingLeads.map((l) => l.phone));

    const dbDuplicateNumbers: string[] = [];
    const newLeads: LeadRow[] = [];

    for (const row of uniqueRows) {
      if (existingPhoneSet.has(row.phone.trim())) {
        dbDuplicateNumbers.push(row.phone.trim());
      } else {
        newLeads.push(row);
      }
    }

    return {
      total: rows.length,
      valid: validRows.length,
      invalid: invalidCount,
      inFileDuplicates: inFileDuplicateNumbers.length,
      inFileDuplicateNumbers,
      dbDuplicates: dbDuplicateNumbers.length,
      dbDuplicateNumbers,
      readyToImport: newLeads.length,
    };
  }

  // ─── Upload Leads ──────────────────────────────────────────────────────────
  async uploadLeads(
    tenantId: string,
    campaignId: string,
    filePath: string,
    allowDuplicates = false,
  ) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");

    if (campaign.status === "FAILED") {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      throw new Error(
        "Cannot upload leads to a failed campaign. Please create a new campaign.",
      );
    }

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

    let newLeads = validRows;
    let duplicateNumbers: string[] = [];

    // ── Deduplication — skipped when allowDuplicates = true ──────────────────
    if (!allowDuplicates) {
      const incomingPhones = validRows.map((r) => r.phone.trim());

      const existingLeads = await prisma.lead.findMany({
        where: { campaignId, phone: { in: incomingPhones } },
        select: { phone: true },
      });

      const existingPhoneSet = new Set(existingLeads.map((l) => l.phone));

      newLeads = validRows.filter((r) => !existingPhoneSet.has(r.phone.trim()));
      duplicateNumbers = validRows
        .filter((r) => existingPhoneSet.has(r.phone.trim()))
        .map((r) => r.phone.trim());
    }

    if (newLeads.length > 0) {
      await prisma.lead.createMany({
        data: newLeads.map((row) => ({
          name: row.name, // <─── Safe to insert string | null now
          phone: row.phone.trim(),
          email: row.email,
          company: row.company,
          tenantId,
          campaignId,
          metadata: row as object,
        })),
        skipDuplicates: allowDuplicates ? false : true,
      });

      await prisma.campaign.update({
        where: { id: campaignId },
        data: { totalLeads: { increment: newLeads.length } },
      });
    }

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
  // Now accepts optional scheduledAt (ISO 8601 string with timezone)
  async start(tenantId: string, campaignId: string, scheduledAt?: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: { assistant: true },
    });

    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status === "RUNNING") throw new Error("Already running");
    if (campaign.status === "SCHEDULED")
      throw new Error(
        "Campaign is already scheduled. Cancel first to reschedule.",
      );

    const leads = await prisma.lead.findMany({
      where: { campaignId, status: "PENDING", doNotCall: false },
    });
    if (leads.length === 0) throw new Error("No pending leads found");

    const campaignVariables =
      (campaign.variables as Record<string, string>) ?? {};

    // ── Determine if this is a scheduled or immediate run ──────────────────
    const isScheduled = !!scheduledAt;

    if (isScheduled) {
      // Validate the scheduled date
      const scheduledDate = new Date(scheduledAt!);
      if (isNaN(scheduledDate.getTime())) {
        throw new Error(
          "Invalid scheduled date format. Use ISO 8601 with timezone.",
        );
      }
      if (scheduledDate <= new Date()) {
        throw new Error("Scheduled time must be in the future.");
      }

      await prisma.campaign.update({
        where: { id: campaignId },
        data: {
          status: "SCHEDULED",
          scheduledAt: scheduledDate,
        },
      });
    } else {
      await prisma.campaign.update({
        where: { id: campaignId },
        data: { status: "RUNNING", startedAt: new Date() },
      });
    }

    // ── Dispatch calls (Bolna handles the actual scheduling) ───────────────
    this.processLeads(
      tenantId,
      campaignId,
      leads,
      campaign.assistant.bolnaId,
      campaignVariables,
      50,
      isScheduled ? scheduledAt : undefined,
    )
      .then(() =>
        console.log(
          `[Campaign] ${campaignId} dispatch completed (${isScheduled ? "scheduled" : "immediate"})`,
        ),
      )
      .catch((err) => console.error(`[Campaign] ${campaignId} failed:`, err));

    return {
      message: isScheduled
        ? `Campaign scheduled for ${scheduledAt} — ${leads.length} calls queued with Bolna`
        : `Campaign started — ${leads.length} calls queued`,
      totalLeads: leads.length,
      variableKeys: Object.keys(campaignVariables),
      scheduledAt: isScheduled ? scheduledAt : null,
    };
  }

  // ─── Process Leads — batched concurrent dispatch ───────────────────────────
  private async processLeads(
    tenantId: string,
    campaignId: string,
    leads: { id: string; phone: string; name: string | null }[], // <─── Updated type to allow string | null
    bolnaAgentId: string,
    campaignVariables: Record<string, string>,
    batchSize = 50,
    scheduledAt?: string,
  ) {
    for (let i = 0; i < leads.length; i += batchSize) {
      const campaign = await prisma.campaign.findUnique({
        where: { id: campaignId },
      });

      if (campaign?.status !== "RUNNING" && campaign?.status !== "SCHEDULED") {
        console.log(
          `[Campaign] ${campaignId} paused/stopped — halting dispatch`,
        );
        break;
      }

      const batch = leads.slice(i, i + batchSize);

      await Promise.all(
        batch.map((lead) =>
          this.makeCall(
            tenantId,
            campaignId,
            lead,
            bolnaAgentId,
            campaignVariables,
            scheduledAt,
          ).catch((err) =>
            console.error(`[Campaign] Call failed for lead ${lead.id}:`, err),
          ),
        ),
      );

      if (i + batchSize < leads.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    if (!scheduledAt) {
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
  }

  processNameForCall = (rawName: string | null | undefined): string | null => {
    if (!rawName) return null;

    const parts = rawName.trim().split(/\s+/).filter(Boolean);

    for (const part of parts) {
      if (part.length >= 3) return part;
    }

    return null;
  };

  // ─── Make Single Call ───────────────────────────────────────────────────────
  async makeCall(
    tenantId: string,
    campaignId: string,
    lead: { id: string; phone: string; name: string | null }, // <─── Updated type
    bolnaAgentId: string,
    campaignVariables: Record<string, string>,
    scheduledAt?: string,
  ) {
    await prisma.lead.update({
      where: { id: lead.id },
      data: { status: "CALLING" },
    });

    const callRecord = await prisma.call.create({
      data: { tenantId, campaignId, leadId: lead.id, status: "CALLING" },
    });

    try {
      // Process ONLY here — DB still has full name
      const callName = this.processNameForCall(lead.name);

      const hasCustomerName =
        !!callName &&
        !["unknown", "null", "unavailable"].includes(callName.toLowerCase());

      const welcome_message = hasCustomerName
        ? `Hi, am I speaking with ${callName}?`
        : `Hi, I'm ${campaignVariables.agent_name} from ${campaignVariables.builder_name}. Is this a good time to talk?`;

      const callVariables: Record<string, string> = {
        ...campaignVariables,
        welcome_message,
        customer_name: callName || "",
        customer_phone: lead.phone,
      };

      const bolnaPayload: Record<string, unknown> = {
        agent_id: bolnaAgentId,
        recipient_phone_number: lead.phone,
        user_data: callVariables,
      };

      if (scheduledAt) {
        bolnaPayload.scheduled_at = scheduledAt;
      }

      const bolnaCall = await bolnaClient.calls.create(bolnaPayload as any);

      const callId = bolnaCall.id ?? bolnaCall.execution_id ?? null;

      console.log(
        `[Bolna] Resolved callId: ${callId}${scheduledAt ? ` (scheduled: ${scheduledAt})` : ""}`,
      );

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

  // ─── Cancel Schedule ───────────────────────────────────────────────────────
  // Resets a SCHEDULED campaign back to DRAFT, resets leads to PENDING,
  // and cleans up pending call records.
  async cancelSchedule(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });

    if (!campaign) throw new Error("Campaign not found");
    if (campaign.status !== "SCHEDULED") {
      throw new Error(
        "Only scheduled campaigns can have their schedule cancelled.",
      );
    }

    // 1. Reset all leads that were set to CALLING back to PENDING so they can be run again
    await prisma.lead.updateMany({
      where: {
        campaignId,
        status: "CALLING",
      },
      data: {
        status: "PENDING",
      },
    });

    // 2. Remove in-flight Call records initiated for this scheduled run
    await prisma.call.deleteMany({
      where: {
        campaignId,
        status: "CALLING",
      },
    });

    // 3. Reset campaign status back to DRAFT and remove the scheduled timestamp
    const updatedCampaign = await prisma.campaign.update({
      where: { id: campaignId },
      data: {
        status: "DRAFT",
        scheduledAt: null,
      },
      include: {
        assistant: true,
        brochure: true,
      },
    });

    return {
      message: "Campaign schedule cancelled. Leads have been reset to PENDING.",
      campaign: updatedCampaign,
    };
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

  // ─── Performance Stats ────────────────────────────────────────────────────
  async performanceStats(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");

    const QUALIFYING_DISPOSITIONS = [
      "QUALIFIED_CONSULTANT_FOLLOWUP",
      "SITE_VISIT_INTEREST",
      "INTERESTED_SEND_DETAILS",
      "INTERESTED_GENERAL",
    ];

    // Fetch all CallAnalysis records for this campaign
    const analyses = await prisma.callAnalysis.findMany({
      where: {
        tenantId,
        call: { campaignId },
      },
      select: {
        disposition: true,
        leadTemperature: true,
        preferredNextAction: true,
        doNotCall: true,
      },
    });

    // Fetch total cost aggregated from Call records
    const costAgg = await prisma.call.aggregate({
      where: { campaignId, tenantId, cost: { not: null } },
      _sum: { cost: true },
    });

    const totalCost = costAgg._sum.cost ?? 0;

    // ── Compute counts ────────────────────────────────────────────────────
    const hotLeads = analyses.filter((a) => a.leadTemperature === "HOT").length;

    // Callbacks: Preferred next action is either CONSULTANT_CALL or FOLLOWUP_CALL
    const callbacks = analyses.filter(
      (a) =>
        a.preferredNextAction === "CONSULTANT_CALL" ||
        a.preferredNextAction === "FOLLOWUP_CALL",
    ).length;

    // Site Visits: Disposition is SITE_VISIT_INTEREST or next action is SITE_VISIT
    const siteVisits = analyses.filter(
      (a) =>
        a.disposition === "SITE_VISIT_INTEREST" ||
        a.preferredNextAction === "SITE_VISIT",
    ).length;

    // DNC count: Where CallAnalysis.doNotCall flags extraction is YES
    const dnc = analyses.filter((a) => a.doNotCall === "YES").length;

    // ── Qualification rate (disposition-based) ────────────────────────────
    const withDisposition = analyses.filter((a) => a.disposition !== null);
    const qualified = withDisposition.filter(
      (a) => a.disposition && QUALIFYING_DISPOSITIONS.includes(a.disposition),
    ).length;

    const qualificationRate =
      withDisposition.length > 0
        ? ((qualified / withDisposition.length) * 100).toFixed(1)
        : "0.0";

    // ── Cost per lead ─────────────────────────────────────────────────────
    const costPerLeadInCents =
      campaign.successLeads > 0
        ? parseFloat((totalCost / campaign.successLeads).toFixed(2)) / 100
        : 0;

    const totalCostInCents = parseFloat(totalCost.toFixed(2)) / 100;

    return {
      hotLeads,
      callbacks,
      siteVisits,
      dnc,
      totalCost: totalCostInCents,
      costPerLead: costPerLeadInCents,
      qualificationRate: qualificationRate,
    };
  }
}

export default new CampaignService();
