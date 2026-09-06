import {
  emailLayout,
  sectionPadding,
  heading,
  bodyText,
  divider,
  infoBox,
  keyValueRow,
  COLORS,
  escapeHtml,
} from "./email-layout";

export interface PaymentSuccessTemplateInput {
  tenantName: string;
  amountPaisa: number;
  kind: string;
  orderId?: string;
  paymentId?: string;
  date?: string;
}

export function paymentSuccessEmailHtml(
  p: PaymentSuccessTemplateInput,
): string {
  const amount = (p.amountPaisa / 100).toFixed(2);
  const date =
    p.date ??
    new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const content = sectionPadding(`
    <!-- Success Icon -->
    <div style="text-align:center;margin:0 0 12px 0;">
      <div style="display:inline-block;width:60px;height:60px;background-color:${COLORS.successLight};border:2px solid ${COLORS.success};border-radius:50%;line-height:56px;text-align:center;">
        <span style="font-size:28px;color:${COLORS.success};">✓</span>
      </div>
    </div>

    <div style="text-align:center;">
      ${heading(
        "Payment Successful",
        "Your payment has been processed and your wallet has been updated.",
      )}
    </div>

    <!-- Amount Card -->
    <div style="margin:28px 0;background-color:${COLORS.successLight};border:2px solid ${COLORS.success};border-radius:12px;padding:28px;text-align:center;">
      <p style="margin:0 0 6px 0;font-size:13px;color:${COLORS.success};text-transform:uppercase;letter-spacing:1px;font-weight:600;">
        Amount Paid
      </p>
      <p style="margin:0;font-size:40px;font-weight:800;color:${COLORS.success};line-height:1.2;">
        ₹${amount}
      </p>
    </div>

    <!-- Details Table -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
           style="background-color:${COLORS.surface};border-radius:8px;padding:4px 0;">
      ${keyValueRow("Organization", p.tenantName)}
      ${keyValueRow("Payment Type", `<span style="color:${COLORS.primary};font-weight:600;">${escapeHtml(p.kind)}</span>`)}
      ${keyValueRow("Date", date)}
      ${p.orderId ? keyValueRow("Order ID", `<span style="font-family:monospace;font-size:14px;">${escapeHtml(p.orderId)}</span>`) : ""}
      ${p.paymentId ? keyValueRow("Payment ID", `<span style="font-family:monospace;font-size:14px;">${escapeHtml(p.paymentId)}</span>`) : ""}
    </table>

    ${divider()}

    ${infoBox(
      "Your wallet balance has been updated. You can view your transaction history in the Kooi dashboard.",
      "success",
    )}

    ${bodyText("If you did not authorize this payment, please contact our support team immediately.")}
  `);

  return emailLayout({
    previewText: `Kooi payment of ₹${amount} was successful`,
    content,
  });
}