import axios from "axios";


export const instance = axios.create({
    baseURL: "api.coincap.io/v2/",
    withCredentials: true,
});

// api
export const cryptoAPI = {
    fetchAll(num: string) {
        return instance.get<Array<CoinType>>(`assets/?limit=${num}`, {});
    },
    fetchCoin(id: string) {
        return instance.get<fetchCoinType>(`assets/${id}`, {});
    },
    fetchMainCoins(mainCoins: Array<string>) {
        return instance.get<fetchCoinType>(`assets/?ids=${mainCoins.join()}`, {});
    },
    fetchHistoryCoins(idCoin: string, interval: string) {
        return instance.get<fetchCoinType>(`assets/${idCoin}/history?interval=${interval}`, {});
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



export type fetchCoinType = {
data: CoinType,
    timestamp: 1533581098863
};
