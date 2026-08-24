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
        budgetRange: true,
        preferredConfiguration: true,
      },
    });

    // Fetch Call Timestamps & Statuses for Hourly Pickup/Conversion Analysis
    const calls = await prisma.call.findMany({
      where: { campaignId, tenantId, startedAt: { not: null } },
      select: {
        startedAt: true,
        status: true,
        callAnalysis: { select: { disposition: true, leadTemperature: true } },
      },
    });

    // Fetch total cost aggregated from Call records
    const costAgg = await prisma.call.aggregate({
      where: { campaignId, tenantId, cost: { not: null } },
      _sum: { cost: true },
    });

    const totalCostInCents = costAgg._sum.cost ?? 0;
    const totalCostInDollars = totalCostInCents / 100;

    // ─── Calculate Best Pickup & Conversion Times ────────────────────────────────
    const hourlyStats: Record<
      number,
      { total: number; connected: number; qualified: number }
    > = {};

    for (const call of calls) {
      if (!call.startedAt) continue;
      const hour = new Date(call.startedAt).getHours(); // 0 - 23

      if (!hourlyStats[hour]) {
        hourlyStats[hour] = { total: 0, connected: 0, qualified: 0 };
      }

      hourlyStats[hour].total += 1;

      if (call.status === "COMPLETED") {
        hourlyStats[hour].connected += 1;
      }

      const disp = call.callAnalysis?.disposition;
      const temp = call.callAnalysis?.leadTemperature;
      if (
        (disp && QUALIFYING_DISPOSITIONS.includes(disp)) ||
        temp === "HOT" ||
        temp === "WARM"
      ) {
        hourlyStats[hour].qualified += 1;
      }
    }

    let bestPickupHour: number | null = null;
    let maxPickupRate = 0;

    let bestConversionHour: number | null = null;
    let maxQualifiedCount = 0;

    Object.entries(hourlyStats).forEach(([hStr, stat]) => {
      const hour = parseInt(hStr, 10);
      const pickupRate = stat.total > 0 ? stat.connected / stat.total : 0;

      if (pickupRate > maxPickupRate && stat.total >= 1) {
        maxPickupRate = pickupRate;
        bestPickupHour = hour;
      }

      if (stat.qualified > maxQualifiedCount) {
        maxQualifiedCount = stat.qualified;
        bestConversionHour = hour;
      }
    });

    const formatHourWindow = (hour: number | null) => {
      if (hour === null) return "Insufficient Data";
      const ampmStart = hour >= 12 ? "PM" : "AM";
      const startHour12 = hour % 12 === 0 ? 12 : hour % 12;
      const nextHour = (hour + 1) % 24;
      const ampmEnd = nextHour >= 12 ? "PM" : "AM";
      const endHour12 = nextHour % 12 === 0 ? 12 : nextHour % 12;
      return `${startHour12}:00 ${ampmStart} - ${endHour12}:00 ${ampmEnd}`;
    };

    // ─── Extract Top Preferences (Budget & Config) ──────────────────────────────
    const budgetCounts: Record<string, number> = {};
    const configCounts: Record<string, number> = {};

    analyses.forEach((a) => {
      if (a.budgetRange && a.budgetRange !== "NOT_SHARED") {
        const b = a.budgetRange.trim();
        budgetCounts[b] = (budgetCounts[b] || 0) + 1;
      }
      if (
        a.preferredConfiguration &&
        a.preferredConfiguration !== "NOT_SHARED"
      ) {
        const c = a.preferredConfiguration.trim();
        configCounts[c] = (configCounts[c] || 0) + 1;
      }
    });

    const topBudget =
      Object.keys(budgetCounts).sort(
        (a, b) => budgetCounts[b] - budgetCounts[a],
      )[0] ?? null;

    const topConfiguration =
      Object.keys(configCounts).sort(
        (a, b) => configCounts[b] - configCounts[a],
      )[0] ?? null;

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
    const costPerLeadInDollars =
      campaign.successLeads > 0
        ? parseFloat((totalCostInDollars / campaign.successLeads).toFixed(2)) /
          100
        : 0;

    return {
      hotLeads,
      callbacks,
      siteVisits,
      dnc,
      totalCost: totalCostInDollars,
      costPerLead: costPerLeadInDollars,
      qualificationRate: qualificationRate,
      bestPickupTime: formatHourWindow(bestPickupHour),
      bestConversionTime: formatHourWindow(bestConversionHour),
      topBudget: topBudget ?? "N/A",
      topConfiguration: topConfiguration ?? "N/A",
    };
  }
}

export default new CampaignService();
