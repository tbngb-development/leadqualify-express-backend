export function paymentSuccessEmailHtml(p: {
  tenantName: string;
  amountPaisa: number;
  kind: string;
}): string {
  return `<div style="font-family:sans-serif">
  <h2>Payment successful</h2>
  <p>${p.tenantName}</p>
  <p>${p.kind}: ₹${(p.amountPaisa / 100).toFixed(2)}</p>
</div>`;
}
