import {
  emailLayout,
  sectionPadding,
  heading,
  divider,
  infoBox,
  keyValueRow,
  COLORS,
} from "./email-layout";

export interface LowBalanceTemplateInput {
  tenantName: string;
  balancePaisa: number;
  thresholdPaisa: number;
}

export function lowBalanceEmailHtml(p: LowBalanceTemplateInput): string {
  const balance = (p.balancePaisa / 100).toFixed(2);
  const threshold = (p.thresholdPaisa / 100).toFixed(2);
  const percentage =
    p.thresholdPaisa > 0
      ? Math.round((p.balancePaisa / p.thresholdPaisa) * 100)
      : 0;

  const barColor = percentage <= 25 ? COLORS.danger : COLORS.warning;
  const barWidth = Math.min(Math.max(percentage, 4), 100);

  const content = sectionPadding(`
    ${heading(
      "Low wallet balance",
      `Your wallet balance for ${p.tenantName} has dropped below the alert threshold.`,
    )}

    <!-- Balance Card -->
    <div style="margin:28px 0;background-color:${COLORS.dangerLight};border-radius:12px;padding:28px;text-align:center;">
      <p style="margin:0 0 6px 0;font-size:13px;color:${COLORS.danger};text-transform:uppercase;letter-spacing:1px;font-weight:600;">
        Current Balance
      </p>
      <p style="margin:0;font-size:36px;font-weight:800;color:${COLORS.danger};line-height:1.2;">
        ₹${balance}
      </p>
    </div>

    <!-- Progress Bar -->
    <div style="margin:0 0 28px 0;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="font-size:14px;color:${COLORS.textMuted};padding-bottom:8px;">
            Balance vs Threshold
          </td>
        </tr>
        <tr>
          <td style="background-color:${COLORS.border};border-radius:6px;height:10px;overflow:hidden;">
            <div style="background-color:${barColor};width:${barWidth}%;height:10px;border-radius:6px;"></div>
          </td>
        </tr>
        <tr>
          <td style="font-size:13px;color:${COLORS.textMuted};padding-top:6px;text-align:right;">
            Threshold: ₹${threshold}
          </td>
        </tr>
      </table>
    </div>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
           style="background-color:${COLORS.surface};border-radius:8px;padding:4px 0;">
      ${keyValueRow("Organization", p.tenantName)}
      ${keyValueRow("Current Balance", `<span style="color:${COLORS.danger};font-weight:700;">₹${balance}</span>`)}
      ${keyValueRow("Alert Threshold", `₹${threshold}`)}
    </table>

    ${divider()}

    ${infoBox(
      "<strong>Running batches may be automatically stopped</strong> if your balance reaches zero. Please recharge your wallet to avoid service interruption.",
      "danger",
    )}
  `);

  return emailLayout({
    previewText: `Kooi wallet balance is ₹${balance} — below ₹${threshold} threshold`,
    content,
  });
}
