import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import { HttpStatus } from "../../../shared/constants/http-status";
import { param } from "../../../shared/utils/paramHelper";
import { getTenantContext } from "../../../shared/utils/tenant-context";
import type { CreateOrderUseCase } from "../application/use-cases/create-order.use-case";
import type { VerifyPaymentUseCase } from "../application/use-cases/verify-payment.use-case";
import type { GetOrderStatusUseCase } from "../application/use-cases/get-order-status.use-case";
import type {
  CreateOrderInput,
  VerifyPaymentInput,
} from "../application/dto/payment.dto";

export class TenantPaymentController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly verifyPaymentUseCase: VerifyPaymentUseCase,
    private readonly getOrderStatusUseCase: GetOrderStatusUseCase,
  ) {}

  createOrder = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = getTenantContext(req);
      const body = req.body as Omit<CreateOrderInput, "tenantId">;
      const result = await this.createOrderUseCase.execute({
        ...body,
        tenantId,
      });
      sendSuccess(res, result, HttpStatus.CREATED);
    } catch (err) {
      next(err);
    }
  };

  verify = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = getTenantContext(req);
      const body = req.body as Omit<VerifyPaymentInput, "tenantId">;
      const result = await this.verifyPaymentUseCase.execute({
        ...body,
        tenantId,
      });
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  };

  orderStatus = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { tenantId } = getTenantContext(req);
      const result = await this.getOrderStatusUseCase.execute({
        tenantId,
        orderId: param(req, "orderId"),
      });
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  };
}
