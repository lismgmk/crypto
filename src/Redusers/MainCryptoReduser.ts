import {CoinType, cryptoAPI} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {CommonActionTypeForApp, InferActionType} from "../App/store";


const initialState = {
    allCoin: [],
    mainCoins: [],
    threeMainCoins: ['bitcoin', 'ethereum', 'monero'],
    error: null,
    errorMainCoins: null,
    loader: null
};

export const MainCryptoReduser =
    (state: InitialStateType = initialState, action: CommonActionTypeForApp): InitialStateType => {
        switch (action.type) {
            case "MAIN/ALL-CRYPTO":
                return {...state, allCoin: action.data};
            case "MAIN/MAIN-COIN":
                return {...state, mainCoins: action.data};
            case "MAIN/ERROR":
                return {...state, error: action.error};
            case "MAIN/ERROR-MAIN-COINS":
                return {...state, errorMainCoins: action.error};
            case "MAIN/LOADER":
                return {...state, loader: action.loader};
            default:
                return state;
        }
    };


// actions
export const actionsMainCrypto = {
    getAllCrypto: (data: Array<CoinType>) => ({type: "MAIN/ALL-CRYPTO", data} as const),
    getMainsCoin: (data: Array<CoinType>) => ({type: "MAIN/MAIN-COIN", data} as const),
    setError: (error: string | null) => ({type: "MAIN/ERROR", error} as const),
    setErrorMainCoins: (error: string | null) => ({type: "MAIN/ERROR-MAIN-COINS", error} as const),
    setLoader: (loader: boolean|null) => ({type: "MAIN/LOADER", loader} as const)
}

// thunks
export const getMainCoin = (
    arrCoin: Array<string>
) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(actionsMainCrypto.setLoader(true))
        let res = await cryptoAPI.fetchMainCoins(arrCoin);
        dispatch(actionsMainCrypto.getMainsCoin(res.data.data))
        dispatch(actionsMainCrypto.setErrorMainCoins(null))
    } catch (e: any) {
        dispatch(actionsMainCrypto.setErrorMainCoins(e.message))
    } finally {
        dispatch(actionsMainCrypto.setLoader(false))
    }
};

export const getAllCoin = (porcion: number, currentPage: number) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(actionsMainCrypto.setLoader(true))
        let res = await cryptoAPI.fetchAll(porcion, currentPage);
        dispatch(actionsMainCrypto.getAllCrypto(res.data.data))
        dispatch(actionsMainCrypto.setError(null))
    } catch (e: any) {
        console.dir(e)
        dispatch(actionsMainCrypto.setError(e.message))
    } finally {
        dispatch(actionsMainCrypto.setLoader(false))
    }
};


// types
export type InitialStateType = {
    allCoin: Array<CoinType>
    mainCoins: Array<CoinType>
    threeMainCoins: Array<string>
    error: string | null
    errorMainCoins: string | null
    loader: boolean|null
}
export type CryptoActionType = InferActionType<typeof actionsMainCrypto>





