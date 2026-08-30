export interface AssistantEntityData {
  id: string;
  bolnaId: string;
  name: string;
  tenantId: string;
  config: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export class AssistantEntity {
  constructor(private readonly data: AssistantEntityData) {}

  get id(): string {
    return this.data.id;
  }
  get bolnaId(): string {
    return this.data.bolnaId;
  }
  get name(): string {
    return this.data.name;
  }
  get tenantId(): string {
    return this.data.tenantId;
  }
  get config(): Record<string, unknown> {
    return this.data.config;
  }

  toPrimitives(): AssistantEntityData {
    return { ...this.data };
  }
}
