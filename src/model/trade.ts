// Symbol,Current Price,Date,Time,Change,Open,High,Low,Volume,Trade Date,Purchase Price,Quantity,Commission,High Limit,Low Limit,Comment
// ROKU,52.05,2018/10/25,16:00 EDT,1.3099976,51.19,53.42,51.1,5346929,20181010,59.04,17.0,,,,

export interface Trade {
    readonly symbol: string;   // important
    readonly currentPrice: number;
    readonly date: string;
    readonly time: string;
    readonly change: number;
    readonly open: number;
    readonly high: number;
    readonly low: number;
    readonly volume: number;
    readonly tradeDate: string;   // important: see format above: eg. 20181010
    readonly purchasePrice: number; // important
    readonly quantity: number; // important
}
