import {CoinType, cryptoAPI, HistoryCoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {CommonActionTypeForApp, InferActionType} from "../App/store";
import {actionsMainCrypto} from "./MainCryptoReduser";


const initialState = {
    oneMainCoin: '',
    coin: null,
    history: null,
    error: null,
};

export const CoinCryptoReduser =
    (state: InitialStateType = initialState, action: CommonActionTypeForApp): InitialStateType => {
        switch (action.type) {
            case "COIN/ONE-MAIN-COIN":
                return {...state, oneMainCoin: action.data};
            case "COIN/ONE":
                return {...state, coin: action.data};
            case "COIN/HISTORY-COIN":
                return {...state, history: action.history};
            case "COIN/ERROR":
                return {...state, error: action.error};
            default:
                return state;
        }
    };


// actions
export const actionsCoinCrypto = {
    getOneMainCoin: (data: string) => ({type: "COIN/ONE-MAIN-COIN", data} as const),
    getOneCoin: (data: CoinType) => ({type: "COIN/ONE", data} as const),
    getHistoryCoin: (history: Array<HistoryCoinType>) => ({type: "COIN/HISTORY-COIN", history} as const),
    setError: (error: string | null) => ({type: "COIN/ERROR", error} as const),
    setErrorCoin: (error: string | null) => ({type: "COIN/ERROR-COIN", error} as const),

};


// thunks

export const getChangedForCoin = (id: string, int?: string) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(actionsMainCrypto.setLoader(true))
        let res = await cryptoAPI.fetchHistoryCoins(id, int);
        dispatch(actionsCoinCrypto.getHistoryCoin(res.data.data))
        let res2 = await cryptoAPI.fetchCoin(id)
        dispatch(actionsCoinCrypto.getOneCoin(res2.data.data))
        dispatch(actionsCoinCrypto.setError(null))
    } catch (e: any) {
        dispatch(actionsCoinCrypto.setError(e.message))
    } finally {
        dispatch(actionsMainCrypto.setLoader(false))
    }
};


// types
export type InitialStateType = {
    coin: CoinType | null,
    history: Array<HistoryCoinType> | null,
    error: string | null
    oneMainCoin: string
};
export type CoinActionType = InferActionType<typeof actionsCoinCrypto>





