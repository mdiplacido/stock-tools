import { writeResult } from "./cache/util";
import { DataKind } from "./data-kind";

export async function getMonthly(alpha: any, tickers: ReadonlyArray<string>): Promise<ReadonlyArray<any>> {
    const requests = tickers.map(ticker => alpha.data.monthly(ticker) as Promise<any>);
    const result = await Promise.all(requests);
    const key = tickers.map(ticker => ticker).sort().join("_");
    return writeResult(DataKind.dataMonthly, key, result);
}