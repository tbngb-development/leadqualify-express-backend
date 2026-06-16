// MVP — jobs are handled directly in campaign.service.ts
// This file is a placeholder for future Bull queue integration

export interface CampaignJobData {
  tenantId: string;
  campaignId: string;
  leadId: string;
  vapiAssistantId: string;
  phoneNumber: string;
  name: string;
}

export const processCampaignJob = async (data: CampaignJobData) => {
  console.log(`[CampaignJob] Processing lead ${data.leadId}`);
};