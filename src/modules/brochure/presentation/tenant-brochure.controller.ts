import type { Request, Response, NextFunction } from "express";
import type { AuthRequest, TenantAuthContext } from "../../../shared/types";
import type { SaveBrochureBody, UpdateBrochureBody } from "./brochure.schema";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import { cleanupUploadedFile } from "../../../shared/middleware/upload";
import { param } from "../../../shared/utils/paramHelper";
import type { ExtractBrochureUseCase } from "../application/use-cases/extract-brochure.use-case";
import type { SaveBrochureUseCase } from "../application/use-cases/save-brochure.use-case";
import type { ListBrochuresUseCase } from "../application/use-cases/list-brochures.use-case";
import type { GetBrochureUseCase } from "../application/use-cases/get-brochure.use-case";
import type { UpdateBrochureUseCase } from "../application/use-cases/update-brochure.use-case";
import type { DeleteBrochureUseCase } from "../application/use-cases/delete-brochure.use-case";

export class TenantBrochureController {
  constructor(
    private readonly extractUseCase: ExtractBrochureUseCase,
    private readonly saveUseCase: SaveBrochureUseCase,
    private readonly listUseCase: ListBrochuresUseCase,
    private readonly getUseCase: GetBrochureUseCase,
    private readonly updateUseCase: UpdateBrochureUseCase,
    private readonly deleteUseCase: DeleteBrochureUseCase,
  ) {}

  extract = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const filePath = req.file?.path;
    try {
      if (!req.file || !filePath) {
        res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          error: "PDF file is required",
        });
        return;
      }

      const fileSizeMB = (req.file.size / (1024 * 1024)).toFixed(2);
      const result = await this.extractUseCase.execute({
        filePath,
        originalFileName: req.file.originalname,
        fileSizeMB,
      });

      sendSuccess(
        res,
        result,
        HttpStatus.OK,
        "Brochure extracted successfully",
      );
    } catch (err) {
      if (filePath) cleanupUploadedFile(filePath);
      next(err);
    }
  };

  save = async (
    req: Request<unknown, unknown, SaveBrochureBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.saveUseCase.execute(tenantId, req.body);
      sendSuccess(res, data, HttpStatus.CREATED, "Brochure saved successfully");
    } catch (err) {
      next(err);
    }
  };

  list = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      const data = await this.listUseCase.execute(tenantId);
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
      const data = await this.getUseCase.execute(tenantId, param(req, "id"));
      sendSuccess(res, data);
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
      const data = await this.updateUseCase.execute(
        tenantId,
        param(req, "id"),
        req.body,
      );
      sendSuccess(res, data, HttpStatus.OK, "Brochure updated successfully");
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
      const { tenantId } = (req as AuthRequest).user as TenantAuthContext;
      await this.deleteUseCase.execute(tenantId, param(req, "id"));
      sendSuccess(res, { message: "Brochure removed successfully" });
    } catch (err) {
      next(err);
    }
  };
}
