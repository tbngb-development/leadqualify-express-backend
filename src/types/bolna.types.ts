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

// export interface BolnaTask {
//   task_type: string;
//   toolchain: BolnaToolchain;
//   task_config?: Record<string, any>;
// }

// export interface BolnaToolchain {
//   execution: string;
//   pipelines: string[][];
// }

// export interface BolnaAgentResponse {
//   agent_id: string;
//   agent_name: string;
//   agent_type: string;
//   created_at: string;
// }



// ─────────────────────────────────────────────────────────────────────────────
// LLM CONFIG
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaLLMConfig {
  agent_flow_type: string;
  provider: string;
  family: string;
  model: string;
  summarization_details: unknown | null;
  extraction_details: unknown | null;
  max_tokens: number;
  presence_penalty: number;
  frequency_penalty: number;
  base_url: string;
  top_p: number;
  min_p: number;
  top_k: number;
  temperature: number;
  request_json: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaRoute {
  route_name: string;
  utterances: string[];
  response: string;
  score_threshold: number;
}

export interface BolnaRoutesConfig {
  embedding_model: string;
  routes: BolnaRoute[];
}

// ─────────────────────────────────────────────────────────────────────────────
// LLM AGENT
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaLLMAgent {
  agent_type: string;
  agent_flow_type: string;
  routes: BolnaRoutesConfig | null;
  llm_config: BolnaLLMConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// SYNTHESIZER
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaSynthesizerProviderConfig {
  voice: string;
  voice_id: string;
  model: string;
}

export interface BolnaSynthesizer {
  provider: string;
  provider_config: BolnaSynthesizerProviderConfig;
  stream: boolean;
  buffer_size: number;
  audio_format: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// TRANSCRIBER
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaTranscriber {
  provider: string;
  model: string;
  language: string;
  stream: boolean;
  sampling_rate: number;
  encoding: string;
  endpointing: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// INPUT / OUTPUT
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaIOConfig {
  provider: string;
  format: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLS CONFIG
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaToolsConfig {
  llm_agent: BolnaLLMAgent;
  synthesizer: BolnaSynthesizer;
  transcriber: BolnaTranscriber;
  input: BolnaIOConfig;
  output: BolnaIOConfig;
  api_tools: unknown | null;
  multilingual_config: unknown | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLCHAIN
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaToolchain {
  pipelines: string[][];
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK CONFIG
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaTaskConfig {
  hangup_after_silence: number;
  incremental_delay: number;
  number_of_words_for_interruption: number;
  hangup_after_LLMCall: boolean;
  call_cancellation_prompt: string | null;
  backchanneling: boolean;
  backchanneling_message_gap: number;
  backchanneling_start_delay: number;
  ambient_noise_track: string;
  call_terminate: number;
  voicemail: boolean;
  inbound_limit: number;
  whitelist_phone_numbers: string[] | null;
  disallow_unknown_numbers: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaTask {
  tools_config: BolnaToolsConfig;
  toolchain: BolnaToolchain;
  task_config: BolnaTaskConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// INGEST SOURCE CONFIG
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaIngestSourceConfig {
  source_type: string;
  source_url: string | null;
  source_auth_token: string | null;
  source_name: string | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// AGENT PROMPTS
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaTaskPrompt {
  system_prompt: string;
  first_message?: string;
}

export interface BolnaAgentPrompts {
  [taskKey: string]: BolnaTaskPrompt;
  task_1: BolnaTaskPrompt;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN AGENT RESPONSE
// ─────────────────────────────────────────────────────────────────────────────

export interface BolnaAgentResponse {
  id: string;
  agent_name: string;
  agent_type: string;
  agent_status: string;
  created_at: string;
  updated_at: string;
  tasks: BolnaTask[];
  ingest_source_config: BolnaIngestSourceConfig | null;
  agent_prompts: BolnaAgentPrompts;
}

