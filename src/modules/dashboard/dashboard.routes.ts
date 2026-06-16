import { Router, Response, NextFunction } from "express";
import { authenticate, AuthRequest } from "../../middleware/auth";
import prisma from "../../config/database";

const router = Router();

router.use(authenticate);

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
        qualifiedLeads,
        notQualifiedLeads,
        totalCalls,
        completedCalls,
        failedCalls,
      ] = await Promise.all([
        prisma.campaign.count({ where: { tenantId } }),
        prisma.campaign.count({ where: { tenantId, status: "RUNNING" } }),
        prisma.lead.count({ where: { tenantId } }),
        prisma.lead.count({ where: { tenantId, status: "QUALIFIED" } }),
        prisma.lead.count({ where: { tenantId, status: "NOT_QUALIFIED" } }),
        prisma.call.count({ where: { tenantId } }),
        prisma.call.count({ where: { tenantId, status: "COMPLETED" } }),
        prisma.call.count({ where: { tenantId, status: "FAILED" } }),
      ]);

      const qualificationRate =
        totalLeads > 0
          ? ((qualifiedLeads / totalLeads) * 100).toFixed(1)
          : "0";

      const callSuccessRate =
        totalCalls > 0
          ? ((completedCalls / totalCalls) * 100).toFixed(1)
          : "0";

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
  }
);

// ─── Recent Activity ──────────────────────────────────────────────────────────
router.get(
  "/activity",
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const tenantId = req.user!.tenantId;

      const [recentCalls, qualifiedLeads, recentCampaigns] = await Promise.all(
        [
          prisma.call.findMany({
            where: { tenantId },
            take: 10,
            orderBy: { createdAt: "desc" },
            include: {
              lead: { select: { name: true, phone: true } },
              campaign: { select: { name: true } },
            },
          }),
          prisma.lead.findMany({
            where: { tenantId, status: "QUALIFIED" },
            take: 10,
            orderBy: { updatedAt: "desc" },
            include: {
              campaign: { select: { name: true } },
            },
          }),
          prisma.campaign.findMany({
            where: { tenantId },
            take: 5,
            orderBy: { createdAt: "desc" },
          }),
        ]
      );

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
  }
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
  }
);

export default router;