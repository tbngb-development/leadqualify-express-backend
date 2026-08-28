import prisma from "../../config/database";
import { LeadRow, parseLeadFile, isIndianPhone } from "../../utils/leadParser";
import { normalizePhoneNumber } from "../../config/bolna";
import fs from "fs";

export class CampaignService {
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
        batches: {
          select: {
            id: true,
            status: true,
            totalLeads: true,
            completedLeads: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async get(tenantId: string, id: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id, tenantId },
      include: {
        assistant: true,
        brochure: true,
        batches: { orderBy: { createdAt: "desc" } },
      },
    });
    if (!campaign) throw new Error("Campaign not found");
    return campaign;
  }

  async create(
    tenantId: string,
    data: {
      name: string;
      description?: string;
      assistantId: string;
      brochureId?: string;
      variables?: Record<string, string>;
      defaultRetryConfig?: Record<string, any>;
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
        throw new Error("Brochure must be confirmed first");
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
        defaultRetryConfig: data.defaultRetryConfig,
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
      throw new Error("Cannot upload leads to a failed campaign.");
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

    const rowsWithPhone = rows.filter((r) => r.phone && r.phone.trim() !== "");
    const missingPhoneCount = rows.length - rowsWithPhone.length;

    // Filter Indian rows and normalize to E.164
    const indianRows = rowsWithPhone
      .filter((r) => isIndianPhone(r.phone))
      .map((r) => ({
        ...r,
        phone: normalizePhoneNumber(r.phone),
      }));

    const nonIndianNumbers = rowsWithPhone
      .filter((r) => !isIndianPhone(r.phone))
      .map((r) => r.phone);

    // Dedup within file using normalized phone
    const seenInFile = new Set<string>();
    const inFileDuplicateNumbers: string[] = [];
    const uniqueRows: LeadRow[] = [];

    for (const row of indianRows) {
      if (seenInFile.has(row.phone)) {
        inFileDuplicateNumbers.push(row.phone);
      } else {
        seenInFile.add(row.phone);
        uniqueRows.push(row);
      }
    }

    // Cross-batch dedup against DB using normalized phone
    const skipCrossBatchDedup = process.env.SKIP_CROSS_BATCH_DEDUP === "true";
    const uniquePhones = uniqueRows.map((r) => r.phone);
    let dbDuplicateNumbers: string[] = [];
    let newLeads: LeadRow[] = [];

    if (skipCrossBatchDedup) {
      newLeads = uniqueRows;
    } else {
      const existingLeads =
        uniquePhones.length > 0
          ? await prisma.lead.findMany({
              where: { campaignId, phone: { in: uniquePhones } },
              select: { phone: true },
            })
          : [];

      const existingPhoneSet = new Set(existingLeads.map((l) => l.phone));

      for (const row of uniqueRows) {
        if (existingPhoneSet.has(row.phone)) {
          dbDuplicateNumbers.push(row.phone);
        } else {
          newLeads.push(row);
        }
      }
    }

    return {
      total: rows.length,
      valid: indianRows.length,
      invalid: missingPhoneCount,
      nonIndian: nonIndianNumbers.length,
      nonIndianNumbers,
      inFileDuplicates: inFileDuplicateNumbers.length,
      inFileDuplicateNumbers,
      dbDuplicates: dbDuplicateNumbers.length,
      dbDuplicateNumbers,
      readyToImport: newLeads.length,
    };
  }

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
        batches: {
          select: {
            id: true,
            status: true,
            fileName: true,
            totalLeads: true,
            calledLeads: true,
            completedLeads: true,
            failedLeads: true,
            createdAt: true,
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

    const analyses = await prisma.callAnalysis.findMany({
      where: { tenantId, call: { campaignId } },
      select: {
        disposition: true,
        leadTemperature: true,
        preferredNextAction: true,
        doNotCall: true,
        budgetRange: true,
        preferredConfiguration: true,
      },
    });

    const calls = await prisma.call.findMany({
      where: { campaignId, tenantId, startedAt: { not: null } },
      select: {
        startedAt: true,
        status: true,
        callAnalysis: { select: { disposition: true, leadTemperature: true } },
      },
    });

    const costAgg = await prisma.call.aggregate({
      where: { campaignId, tenantId, cost: { not: null } },
      _sum: { cost: true },
    });

    const totalCostInCents = costAgg._sum.cost ?? 0;
    const totalCostInDollars = totalCostInCents / 100;

    const hourlyStats: Record<
      number,
      { total: number; connected: number; qualified: number }
    > = {};

    for (const call of calls) {
      if (!call.startedAt) continue;
      const hour = new Date(call.startedAt).getHours();

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

    const hotLeads = analyses.filter((a) => a.leadTemperature === "HOT").length;
    const callbacks = analyses.filter(
      (a) =>
        a.preferredNextAction === "CONSULTANT_CALL" ||
        a.preferredNextAction === "FOLLOWUP_CALL",
    ).length;
    const siteVisits = analyses.filter(
      (a) =>
        a.disposition === "SITE_VISIT_INTEREST" ||
        a.preferredNextAction === "SITE_VISIT",
    ).length;
    const dnc = analyses.filter((a) => a.doNotCall === "YES").length;

    const withDisposition = analyses.filter((a) => a.disposition !== null);
    const qualified = withDisposition.filter(
      (a) => a.disposition && QUALIFYING_DISPOSITIONS.includes(a.disposition),
    ).length;

    const qualificationRate =
      withDisposition.length > 0
        ? ((qualified / withDisposition.length) * 100).toFixed(1)
        : "0.0";

    const costPerLeadInDollars =
      campaign.completedLeads > 0
        ? parseFloat((totalCostInDollars / campaign.completedLeads).toFixed(2))
        : 0;

    return {
      hotLeads,
      callbacks,
      siteVisits,
      dnc,
      totalCost: totalCostInDollars,
      costPerLead: costPerLeadInDollars,
      qualificationRate,
      bestPickupTime: formatHourWindow(bestPickupHour),
      bestConversionTime: formatHourWindow(bestConversionHour),
      topBudget: "N/A",
      topConfiguration: "N/A",
    };
  }
}

export default new CampaignService();
