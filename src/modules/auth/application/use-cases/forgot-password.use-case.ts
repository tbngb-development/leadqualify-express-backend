import type { AuthRepository } from "../interfaces/auth-repository.interface";
import type { OtpService } from "../interfaces/otp-service.interface";
import type { IEmailService } from "../../../../shared/config/external/email/email.interface";
import type {
  ForgotPasswordInput,
  ForgotPasswordOutput,
} from "../dto/forgot-password.dto";
import { passwordResetOtpTemplate } from "../../../../shared/config/external/email/templates/password-reset-otp.template";
import { AuthMessages } from "../../../../shared/constants/messages";

const OTP_PURPOSE = "password-reset";
const OTP_TTL_MINUTES = 5;

export class ForgotPasswordUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly otpService: OtpService,
    private readonly emailService: IEmailService,
  ) {}

  async execute(input: ForgotPasswordInput): Promise<ForgotPasswordOutput> {
    const normalizedEmail = input.email.trim().toLowerCase();

    // Always return the same response to prevent user enumeration
    const genericResponse: ForgotPasswordOutput = {
      message: AuthMessages.FORGOT_PASSWORD_SENT,
    };

    const user = await this.authRepository.findUserByEmail(normalizedEmail);
    if (!user || !user.isActive) {
      return genericResponse;
    }

    const otp = await this.otpService.generateAndStore(
      OTP_PURPOSE,
      normalizedEmail,
    );

    const { subject, html } = passwordResetOtpTemplate({
      recipientName: user.name,
      otp,
      ttlMinutes: OTP_TTL_MINUTES,
    });

    await this.emailService.send({
      to: normalizedEmail,
      subject,
      html,
    });

    return genericResponse;
  }
}
