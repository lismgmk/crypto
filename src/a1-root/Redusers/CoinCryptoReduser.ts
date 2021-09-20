import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType, HistoryCoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";


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
export const cryptoCoin = () => async (dispatch: Dispatch<any>) => {
};


// types
export type InitialStateType = {
    coin: CoinType | null,
    history: Array<HistoryCoinType> | null,

};
export type CryptoActionType = InferActionType<typeof actionsCoinCrypto>





