import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType, cryptoAPI, HistoryCoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";
import {actionsMainCrypto} from "./MainCryptoReduser";


const initialState = {
    coin: null,
    history: null
};

export const CoinCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {
            case "COIN/ONE":
                return {...state, coin: action.data};
            case "COIN/HISTORY-COIN":
                return {...state, history: action.history};

            default:
                return state;
        }
    };


// actions
export const actionsCoinCrypto = {
    getOneCoin: (data: CoinType) => ({type: "COIN/ONE", data} as const),
    getHistoryCoin: (history: Array<HistoryCoinType>) => ({type: "COIN/HISTORY-COIN", history} as const),
};


// thunks
export const getCoin = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchCoin(id);
        console.log(res.data.data)
        dispatch(actionsCoinCrypto.getOneCoin(res.data.data))
    } catch (e: any) {
        console.log(e)
    }
};
export const getChangedForCoin = (id: string, int?: string) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchHistoryCoins(id, int);

        dispatch(actionsCoinCrypto.getHistoryCoin(res.data.data))
    } catch (e: any) {
        console.log(e)
    }
};


// types
export type InitialStateType = {
    coin: CoinType | null,
    history: Array<HistoryCoinType> | null,

};
export type CryptoActionType = InferActionType<typeof actionsCoinCrypto>





