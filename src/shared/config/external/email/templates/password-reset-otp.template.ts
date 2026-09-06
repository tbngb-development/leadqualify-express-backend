export interface PasswordResetOtpTemplateInput {
  recipientName: string;
  otp: string;
  ttlMinutes: number;
}

export function passwordResetOtpTemplate(
  input: PasswordResetOtpTemplateInput,
): { subject: string; html: string } {
  const { recipientName, otp, ttlMinutes } = input;

  const subject = "Your password reset code";

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Password Reset OTP</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f7f7f9; margin: 0; padding: 32px;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"
             style="max-width: 560px; width: 100%; background: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 32px 32px 16px 32px;">
            <h2 style="margin: 0 0 8px 0; color: #111827;">Password reset request</h2>
            <p style="margin: 0; color: #4b5563; font-size: 14px;">
              Hi ${escapeHtml(recipientName)}, use the code below to reset your password.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 32px 24px 32px;">
            <div style="text-align: center; background: #f3f4f6; border-radius: 8px; padding: 24px;">
              <div style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #111827;">
                ${escapeHtml(otp)}
              </div>
              <div style="margin-top: 8px; color: #6b7280; font-size: 12px;">
                This code expires in ${ttlMinutes} minutes
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 32px 32px 32px;">
            <p style="margin: 0 0 8px 0; color: #4b5563; font-size: 13px;">
              If you didn't request a password reset, you can safely ignore this email.
              Your password will not be changed.
            </p>
            <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
              For security reasons, never share this code with anyone.
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>`;

  return { subject, html };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
