import { Request, Response } from "express";
import prisma from "../../config/database";
import { Vapi } from "@vapi-ai/server-sdk";

export const handleVapiWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const payload = req.body;

  console.log("[Webhook] Event:", payload.message.type);

  try {
    switch (payload.message.type) {
      case "call-started": {
        console.log("call started: ");
        await prisma.call.updateMany({
          where: { vapiCallId: payload.call?.id },
          data: { status: "CALLING", startedAt: new Date() },
        });
        break;
      }

      // case "assistant.started": {
      //   await prisma.call.updateMany({
      //     where: { vapiCallId: payload.call?.id },
      //     data: { status: "CALLING", startedAt: new Date() },
      //   });
      //   break;
      // }

      case "call-ended": {
        const call = await prisma.call.findFirst({
          where: { vapiCallId: payload.call?.id },
        });

        if (call) {
          await prisma.call.update({
            where: { id: call.id },
            data: {
              status: "COMPLETED",
              endedAt: new Date(),
              duration: payload.call?.duration,
              recording: payload.call?.recordingUrl,
            },
          });

          await prisma.lead.update({
            where: { id: call.leadId },
            data: { status: "CALLED" },
          });

          await prisma.campaign.update({
            where: { id: call.campaignId },
            data: { calledLeads: { increment: 1 } },
          });
        }
        break;
      }

      case "end-of-call-report": {
        const report = payload.message;
        const call = await prisma.call.findFirst({
          where: { vapiCallId: report.call?.id },
        });

        if (call) {
          console.log("call report exists: ", call);
          const summary: string = report.summary || "";

          const normalizedMessages = (report.messages ?? [])
            .filter(
              (msg: any) =>
                msg.role === "user" ||
                msg.role === "bot" ||
                msg.role === "assistant",
            )
            .map((msg: any) => ({
              role: msg.role === "bot" ? "assistant" : msg.role,
              message: msg.message ?? "",
              time: msg.time ?? null,
              endTime: msg.endTime ?? null,
              secondsFromStart: msg.secondsFromStart ?? null,
              duration: msg.duration ?? null,
            }));

          const transcriptText =
            report.transcript ||
            normalizedMessages
              .map(
                (msg: any) =>
                  `${msg.role === "assistant" ? "Agent" : "Lead"}: ${msg.message}`,
              )
              .join("\n");

          const lowerSummary = summary.toLowerCase();

          const outcome =
            lowerSummary.includes("not interested") ||
            lowerSummary.includes("not qualified")
              ? "NOT_QUALIFIED"
              : lowerSummary.includes("qualified")
                ? "QUALIFIED"
                : "CALLED";

          const callEndStatus =
            report.endedReason === "customer-busy" ? "NO_ANSWER" : "COMPLETED";

          await prisma.call.update({
            where: { id: call.id },
            data: {
              summary: summary || null,
              transcript: transcriptText || null,
              transcriptMessages: normalizedMessages,
              duration: report.durationSeconds ?? null,
              recording: report.recordingUrl ?? null,
              outcome,
              status: callEndStatus,
              endedAt: new Date(),
            },
          });

          await prisma.lead.update({
            where: { id: call.leadId },
            data: { status: outcome as any },
          });

          if (outcome === "QUALIFIED") {
            await prisma.campaign.update({
              where: { id: call.campaignId },
              data: { successLeads: { increment: 1 } },
            });
          } else if (outcome === "CALLED") {
            await prisma.campaign.update({
              where: { id: call.campaignId },
              data: { calledLeads: { increment: 1 } },
            });
          }
        }
        break;
      }

      case "transcript": {
        if (payload.call?.id) {
          await prisma.call.updateMany({
            where: { vapiCallId: payload.call.id },
            data: { transcript: payload.transcript },
          });
        }
        break;
      }

      case "status-update": {
        console.log("status update event payload:", payload);
        break;
      }

      default:
        console.log("[Webhook] Unhandled event:", payload.message.type);
        console.log("[Webhook] Unhandled event: payload:", payload);
    }
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
  }

  res.json({ received: true });
};
