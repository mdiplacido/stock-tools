import init from "alphavantage";

import { getMonthly } from "./alpha.service";

// TODO: load key from environment.json
const alpha = init(({ key: 'PUT KEY HERE' }));

const run = async () => {
    // TODO: more logic in here...
    return getMonthly(alpha, ["msft", "aapl"]);
};

// tslint:disable-next-line:no-expression-statement
run()
    .then(() => console.log("done!"))
    .catch(e => console.error(e));
