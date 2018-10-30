import * as Papa from "papaparse";
import { Trade } from "../model/trade";
import { FsAsync } from "./../fs-async";

export async function loadTrades(filePath: string): Promise<ReadonlyArray<Trade>> {
    const csv: Buffer = await FsAsync.readFileAsync(filePath);
    const result = Papa.parse(csv.toString(), { dynamicTyping: true, header: true });
    return result.data as ReadonlyArray<Trade>;
}
