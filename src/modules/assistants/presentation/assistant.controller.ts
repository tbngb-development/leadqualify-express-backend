import { Request, Response, NextFunction } from "express";
import { ListAssistantsUseCase } from "../application/use-cases/list-assistants.use-case";
import { ListBolnaAgentsUseCase } from "../application/use-cases/list-bolna-agents.use-case";
import { GetAssistantUseCase } from "../application/use-cases/get-assistant.use-case";
import { RegisterAssistantUseCase } from "../application/use-cases/register-assistant.use-case";
import { UpdateAssistantUseCase } from "../application/use-cases/update-assistant.use-case";
import { SyncAssistantUseCase } from "../application/use-cases/sync-assistant.use-case";
import { DeleteAssistantUseCase } from "../application/use-cases/delete-assistant.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";

export class AssistantController {
  constructor(
    private readonly listAssistants: ListAssistantsUseCase,
    private readonly listBolnaAgents: ListBolnaAgentsUseCase,
    private readonly getAssistant: GetAssistantUseCase,
    private readonly registerAssistant: RegisterAssistantUseCase,
    private readonly updateAssistant: UpdateAssistantUseCase,
    private readonly syncAssistant: SyncAssistantUseCase,
    private readonly deleteAssistant: DeleteAssistantUseCase,
  ) {}

  // ─── Tenant Read-Only Handlers ───────────────────────────────────────────

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.listAssistants.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  listBolnaAgentsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = await this.listBolnaAgents.execute();
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  get = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const assistantId = req.params.id as string;
      const data = await this.getAssistant.execute(tenantId, assistantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ─── Platform Admin Handlers ─────────────────────────────────────────────
  // tenantId is resolved from query param (?tenantId=xxx) or request body

  private resolveAdminTenantId(req: Request): string {
    const tenantId =
      (req.query.tenantId as string) ??
      (req.body?.tenantId as string) ??
      ((req as AuthRequest).user as TenantAuthContext)?.tenantId;

    if (!tenantId) {
      throw new Error("tenantId is required for admin assistant operations");
    }
    return tenantId;
  }

  adminList = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      const data = await this.listAssistants.execute(tenantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  adminGet = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      const assistantId = req.params.id as string;
      const data = await this.getAssistant.execute(tenantId, assistantId);
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  adminRegister = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      console.log("tenantId: ", tenantId);
      const data = await this.registerAssistant.execute({
        tenantId,
        name: req.body.name,
        bolnaId: req.body.bolnaId,
      });
      sendSuccess(res, data, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  adminUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      const data = await this.updateAssistant.execute({
        tenantId,
        id: req.params.id as string,
        name: req.body.name,
      });
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  adminSync = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      const data = await this.syncAssistant.execute(
        tenantId,
        req.params.id as string,
      );
      sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  };

  adminDelete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = this.resolveAdminTenantId(req);
      await this.deleteAssistant.execute(tenantId, req.params.id as string);
      sendSuccess(res, { message: "Assistant removed successfully" });
    } catch (err) {
      next(err);
    }
  };
}
