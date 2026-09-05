export interface WalletBalances {
  balance: number;
  bonusBalance: number;
  bonusExpiresAt: Date | null;
}

export interface DebitSplit {
  fromBonus: number;
  fromMain: number;
  newBalance: number;
  newBonusBalance: number;
}

export function computeBonusFirstDebit(
  wallet: WalletBalances,
  amount: number,
  now = new Date(),
): DebitSplit {
  if (amount <= 0) {
    return {
      fromBonus: 0,
      fromMain: 0,
      newBalance: wallet.balance,
      newBonusBalance: wallet.bonusBalance,
    };
  }

  const bonusAvailable =
    wallet.bonusExpiresAt && wallet.bonusExpiresAt > now
      ? wallet.bonusBalance
      : 0;

  const fromBonus = Math.min(bonusAvailable, amount);
  const fromMain = amount - fromBonus;

  return {
    fromBonus,
    fromMain,
    newBalance: wallet.balance - amount,
    newBonusBalance: wallet.bonusBalance - fromBonus,
  };
}

export function hasSufficientBalance(balance: number, amount: number): boolean {
  return balance >= amount;
}
