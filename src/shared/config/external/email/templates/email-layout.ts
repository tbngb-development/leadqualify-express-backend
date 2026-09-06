export interface EmailLayoutOptions {
  previewText?: string;
  content: string;
}

const COLORS = {
  primary: "#4F46E5",
  primaryLight: "#EEF2FF",
  background: "#F9FAFB",
  card: "#FFFFFF",
  border: "#E5E7EB",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  success: "#059669",
  successLight: "#ECFDF5",
  warning: "#D97706",
  warningLight: "#FFFBEB",
  danger: "#DC2626",
  dangerLight: "#FEF2F2",
} as const;

export { COLORS };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export { escapeHtml };

export function emailLayout(options: EmailLayoutOptions): string {
  const { previewText = "", content } = options;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title></title>
  <!--[if mso]>
  <style>body,table,td{font-family:Arial,sans-serif!important}</style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${COLORS.background};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  ${previewText ? `<div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${COLORS.background};">${escapeHtml(previewText)}</div>` : ""}

  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:${COLORS.background};padding:32px 16px;">
    <tr>
      <td align="center">

        <!-- Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:560px;">

          <!-- Logo / Brand Header -->
          <tr>
            <td style="padding:0 0 24px 0;text-align:center;">
              <span style="font-size:22px;font-weight:700;color:${COLORS.primary};letter-spacing:-0.5px;">Bolna</span>
              <span style="font-size:22px;font-weight:300;color:${COLORS.textSecondary};letter-spacing:-0.5px;"> AI</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:${COLORS.card};border-radius:12px;border:1px solid ${COLORS.border};overflow:hidden;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0 0;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:12px;color:${COLORS.textMuted};">
                This is an automated message from Bolna AI.
              </p>
              <p style="margin:0;font-size:12px;color:${COLORS.textMuted};">
                If you have questions, reply to this email or contact support.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Container -->

      </td>
    </tr>
  </table>

</body>
</html>`;
}

// ── Reusable Components ──────────────────────────────────────────────

export function sectionPadding(inner: string): string {
  return `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr><td style="padding:32px;">${inner}</td></tr>
  </table>`;
}

export function heading(text: string, subtext?: string): string {
  return `
    <h1 style="margin:0 0 4px 0;font-size:20px;font-weight:700;color:${COLORS.textPrimary};line-height:1.3;">
      ${escapeHtml(text)}
    </h1>
    ${subtext ? `<p style="margin:0;font-size:14px;color:${COLORS.textSecondary};line-height:1.5;">${escapeHtml(subtext)}</p>` : ""}
  `;
}

export function bodyText(text: string): string {
  return `<p style="margin:0 0 16px 0;font-size:14px;color:${COLORS.textSecondary};line-height:1.6;">${text}</p>`;
}

export function ctaButton(label: string, url: string): string {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:24px 0;">
      <tr>
        <td style="border-radius:8px;background-color:${COLORS.primary};">
          <a href="${url}" target="_blank"
             style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:8px;line-height:1.4;">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
}

export function divider(): string {
  return `<hr style="margin:24px 0;border:none;border-top:1px solid ${COLORS.border};" />`;
}

export function infoBox(
  text: string,
  variant: "info" | "warning" | "success" | "danger" = "info",
): string {
  const styles = {
    info: { bg: COLORS.primaryLight, color: COLORS.primary, icon: "ℹ️" },
    warning: { bg: COLORS.warningLight, color: COLORS.warning, icon: "⚠️" },
    success: { bg: COLORS.successLight, color: COLORS.success, icon: "✅" },
    danger: { bg: COLORS.dangerLight, color: COLORS.danger, icon: "🚨" },
  };
  const s = styles[variant];

  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:16px 0;">
      <tr>
        <td style="background-color:${s.bg};border-radius:8px;padding:14px 16px;">
          <p style="margin:0;font-size:13px;color:${s.color};line-height:1.5;">
            <span style="margin-right:6px;">${s.icon}</span>${text}
          </p>
        </td>
      </tr>
    </table>
  `;
}

export function keyValueRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;font-size:13px;color:${COLORS.textMuted};width:140px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;font-size:14px;color:${COLORS.textPrimary};font-weight:500;">${value}</td>
    </tr>
  `;
}
