import init from "alphavantage";

import { getMonthly } from "./alpha.service";
import { loadTrades } from "./trades/trade-loader";

// TODO: load key from environment.json
const alpha = init(({ key: 'PUT KEY HERE' }));

const run = async () => {
    // TODO: more logic in here...
    const trades = await loadTrades("data/quotes.csv");

    console.log("Your Trade info");
    console.log("=====================================");        
    console.log(JSON.stringify(trades));

    // TODO: monthly data should come from the users trades
    const monthlyData = await getMonthly(alpha, ["msft", "aapl"]);

    console.log("Monthly Data");
    console.log("=====================================");    

    console.log(JSON.stringify(monthlyData));
};

// tslint:disable-next-line:no-expression-statement
run()
    .then(() => console.log("done!"))
    .catch(e => console.error(e));
