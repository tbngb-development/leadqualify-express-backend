import { Resend } from "resend";
import { env } from "../../env";
import type { IEmailService, SendEmailInput } from "./email.interface";

export class ResendEmailService implements IEmailService {
  private readonly client: Resend | null;

  constructor() {
    this.client = env.resend.apiKey ? new Resend(env.resend.apiKey) : null;
  }

  async send(input: SendEmailInput): Promise<void> {
    if (!this.client) {
      console.warn(
        "[Email] RESEND_API_KEY not set — skipping send:",
        input.subject,
      );
      return;
    }

    try {
      await this.client.emails.send({
        from: env.resend.fromEmail,
        to: input.to,
        subject: input.subject,
        html: input.html,
      });
    } catch (err) {
      // Never break user flows on email failure
      console.error("[Email] send failed:", err);
    }
  }
}
