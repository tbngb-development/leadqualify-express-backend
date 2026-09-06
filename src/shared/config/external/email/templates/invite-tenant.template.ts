import {
  emailLayout,
  sectionPadding,
  heading,
  bodyText,
  ctaButton,
  divider,
  infoBox,
  keyValueRow,
  COLORS,
  escapeHtml,
} from "./email-layout";

export interface InviteTenantTemplateInput {
  tenantName: string;
  planName: string;
  inviteUrl: string;
  expiresAt: string;
}

export function inviteTenantEmailHtml(
  params: InviteTenantTemplateInput,
): string {
  const subject = `You're invited to join ${params.tenantName} on Bolna AI`;

  const content = sectionPadding(`
    ${heading(
      "You've been invited!",
      `You've been invited to join ${params.tenantName} on the Bolna AI platform.`,
    )}

    <div style="margin:24px 0;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
             style="background-color:${COLORS.background};border-radius:8px;padding:4px 0;">
        ${keyValueRow("Organization", params.tenantName)}
        ${keyValueRow("Plan", `<span style="color:${COLORS.primary};font-weight:600;">${escapeHtml(params.planName)}</span>`)}
        ${keyValueRow("Expires", params.expiresAt)}
      </table>
    </div>

    <div style="text-align:center;">
      ${ctaButton("Accept Invite & Create Account", params.inviteUrl)}
    </div>

    ${divider()}

    ${bodyText("Or copy and paste this link into your browser:")}
    <p style="margin:0 0 16px 0;font-size:12px;color:${COLORS.primary};word-break:break-all;line-height:1.5;">
      ${escapeHtml(params.inviteUrl)}
    </p>

    ${infoBox("This invitation will expire on " + escapeHtml(params.expiresAt) + ". After that, you'll need a new invite.", "warning")}
  `);

  return emailLayout({
    previewText: `Join ${params.tenantName} on Bolna AI`,
    content,
  });
}
