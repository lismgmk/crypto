import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType, cryptoAPI} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";


const initialState = {
    allCoin: [],
    mainCoins: []
};

export const MainCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {
            case "MAIN/ALL-CRYPTO":
                return {...state, allCoin: action.data};
            case "MAIN/MAIN-COIN":
                return {...state, mainCoins: action.data};
            default:
                return state;
        }
    };


// actions
export const actionsMainCrypto = {
    getAllCrypto: (data: Array<CoinType>) => ({type: "MAIN/ALL-CRYPTO", data} as const),
    getMainsCoin: (data: Array<CoinType>) => ({type: "MAIN/MAIN-COIN", data} as const),
};


// thunks
export const getMainCoin = (firstCoin: string, secondCoin: string, thirdCoin: string) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchMainCoins(firstCoin, secondCoin, thirdCoin);
        console.log(res.data.data)
        dispatch(actionsMainCrypto.getMainsCoin(res.data.data))
    } catch (e: any) {
        console.log(e)
    }
};
export const getAllCoin = (porcion: string) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchAll(porcion);
        dispatch(actionsMainCrypto.getAllCrypto(res.data.data))
    } catch (e: any) {
        console.log(e)
    }
};


// types
export type InitialStateType = {
    allCoin: Array<CoinType>
    mainCoins: Array<CoinType>
};
export type CryptoActionType = InferActionType<typeof actionsMainCrypto>





