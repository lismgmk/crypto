import {CoinType, cryptoAPI, HistoryCoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";
import {actionsMainCrypto} from "./MainCryptoReduser";


const initialState = {
    coin: null,
    history: null,
    error: null,
    // errorCoin: null,
};

export const CoinCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {
            case "COIN/ONE":
                return {...state, coin: action.data};
            case "COIN/HISTORY-COIN":
                return {...state, history: action.history};
            case "COIN/ERROR":
                return {...state, error: action.error};
            // case "COIN/ERROR-COIN":
            //     return {...state, errorCoin: action.error};

            default:
                return state;
        }
    };


// actions
export const actionsCoinCrypto = {
    getOneCoin: (data: CoinType) => ({type: "COIN/ONE", data} as const),
    getHistoryCoin: (history: Array<HistoryCoinType>) => ({type: "COIN/HISTORY-COIN", history} as const),
    setError: (error: string | null) => ({type: "COIN/ERROR", error} as const),
    setErrorCoin: (error: string | null) => ({type: "COIN/ERROR-COIN", error} as const),

};


// thunks

export const getChangedForCoin = (id: string, int?: string) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchHistoryCoins(id, int);
        dispatch(actionsCoinCrypto.getHistoryCoin(res.data.data))
        // dispatch(actionsCoinCrypto.setError(null))
        let res2 = await cryptoAPI.fetchCoin(id)
        dispatch(actionsCoinCrypto.getOneCoin(res2.data.data))
        dispatch(actionsCoinCrypto.setError(null))
    } catch (e: any) {
        console.log(e)
        dispatch(actionsCoinCrypto.setError(e.message))
    }
};


// types
export type InitialStateType = {
    coin: CoinType | null,
    history: Array<HistoryCoinType> | null,
    error: string | null
    // errorCoin: string | null
};
export type CryptoActionType = InferActionType<typeof actionsCoinCrypto>





