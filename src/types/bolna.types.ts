export interface BolnaCallPayload {
  agent_id: string;
  recipient_phone_number: string;
  user_data?: Record<string, string>;
}

export interface BolnaCallResponse {
  // Bolna top-level call object
  id: string; // ← confirmed: "17d9ad0f-..."
  status: string; // "queued" | "in-progress" | "completed"
  agent_id: string;
  message?: string;

  // Legacy fields from queue response — keep as fallback
  execution_id?: string;
  run_id?: string;

  // Call data (populated after completion)
  transcript?: string | null;
  summary?: string | null;
  conversation_duration?: number;
  total_cost?: number;
  error_message?: string | null;

  telephony_data?: {
    duration: number;
    recording_url: string;
    to_number: string;
    from_number: string;
    hangup_reason?: string | null;
    hangup_by?: string | null;
  };

  context_details?: {
    recipient_data: Record<string, string>;
    recipient_phone_number: string;
  };

  usage_breakdown?: {
    llmTokens: number;
    synthesizer_model: string;
    transcriber_model: string;
  };
}

export interface BolnaCreateAgentPayload {
  agent_name: string;
  agent_welcome_message: string;
  agent_type: string;
  tasks: BolnaTask[];
}

export interface BolnaTask {
  task_type: string;
  toolchain: BolnaToolchain;
  task_config?: Record<string, any>;
}

export interface BolnaToolchain {
  execution: string;
  pipelines: string[][];
}

export interface BolnaAgentResponse {
  agent_id: string;
  agent_name: string;
  agent_type: string;
  created_at: string;
}
