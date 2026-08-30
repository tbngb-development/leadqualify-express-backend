export interface DashboardOverviewOutput {
  campaigns: {
    total: number;
    active: number;
  };
  leads: {
    total: number;
    qualified: number;
    notQualified: number;
    qualificationRate: string;
  };
  calls: {
    total: number;
    completed: number;
    failed: number;
    successRate: string;
  };
}

export interface RecentCallData {
  id: string;
  bolnaCallId: string | null;
  status: string;
  duration: number | null;
  cost: number | null;
  recording: string | null;
  startedAt: Date | null;
  createdAt: Date;
  lead: {
    name: string | null;
    phone: string;
  } | null;
  campaign: {
    name: string;
  } | null;
  callAnalysis: {
    disposition: string | null;
    leadTemperature: string | null;
  } | null;
}

export interface QualifiedLeadActivity {
  leadId: string;
  name: string | null;
  phone: string;
  campaign: string;
  disposition: string | null;
  leadTemperature: string | null;
  qualifiedAt: Date;
}

export interface RecentCampaignData {
  id: string;
  name: string;
  status: string;
  totalLeads: number;
  calledLeads: number;
  completedLeads: number;
  failedLeads: number;
  createdAt: Date;
}

export interface DashboardActivityOutput {
  recentCalls: RecentCallData[];
  qualifiedLeads: QualifiedLeadActivity[];
  recentCampaigns: RecentCampaignData[];
}

export interface CampaignPerformanceOutput {
  id: string;
  name: string;
  status: string;
  assistant: string;
  totalLeads: number;
  calledLeads: number;
  completedLeads: number;
  failedLeads: number;
  completedRate: string;
  progress: string;
  startedAt: Date | null;
  completedAt: Date | null;
  createdAt: Date;
}