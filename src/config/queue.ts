// Placeholder — Bull queue for future use
// For MVP we process calls synchronously in campaign.service.ts

export const campaignQueue = {
  add: async (data: unknown) => {
    console.log("[Queue] Job added:", data);
  },
};