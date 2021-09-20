import axios from "axios";


export const instance = axios.create({
    baseURL: "api.coincap.io/v2/assets/",
    withCredentials: true,
});

// api
export const cryptoAPI = {
    fetchAll(num: string) {
        return instance.get<Array<CoinType>>(`?limit=${num}`, {});
    },
    fetchCoin(id: string) {
        return instance.get<CoinType>(`${id}`, {});
    },
    fetchMainCoins(mainCoins: Array<string>) {
        return instance.get<Array<CoinType>>(`?ids=${mainCoins.join()}`, {});
    },
    fetchHistoryCoins(idCoin: string, interval: string) {
        return instance.get<Array<HistoryCoinType>>(`${idCoin}/history?interval=${interval}`, {});
    },

};


// types
export type CoinType = {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr:  string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
};

export type HistoryCoinType = {
    priceUsd: string,
    time: number,
    date: string
}

