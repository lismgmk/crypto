import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";


const initialState = {
    coin: null
};

export const CoinCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {

                case "ROOT/COIN":
                return {...state, coin: action.data};
            default:
                return state;
        }
    };


// actions
export const actionsCoinCrypto = {
    getOneCoin: (data: CoinType) => ({type: "ROOT/COIN", data} as const),
};


// thunks
export const cryptoAll = () => async (dispatch: Dispatch<any>) => {
};


// types
export type InitialStateType = {
    coin: CoinType | null,

};
export type CryptoActionType = InferActionType<typeof actionsCoinCrypto>





