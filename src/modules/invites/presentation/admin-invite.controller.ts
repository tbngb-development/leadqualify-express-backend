import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import type { AuthRequest } from "../../../shared/types";
import type { CreateOwnerInviteUseCase } from "../application/use-cases/create-owner-invite.use-case";

export class AdminInviteController {
  constructor(private readonly createInvite: CreateOwnerInviteUseCase) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { userId } = (req as AuthRequest).user;
      const result = await this.createInvite.execute({
        ...req.body,
        invitedBy: userId,
      });
      sendSuccess(res, result, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };
}
