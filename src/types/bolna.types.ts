// src/types/bolna.types.ts

export interface BolnaCallPayload {
  agent_id: string;
  recipient_phone_number: string;
  user_data?: Record<string, string>;
  scheduled_at?: string;
}

export interface BolnaCallResponse {
  id: string;
  status: string;
  message: string;
  execution_id: string;
  agent_id: string;
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

// ─────────────────────────────────────────────────────────────────────────────
// BOLNA EXTRACTION — per-field shape returned by Bolna AI
// ─────────────────────────────────────────────────────────────────────────────
export enum BolnaDataSection {
  CALL_OUTCOME = "Call Outcome",
  LEAD_QUALIFICATION = "Lead Qualification",
  NEXT_ACTION_AND_CONTACT_PREFERENCE = "Next Action and Contact Preference",
  FOLLOW_UP_SCHEDULE = "Follow-Up Schedule",
  COMPLIANCE = "Compliance",
  SUMMARY = "Summary",
}

export interface BolnaExtractedField {
  subjective: string | null;
  objective: string | null;
  confidence: number;
  confidence_label: string;
  reasoning_subjective: string | null;
  reasoning_objective: string | null;
  validation: string | null;
}

export interface BolnaExtractedData {
  [BolnaDataSection.CALL_OUTCOME]?: {
    disposition?: BolnaExtractedField;
    lead_temperature?: BolnaExtractedField;
  };
  [BolnaDataSection.LEAD_QUALIFICATION]?: {
    preferred_configuration?: BolnaExtractedField;
    budget_range?: BolnaExtractedField;
    purchase_timeline?: BolnaExtractedField;
    purchase_purpose?: BolnaExtractedField;
    location_match?: BolnaExtractedField;
    customer_location_pref?: BolnaExtractedField;
  };
  [BolnaDataSection.NEXT_ACTION_AND_CONTACT_PREFERENCE]?: {
    preferred_next_action?: BolnaExtractedField;
    preferred_contact_channel?: BolnaExtractedField;
  };
  [BolnaDataSection.FOLLOW_UP_SCHEDULE]?: {
    followup_schedule?: BolnaExtractedField;
  };
  [BolnaDataSection.COMPLIANCE]?: {
    do_not_call?: BolnaExtractedField;
    language_support_required?: BolnaExtractedField;
  };
  [BolnaDataSection.SUMMARY]?: {
    call_summary?: BolnaExtractedField;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FLAT PARSED OUTPUT — what we store in CallAnalysis model
// ─────────────────────────────────────────────────────────────────────────────

export interface ParsedCallAnalysis {
  disposition: string | null;
  leadTemperature: string | null;
  preferredConfiguration: string | null;
  budgetRange: string | null;
  purchaseTimeline: string | null;
  purchasePurpose: string | null;
  locationMatch: string | null;
  customerLocationPref: string | null;
  preferredNextAction: string | null;
  preferredContactChannel: string | null;
  followupSchedule: string | null;
  doNotCall: string | null;
  languageSupportRequired: string | null;
  callSummary: string | null;
}
