import prisma from "../../config/database";
import { bolnaClient, normalizePhoneNumber } from "../../config/bolna";
import { parseLeadFile, isIndianPhone, LeadRow } from "../../utils/leadParser";
import { CSVTransformer } from "../../utils/csvTransformer";
import { FileStorageService } from "../../utils/fileStorage";
import { RetryConfig } from "../../types/bolna.types";
import fs from "fs";
import path from "path";

export class BatchService {
  async list(tenantId: string, campaignId: string) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
    });
    if (!campaign) throw new Error("Campaign not found");

    return prisma.leadBatch.findMany({
      where: { campaignId, tenantId },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { leads: true, calls: true },
        },
      },
    });
  }

  async get(tenantId: string, campaignId: string, batchId: string) {
    const batch = await prisma.leadBatch.findFirst({
      where: { id: batchId, campaignId, tenantId },
      include: {
        _count: {
          select: { leads: true, calls: true },
        },
      },
    });
    if (!batch) throw new Error("Batch not found");
    return batch;
  }

  async create(
    tenantId: string,
    campaignId: string,
    filePath: string,
    retryConfigOverride?: RetryConfig,
  ) {
    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: { assistant: true },
    });
    if (!campaign) {
      this.cleanupFile(filePath);
      throw new Error("Campaign not found");
    }
    if (campaign.status === "FAILED") {
      this.cleanupFile(filePath);
      throw new Error("Cannot upload to a failed campaign");
    }

    let rows: LeadRow[];
    try {
      rows = parseLeadFile(filePath);
    } catch (err: unknown) {
      this.cleanupFile(filePath);
      const msg = err instanceof Error ? err.message : "Parse failed";
      throw new Error(`File parsing failed: ${msg}`);
    }

    if (rows.length === 0) {
      this.cleanupFile(filePath);
      throw new Error("File is empty");
    }

    // 1. Filter Indian numbers & normalize phone
    const validRows = rows
      .filter((r) => r.phone && r.phone.trim() !== "" && isIndianPhone(r.phone))
      .map((r) => ({
        ...r,
        phone: normalizePhoneNumber(r.phone),
      }));

    if (validRows.length === 0) {
      this.cleanupFile(filePath);
      throw new Error(
        "No valid Indian phone numbers found in the uploaded file",
      );
    }

    // 2. In-file dedup using normalized E.164 phone
    const seenInFile = new Set<string>();
    const uniqueRows: LeadRow[] = [];
    for (const row of validRows) {
      if (!seenInFile.has(row.phone)) {
        seenInFile.add(row.phone);
        uniqueRows.push(row);
      }
    }

    // 3. Cross-batch dedup against existing campaign leads (E.164 normalized)
    const skipDedup = process.env.SKIP_CROSS_BATCH_DEDUP === "true";
    let newLeads = uniqueRows;

    if (!skipDedup) {
      const phones = uniqueRows.map((r) => r.phone);
      const existing = await prisma.lead.findMany({
        where: { campaignId, phone: { in: phones } },
        select: { phone: true },
      });
      const existingSet = new Set(existing.map((l) => l.phone));
      newLeads = uniqueRows.filter((r) => !existingSet.has(r.phone));
    }

    if (newLeads.length === 0) {
      this.cleanupFile(filePath);
      throw new Error(
        "All leads in this file already exist in the campaign (cross-batch dedup)",
      );
    }

    const retryConfig =
      retryConfigOverride ??
      (campaign.defaultRetryConfig || { enabled: false });

    const originalFileName = path.basename(filePath);
    const batch = await prisma.leadBatch.create({
      data: {
        campaignId,
        tenantId,
        status: "CREATED",
        fileName: originalFileName,
        totalLeads: newLeads.length,
        retryConfig: retryConfig as any,
      },
    });

    await prisma.lead.createMany({
      data: newLeads.map((row) => ({
        name: row.name,
        phone: row.phone,
        email: row.email,
        company: row.company,
        tenantId,
        campaignId,
        batchId: batch.id,
        metadata: row as object,
        status: "PENDING",
      })),
      skipDuplicates: true,
    });

    let originalFileUrl: string | null = null;
    let transformedCsvUrl: string | null = null;

    try {
      const originalBuffer = fs.readFileSync(filePath);
      originalFileUrl = await FileStorageService.uploadBuffer(
        originalBuffer,
        `original-${originalFileName}`,
        `/kooi/${tenantId}/campaigns/${campaign.name}${campaignId.slice(4)}/batches/${batch.id}`,
      );
    } catch (err) {
      console.error("[Batch] Cloudinary original upload failed:", err);
    }

    const campaignVariables =
      (campaign.variables as Record<string, string>) ?? {};

    const { transformedBuffer, validCount, filteredOutCount } =
      CSVTransformer.transformToBolnaCSV(newLeads, campaignVariables);

    if (validCount === 0) {
      this.cleanupFile(filePath);
      throw new Error(
        "No leads passed Indian phone validation after transformation",
      );
    }

    try {
      transformedCsvUrl = await FileStorageService.uploadBuffer(
        transformedBuffer,
        `bolna-${originalFileName.replace(/\.[^/.]+$/, ".csv")}`,
        `/kooi/${tenantId}/campaigns/${campaign.name}${campaignId.slice(4)}/batches/${batch.id}`,
      );
    } catch (err) {
      console.error("[Batch] Cloudinary transformed upload failed:", err);
    }

    let bolnaBatchId: string | null = null;
    const webhookUrl = process.env.WEBHOOK_BASE_URL
      ? `${process.env.WEBHOOK_BASE_URL}/webhooks/bolna-batch`
      : undefined;

    try {
      const bolnaResponse = await bolnaClient.batches.create({
        agentId: campaign.assistant.bolnaId,
        csvBuffer: transformedBuffer,
        fileName: `bolna-${batch.id}.csv`,
        retryConfig: retryConfig as any,
        webhookUrl,
      });
      bolnaBatchId = bolnaResponse.batch_id;
    } catch (err) {
      console.error("[Batch] Bolna batch creation failed:", err);
      await prisma.leadBatch.update({
        where: { id: batch.id },
        data: { status: "FAILED" },
      });
      this.cleanupFile(filePath);
      throw new Error(
        `Bolna batch creation failed. Leads saved locally. ${(err as Error).message}`,
      );
    }

    const updatedBatch = await prisma.leadBatch.update({
      where: { id: batch.id },
      data: {
        bolnaBatchId,
        originalFileUrl,
        transformedCsvUrl,
      },
    });

    await prisma.campaign.update({
      where: { id: campaignId },
      data: { totalLeads: { increment: newLeads.length } },
    });

    this.cleanupFile(filePath);

    return {
      batch: updatedBatch,
      stats: {
        totalRows: rows.length,
        validIndian: validCount,
        filteredNonIndian: filteredOutCount,
        imported: newLeads.length,
      },
    };
  }

  async run(tenantId: string, campaignId: string, batchId: string) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );
    if (batch.status !== "CREATED") {
      throw new Error(`Cannot run batch in "${batch.status}" status.`);
    }
    if (!batch.bolnaBatchId) {
      throw new Error("Batch has no Bolna batch ID.");
    }

    const scheduledAt = new Date(Date.now() + 2 * 60 * 1000);
    const isoString = this.toBolnaISO(scheduledAt);

    const bolnaResponse = await bolnaClient.batches.schedule(
      batch.bolnaBatchId,
      isoString,
    );

    const bolnaScheduledAt = this.parseScheduledTime(bolnaResponse.state);

    const updatedBatch = await prisma.leadBatch.update({
      where: { id: batchId },
      data: {
        status: "SCHEDULED",
        scheduledAt,
        bolnaScheduledAt,
      },
    });

    await prisma.campaign.updateMany({
      where: { id: campaignId, status: "DRAFT" },
      data: { status: "RUNNING", startedAt: new Date() },
    });

    return {
      batch: updatedBatch,
      message: `Batch scheduled. Bolna will start at ${bolnaScheduledAt ?? isoString}`,
    };
  }

  async schedule(
    tenantId: string,
    campaignId: string,
    batchId: string,
    scheduledAt: string,
  ) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );

    if (batch.status !== "CREATED") {
      throw new Error(`Cannot schedule batch in "${batch.status}" status.`);
    }
    if (!batch.bolnaBatchId) {
      throw new Error("Batch has no Bolna batch ID.");
    }

    const targetDate = new Date(scheduledAt);
    if (isNaN(targetDate.getTime())) {
      throw new Error("Invalid date format.");
    }

    // 🛡️ Prevent scheduling in the past (minimum 1 minute in the future)
    const minimumFutureTime = Date.now() + 60 * 1000;
    if (targetDate.getTime() < minimumFutureTime) {
      throw new Error(
        "Scheduled time must be at least 1 minute in the future.",
      );
    }

    const isoString = this.toBolnaISO(targetDate);

    const bolnaResponse = await bolnaClient.batches.schedule(
      batch.bolnaBatchId,
      isoString,
    );

    const bolnaScheduledAt = this.parseScheduledTime(bolnaResponse.state);

    const updatedBatch = await prisma.leadBatch.update({
      where: { id: batchId },
      data: {
        status: "SCHEDULED",
        scheduledAt: targetDate,
        bolnaScheduledAt,
      },
    });

    await prisma.campaign.updateMany({
      where: { id: campaignId, status: "DRAFT" },
      data: { status: "RUNNING", startedAt: new Date() },
    });

    return {
      batch: updatedBatch,
      message: `Batch scheduled for ${bolnaScheduledAt ?? isoString}`,
    };
  }

  async stop(tenantId: string, campaignId: string, batchId: string) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );

    if (!["SCHEDULED", "RUNNING"].includes(batch.status)) {
      throw new Error(`Cannot stop batch in "${batch.status}" status.`);
    }

    if (batch.bolnaBatchId) {
      try {
        await bolnaClient.batches.stop(batch.bolnaBatchId);
      } catch (err) {
        console.warn("[Batch] Bolna stop error:", err);
      }
    }

    const updatedBatch = await prisma.leadBatch.update({
      where: { id: batchId },
      data: { status: "STOPPED" },
    });

    // Reset non-completed leads back to PENDING so resume works
    await prisma.lead.updateMany({
      where: {
        batchId,
        status: { in: ["CALLING", "PENDING"] },
      },
      data: { status: "PENDING" },
    });

    // Mark aborted calling records as FAILED
    await prisma.call.updateMany({
      where: {
        batchId,
        status: { in: ["CALLING", "PENDING"] },
      },
      data: { status: "FAILED", endedAt: new Date() },
    });

    await this.checkCampaignStatus(campaignId);

    return {
      batch: updatedBatch,
      warning:
        "Batch stopped. Non-completed calls reset to PENDING for resume.",
    };
  }

  async resume(tenantId: string, campaignId: string, batchId: string) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );

    if (batch.status !== "STOPPED") {
      throw new Error(`Cannot resume batch in "${batch.status}" status.`);
    }

    const pendingLeads = await prisma.lead.findMany({
      where: { batchId, status: "PENDING", doNotCall: false },
    });

    if (pendingLeads.length === 0) {
      throw new Error("No remaining PENDING leads to resume in this batch");
    }

    const campaign = await prisma.campaign.findFirst({
      where: { id: campaignId, tenantId },
      include: { assistant: true },
    });
    if (!campaign) throw new Error("Campaign not found");

    const newBatch = await prisma.leadBatch.create({
      data: {
        campaignId,
        tenantId,
        status: "CREATED",
        fileName: `resume-${batch.fileName ?? batch.id}`,
        totalLeads: pendingLeads.length,
        retryConfig: batch.retryConfig as any,
      },
    });

    await prisma.lead.updateMany({
      where: { batchId, status: "PENDING", doNotCall: false },
      data: { batchId: newBatch.id },
    });

    await prisma.leadBatch.update({
      where: { id: batchId },
      data: {
        totalLeads: { decrement: pendingLeads.length },
      },
    });
    
    const campaignVariables =
      (campaign.variables as Record<string, string>) ?? {};

    const leadRows: LeadRow[] = pendingLeads.map((l) => ({
      name: l.name,
      phone: l.phone,
      email: l.email ?? undefined,
      company: l.company ?? undefined,
      ...(l.metadata as Record<string, string>),
    }));

    const { transformedBuffer } = CSVTransformer.transformToBolnaCSV(
      leadRows,
      campaignVariables,
    );

    const webhookUrl = process.env.WEBHOOK_BASE_URL
      ? `${process.env.WEBHOOK_BASE_URL}/webhooks/bolna-batch`
      : undefined;

    const retryConfig = batch.retryConfig || { enabled: false };

    const bolnaResponse = await bolnaClient.batches.create({
      agentId: campaign.assistant.bolnaId,
      csvBuffer: transformedBuffer,
      fileName: `resume-${newBatch.id}.csv`,
      retryConfig: retryConfig as any,
      webhookUrl,
    });

    const updatedBatch = await prisma.leadBatch.update({
      where: { id: newBatch.id },
      data: { bolnaBatchId: bolnaResponse.batch_id },
    });

    return {
      originalBatchId: batchId,
      newBatch: updatedBatch,
      remainingLeads: pendingLeads.length,
      message: "New batch created from remaining leads.",
    };
  }

  async delete(tenantId: string, campaignId: string, batchId: string) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );

    if (["RUNNING", "SCHEDULED"].includes(batch.status)) {
      throw new Error("Cannot delete an active batch. Stop it first.");
    }

    if (batch.bolnaBatchId) {
      try {
        await bolnaClient.batches.delete(batch.bolnaBatchId);
      } catch (err) {
        console.warn("[Batch] Bolna delete error:", err);
      }
    }

    await prisma.leadBatch.delete({ where: { id: batchId } });
    await this.recalculateCampaignStats(campaignId);

    return { message: "Batch deleted successfully" };
  }

  async stats(tenantId: string, campaignId: string, batchId: string) {
    const batch = await this.validateBatchOwnership(
      tenantId,
      campaignId,
      batchId,
    );

    const leadStats = await prisma.lead.groupBy({
      by: ["status"],
      where: { batchId },
      _count: true,
    });

    const callStats = await prisma.call.groupBy({
      by: ["status"],
      where: { batchId },
      _count: true,
    });

    const costAgg = await prisma.call.aggregate({
      where: { batchId, cost: { not: null } },
      _sum: { cost: true },
    });

    return {
      batch,
      leads: leadStats,
      calls: callStats,
      totalCost: (costAgg._sum.cost ?? 0) / 100,
    };
  }

  private async validateBatchOwnership(
    tenantId: string,
    campaignId: string,
    batchId: string,
  ) {
    const batch = await prisma.leadBatch.findFirst({
      where: { id: batchId, campaignId, tenantId },
    });
    if (!batch) throw new Error("Batch not found");
    return batch;
  }

  private toBolnaISO(date: Date): string {
    const offsetHours = 5;
    const offsetMinutes = 30;
    const totalOffsetMs = (offsetHours * 60 + offsetMinutes) * 60 * 1000;

    const localDate = new Date(date.getTime() + totalOffsetMs);
    const year = localDate.getUTCFullYear();
    const month = String(localDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(localDate.getUTCDate()).padStart(2, "0");
    const hours = String(localDate.getUTCHours()).padStart(2, "0");
    const mins = String(localDate.getUTCMinutes()).padStart(2, "0");
    const secs = String(localDate.getUTCSeconds()).padStart(2, "0");

    const sign = offsetHours >= 0 ? "+" : "-";
    const absH = String(Math.abs(offsetHours)).padStart(2, "0");
    const absM = String(Math.abs(offsetMinutes)).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${mins}:${secs}${sign}${absH}:${absM}`;
  }

  private parseScheduledTime(stateString: string): Date | null {
    const match = stateString.match(
      /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2})/,
    );
    if (!match) return null;
    const parsed = new Date(match[1]);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  private async checkCampaignStatus(campaignId: string): Promise<void> {
    const batches = await prisma.leadBatch.findMany({
      where: { campaignId },
      select: { status: true },
    });

    if (batches.length === 0) return;

    const terminalStatuses = new Set(["COMPLETED", "STOPPED", "FAILED"]);
    const allTerminal = batches.every((b) => terminalStatuses.has(b.status));
    const anyActive = batches.some(
      (b) => b.status === "RUNNING" || b.status === "SCHEDULED",
    );

    if (allTerminal) {
      const allFailed = batches.every((b) => b.status === "FAILED");
      await prisma.campaign.update({
        where: { id: campaignId },
        data: {
          status: allFailed ? "FAILED" : "COMPLETED",
          completedAt: new Date(),
        },
      });
    } else if (!anyActive) {
      await prisma.campaign.updateMany({
        where: { id: campaignId, status: "RUNNING" },
        data: { status: "DRAFT" },
      });
    }
  }

  private async recalculateCampaignStats(campaignId: string): Promise<void> {
    const agg = await prisma.leadBatch.aggregate({
      where: { campaignId },
      _sum: {
        totalLeads: true,
        calledLeads: true,
        completedLeads: true,
        failedLeads: true,
      },
    });

    await prisma.campaign.update({
      where: { id: campaignId },
      data: {
        totalLeads: agg._sum.totalLeads ?? 0,
        calledLeads: agg._sum.calledLeads ?? 0,
        completedLeads: agg._sum.completedLeads ?? 0,
        failedLeads: agg._sum.failedLeads ?? 0,
      },
    });
  }

  private cleanupFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch {
        /* ignore */
      }
    }
  }
}

export default new BatchService();
