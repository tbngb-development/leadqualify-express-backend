import { Request, Response, NextFunction } from "express";
import { ListUsersUseCase } from "../application/use-cases/list-users.use-case";
import { CreateUserUseCase } from "../application/use-cases/create-user.use-case";
import { UpdateUserUseCase } from "../application/use-cases/update-user.use-case";
import { DeleteUserUseCase } from "../application/use-cases/delete-user.use-case";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import { AuthRequest, TenantAuthContext } from "../../../shared/types";
import { CreateUserBody, UpdateUserBody } from "./user.schema";

export class UserController {
  constructor(
    private readonly listUsers: ListUsersUseCase,
    private readonly createUser: CreateUserUseCase,
    private readonly updateUser: UpdateUserUseCase,
    private readonly deleteUser: DeleteUserUseCase,
  ) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const members = await this.listUsers.execute(tenantId);
      sendSuccess(res, members);
    } catch (err) {
      next(err);
    }
  };

  create = async (
    req: Request<unknown, unknown, CreateUserBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const member = await this.createUser.execute(tenantId, req.body);
      sendSuccess(res, member, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  updateHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const targetUserId = req.params.id as string;
      const updated = await this.updateUser.execute(
        tenantId,
        targetUserId,
        req.body,
      );
      sendSuccess(res, updated);
    } catch (err) {
      next(err);
    }
  };

  deleteHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId, userId: activeUserId } = (req as AuthRequest)
        .user as TenantAuthContext;
      const targetUserId = req.params.id as string;
      await this.deleteUser.execute(tenantId, activeUserId, targetUserId);
      sendSuccess(res, { message: "User deleted successfully" });
    } catch (err) {
      next(err);
    }
  };
}
