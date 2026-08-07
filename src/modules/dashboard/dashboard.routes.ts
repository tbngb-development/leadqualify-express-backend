import { Router, Response, NextFunction } from "express";
import { authenticate, AuthRequest } from "../../middleware/auth";
import prisma from "../../config/database";

const router = Router();

router.use(authenticate);

// ─── Qualifying dispositions ──────────────────────────────────────────────────
const QUALIFYING_DISPOSITIONS = [
  "QUALIFIED_CONSULTANT_FOLLOWUP",
  "SITE_VISIT_INTEREST",
  "INTERESTED_SEND_DETAILS",
  "INTERESTED_GENERAL",
] as const;

// ─── Disqualifying dispositions ───────────────────────────────────────────────
const DISQUALIFYING_DISPOSITIONS = [
  "NOT_INTERESTED",
  "DO_NOT_CALL",
  "WRONG_NUMBER",
  "ALREADY_PURCHASED",
  "BROKER",
  "CALL_ENDED_ABUSIVE",
] as const;

// ─── Overview ─────────────────────────────────────────────────────────────────
router.get(
  "/overview",
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const tenantId = req.user!.tenantId;

      const [
        totalCampaigns,
        activeCampaigns,
        totalLeads,
        totalCalls,
        completedCalls,
        failedCalls,
        qualifiedLeads,
        notQualifiedLeads,
      ] = await Promise.all([
        // Campaign counts
        prisma.campaign.count({ where: { tenantId } }),
        prisma.campaign.count({ where: { tenantId, status: "RUNNING" } }),

        // Lead total
        prisma.lead.count({ where: { tenantId } }),

        // Call counts
        prisma.call.count({ where: { tenantId } }),
        prisma.call.count({ where: { tenantId, status: "COMPLETED" } }),
        prisma.call.count({ where: { tenantId, status: "FAILED" } }),

        // Qualified — from CallAnalysis disposition
        prisma.callAnalysis.count({
          where: {
            tenantId,
            disposition: { in: QUALIFYING_DISPOSITIONS as any },
          },
        }),

        // Not qualified — from CallAnalysis disposition
        prisma.callAnalysis.count({
          where: {
            tenantId,
            disposition: { in: DISQUALIFYING_DISPOSITIONS as any },
          },
        }),
      ]);

      const qualificationRate =
        totalLeads > 0 ? ((qualifiedLeads / totalLeads) * 100).toFixed(1) : "0";

      const callSuccessRate =
        totalCalls > 0 ? ((completedCalls / totalCalls) * 100).toFixed(1) : "0";

      res.json({
        success: true,
        data: {
          campaigns: {
            total: totalCampaigns,
            active: activeCampaigns,
          },
          leads: {
            total: totalLeads,
            qualified: qualifiedLeads,
            notQualified: notQualifiedLeads,
            qualificationRate: `${qualificationRate}%`,
          },
          calls: {
            total: totalCalls,
            completed: completedCalls,
            failed: failedCalls,
            successRate: `${callSuccessRate}%`,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

// ─── Recent Activity ──────────────────────────────────────────────────────────
router.get(
  "/activity",
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const tenantId = req.user!.tenantId;

      const [recentCalls, qualifiedAnalyses, recentCampaigns] =
        await Promise.all([
          // Recent calls with lead and campaign info
          prisma.call.findMany({
            where: { tenantId },
            take: 10,
            orderBy: { createdAt: "desc" },
            include: {
              lead: { select: { name: true, phone: true } },
              campaign: { select: { name: true } },
              callAnalysis: {
                select: {
                  disposition: true,
                  leadTemperature: true,
                },
              },
            },
          }),

          // Recent qualified leads via CallAnalysis disposition
          prisma.callAnalysis.findMany({
            where: {
              tenantId,
              disposition: { in: QUALIFYING_DISPOSITIONS as any },
            },
            take: 10,
            orderBy: { createdAt: "desc" },
            include: {
              call: {
                select: {
                  leadId: true,
                  campaignId: true,
                  lead: {
                    select: {
                      name: true,
                      phone: true,
                    },
                  },
                  campaign: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          }),

          // Recent campaigns
          prisma.campaign.findMany({
            where: { tenantId },
            take: 5,
            orderBy: { createdAt: "desc" },
          }),
        ]);

      // ── Shape qualified leads for consistent response ──────────────────────
      const qualifiedLeads = qualifiedAnalyses.map((analysis) => ({
        leadId: analysis.call.leadId,
        name: analysis.call.lead.name,
        phone: analysis.call.lead.phone,
        campaign: analysis.call.campaign.name,
        disposition: analysis.disposition,
        leadTemperature: analysis.leadTemperature,
        qualifiedAt: analysis.createdAt,
      }));

      res.json({
        success: true,
        data: {
          recentCalls,
          qualifiedLeads,
          recentCampaigns,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

// ─── Campaign Performance ─────────────────────────────────────────────────────
router.get(
  "/campaigns",
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const tenantId = req.user!.tenantId;

      const campaigns = await prisma.campaign.findMany({
        where: { tenantId },
        orderBy: { createdAt: "desc" },
        include: {
          assistant: { select: { name: true } },
        },
      });

      const performance = campaigns.map((c) => ({
        id: c.id,
        name: c.name,
        status: c.status,
        assistant: c.assistant.name,
        totalLeads: c.totalLeads,
        calledLeads: c.calledLeads,
        successLeads: c.successLeads,
        failedLeads: c.failedLeads,
        successRate:
          c.calledLeads > 0
            ? ((c.successLeads / c.calledLeads) * 100).toFixed(1) + "%"
            : "0%",
        progress:
          c.totalLeads > 0
            ? ((c.calledLeads / c.totalLeads) * 100).toFixed(1) + "%"
            : "0%",
        startedAt: c.startedAt,
        completedAt: c.completedAt,
        createdAt: c.createdAt,
      }));

      res.json({ success: true, data: performance });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
