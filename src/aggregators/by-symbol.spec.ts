import test from 'ava';

import { Trade } from './../model/trade';
import { bySymbol } from './by-symbol';

// tslint:disable:no-expression-statement
// tslint:disable:object-literal-sort-keys

test('bySymbol can aggregate empty', async t => {
  t.deepEqual(bySymbol([]), new Map());
});

test('bySymbol can aggregate with data', async t => {
  const trade1: Trade = {
    symbol: 'MSFT',
    currentPrice: 106.16,
    date: '2018/11/02',
    time: '16: 00 EDT',
    change: 0.2400055,
    open: 106.48,
    high: 107.3187,
    low: 104.98,
    volume: 32335393,
    tradeDate: '20170929',
    purchasePrice: 67.04,
    quantity: 93.691
  };

  const trade2 = {
    ...trade1,
    purchasePrice: 25
  };

  t.deepEqual(bySymbol([trade1, trade2]), new Map());
});
