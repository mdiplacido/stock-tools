import { tryLoadFromCache, writeResult } from "./cache/util";
import { DataKind } from "./data-kind";

export async function getMonthly(alpha: any, tickers: ReadonlyArray<string>): Promise<ReadonlyArray<any>> {
    const key = makeCacheKeyFromArray(tickers);

    // first check if result already exists
    const cachedResult = await tryLoadFromCache(DataKind.dataMonthly, key);    

    return cachedResult.exists ? 
        Promise.resolve(JSON.parse(cachedResult.data)) : 
        getMonthlyImpl(alpha, tickers);
}

async function getMonthlyImpl(alpha: any, tickers: ReadonlyArray<string>): Promise<ReadonlyArray<any>> {
    const requests = tickers.map(ticker => alpha.data.monthly(ticker) as Promise<any>);
    const result = await Promise.all(requests);
    return writeResult(DataKind.dataMonthly, makeCacheKeyFromArray(tickers), result);    
}

function makeCacheKeyFromArray(data: ReadonlyArray<string>): string {
    return data.map(ticker => ticker).sort().join("_");    
}