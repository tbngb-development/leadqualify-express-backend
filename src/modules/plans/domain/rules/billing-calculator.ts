export interface BillableCallInput {
  durationSec: number;
  perMinuteRate: number; // in paisa
  billingMinimumSec: number;
  billingIncrementSec: number;
}

/**
 * Calculates the cost of a call in paisa based on plan pricing.
 * Rules:
 *  - Calls under the minimum are charged the minimum
 *  - Calls over the minimum are rounded up to the next increment
 *  - Cost = billedSec / 60 * perMinuteRate (ceiled to paisa)
 */
export function calculateCallCost(input: BillableCallInput): number {
  const { durationSec, perMinuteRate, billingMinimumSec, billingIncrementSec } =
    input;

  if (durationSec <= 0) return 0;

  let billedSec: number;
  if (durationSec <= billingMinimumSec) {
    billedSec = billingMinimumSec;
  } else {
    const overflow = durationSec - billingMinimumSec;
    const incrementsNeeded = Math.ceil(overflow / billingIncrementSec);
    billedSec = billingMinimumSec + incrementsNeeded * billingIncrementSec;
  }

  const costPaisa = Math.ceil((billedSec / 60) * perMinuteRate);
  return costPaisa;
}
