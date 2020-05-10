import { loadTrades } from './trades/trade-loader';

import { argv } from 'yargs';
import { bySymbol } from './aggregators/by-symbol';
import { calcGain } from './calculators/symbol-gain';

const pathToHoldings: string = (argv.holdings ||
  (() => {
    throw new Error('cannot find parameter --holdings=path/to/csv');
  })()) as string;

const run = async () => {
  console.log(`loading ${pathToHoldings}`);
  const rawTrades = await loadTrades(pathToHoldings);
  const aggregatedTrades = bySymbol(rawTrades);
  const gain = Array.from(aggregatedTrades.entries()).map(([symbol, trades]) =>
    calcGain(symbol, trades)
  );
  console.log('Your Trade info');
  console.log('=====================================');
  const output = JSON.stringify(gain);
  console.log(output);
};

// tslint:disable-next-line:no-expression-statement
run()
  .then(() => console.log('done!'))
  .catch(e => console.error(e));
