import { Trade } from './../model/trade';

export function bySymbol(
  trades: ReadonlyArray<Trade>
): Map<string, ReadonlyArray<Trade>> {
  return trades.reduce((acc, trade) => {
    return acc.has(trade.symbol)
      ? acc.set(trade.symbol, [trade, ...acc.get(trade.symbol)])
      : acc.set(trade.symbol, [trade]);
  }, new Map<string, ReadonlyArray<Trade>>());
}
