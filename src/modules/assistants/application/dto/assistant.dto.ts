export interface RegisterAssistantInput {
  tenantId: string;
  name: string;
  bolnaId: string;
}

export interface UpdateAssistantInput {
  tenantId: string;
  id: string;
  name: string;
}

export interface GetAssistantOutput {
  assistant: {
    id: string;
    bolnaId: string;
    name: string;
    tenantId: string;
    config: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;
  };
  variables: {key: string, label: string}[];
}
