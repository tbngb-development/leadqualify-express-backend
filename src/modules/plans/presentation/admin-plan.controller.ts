import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import { param } from "../../../shared/utils/paramHelper";
import type { ListPlansUseCase } from "../application/use-cases/list-plans.use-case";
import type { GetPlanUseCase } from "../application/use-cases/get-plan.use-case";
import type { CreatePlanUseCase } from "../application/use-cases/create-plan.use-case";
import type { UpdatePlanUseCase } from "../application/use-cases/update-plan.use-case";
import type {
  CreatePlanInput,
  UpdatePlanInput,
} from "../application/dto/plan.dto";

export class AdminPlanController {
  constructor(
    private readonly listPlansUseCase: ListPlansUseCase,
    private readonly getPlanUseCase: GetPlanUseCase,
    private readonly createPlanUseCase: CreatePlanUseCase,
    private readonly updatePlanUseCase: UpdatePlanUseCase,
  ) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const includeInactive = req.query.includeInactive === "true";
      const plans = await this.listPlansUseCase.execute({ includeInactive });
      sendSuccess(res, plans);
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
      const plan = await this.getPlanUseCase.execute(param(req, "id"));
      sendSuccess(res, plan);
    } catch (err) {
      next(err);
    }
  };

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const plan = await this.createPlanUseCase.execute(
        req.body as CreatePlanInput,
      );
      sendSuccess(res, plan, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const plan = await this.updatePlanUseCase.execute(
        param(req, "id"),
        req.body as UpdatePlanInput,
      );
      sendSuccess(res, plan);
    } catch (err) {
      next(err);
    }
  };
}
