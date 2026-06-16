// MVP — calls are handled directly in campaign.service.ts
// This file is a placeholder for future Bull queue integration

export interface CallJobData {
  tenantId: string;
  campaignId: string;
  leadId: string;
  phoneNumber: string;
  vapiAssistantId: string;
}

export const processCallJob = async (data: CallJobData) => {
  console.log(`[CallJob] Processing call for ${data.phoneNumber}`);
};