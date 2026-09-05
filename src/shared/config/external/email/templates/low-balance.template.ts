export function lowBalanceEmailHtml(p: {
  tenantName: string;
  balancePaisa: number;
  thresholdPaisa: number;
}): string {
  const bal = (p.balancePaisa / 100).toFixed(2);
  const thr = (p.thresholdPaisa / 100).toFixed(2);
  return `<div style="font-family:sans-serif">
  <h2>Low wallet balance</h2>
  <p>${p.tenantName}: ₹${bal} (threshold ₹${thr}).</p>
  <p>Running batches may be stopped. Please recharge.</p>
</div>`;
}
