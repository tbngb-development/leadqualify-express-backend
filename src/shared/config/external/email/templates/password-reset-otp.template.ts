import {
  emailLayout,
  sectionPadding,
  heading,
  infoBox,
  COLORS,
  escapeHtml,
} from "./email-layout";

export interface PasswordResetOtpTemplateInput {
  recipientName: string;
  otp: string;
  ttlMinutes: number;
}

export function passwordResetOtpTemplate(
  input: PasswordResetOtpTemplateInput,
): { subject: string; html: string } {
  const { recipientName, otp, ttlMinutes } = input;

  const subject = "Your Kooi password reset code";

  const content = sectionPadding(`
    ${heading(
      "Reset your password",
      `Hi ${recipientName}, we received a request to reset your Kooi account password.`,
    )}

    <div style="margin:32px 0;">
      <p style="margin:0 0 12px 0;font-size:13px;color:${COLORS.textMuted};text-transform:uppercase;letter-spacing:1px;font-weight:600;text-align:center;">
        Verification Code
      </p>
      <div style="background-color:${COLORS.primaryLight};border:2px solid ${COLORS.primary};border-radius:12px;padding:28px;text-align:center;">
        <span style="font-size:40px;font-weight:800;letter-spacing:14px;color:${COLORS.primaryDark};font-family:'Courier New',monospace;">
          ${escapeHtml(otp)}
        </span>
      </div>
      <p style="margin:14px 0 0 0;font-size:14px;color:${COLORS.textMuted};text-align:center;">
        This code expires in ${ttlMinutes} minutes
      </p>
    </div>

    ${infoBox(
      "If you didn't request a password reset, you can safely ignore this email. Your password will not be changed.",
      "info",
    )}

    <p style="margin:20px 0 0 0;font-size:14px;color:${COLORS.textMuted};line-height:1.5;">
      For your security, never share this code with anyone. Kooi support will never ask for it.
    </p>
  `);

  return {
    subject,
    html: emailLayout({
      previewText: `Your Kooi password reset code is ${otp}`,
      content,
    }),
  };
}
