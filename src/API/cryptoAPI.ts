import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.coincap.io/v2/assets/",
});

// api
export const cryptoAPI = {
    fetchAll(num: number, currentPage: number) {
        return instance.get<{data: Array<CoinType>}>(`?limit=${num}&offset=${currentPage}`, {});
    },
    fetchCoin(id: string) {
        return instance.get<{data: CoinType}>(`${id}`, {});
    },
    fetchMainCoins(arrCoin: Array<string>) {
        let stringFetch = ''
        arrCoin.forEach((i, index)=>{
            if(index == 0){
                stringFetch = `?ids=${i}`
            } else{
                stringFetch += `,${i}`
            }
        })
        return instance.get<{data: Array<CoinType>}>(stringFetch, {});
    },
    fetchHistoryCoins(idCoin: string, interval: string='d1') {
        return instance.get<{data: Array<HistoryCoinType>}>(`${idCoin}/history?interval=${interval}`, {});
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
    explorer: string
};

export type HistoryCoinType = {
    priceUsd: string,
    time: number,
    date: string
}

