import { AuthRepository } from "../interfaces/auth-repository.interface";
import { TokenService } from "../interfaces/token-service.interface";

export interface LogoutInput {
  refreshToken: string;
}

export class LogoutUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly tokenService: TokenService,
  ) {}

  async execute(input: LogoutInput): Promise<void> {
    try {
      const payload = this.tokenService.verifyRefreshToken(
        input.refreshToken,
      );
      const storedToken = await this.authRepository.findRefreshToken(
        payload.tokenId,
      );

      if (storedToken && storedToken.revokedAt === null) {
        await this.authRepository.revokeRefreshToken(storedToken.id);
      }
    } catch {
      // Logout should be idempotent — swallow token errors
    }
  }
}