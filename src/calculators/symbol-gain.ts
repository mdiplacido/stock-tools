// tslint:disable:object-literal-sort-keys

import { Trade } from '../model/trade';

export interface GainResult {
  readonly symbol: string;
  readonly totalCost: number;
  readonly currentPrice: number;
  readonly saleInfo: {
    readonly totalAcquired: number;
    readonly totalSold: number;
    readonly remaining: number;
    readonly realizedGain: number;
    readonly unrealizedGain: number;
  };
}

export function calcGain(
  symbol: string,
  trades: ReadonlyArray<Trade>
): GainResult {
  const [first] = trades;

  const totalAcquired = trades
    .filter(t => t.quantity > 0)
    .reduce((acc, trade) => acc + trade.quantity, 0);

  const totalSold = trades
    .filter(t => t.quantity < 0)
    .reduce((acc, trade) => acc + Math.abs(trade.quantity), 0);

  const remaining = totalAcquired - totalSold;

  return {
    currentPrice: first.currentPrice,
    saleInfo: {
      remaining,
      totalAcquired,
      totalSold,
      realizedGain: 0, // todo: calc this
      unrealizedGain: 0 // todo: calc this
    },
    symbol,
    totalCost: 0 // todo: calc this.
  };
}
