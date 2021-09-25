import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType, cryptoAPI} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";


const initialState = {
    allCoin: [],
    mainCoins: [],
    threeMainCoins: ['bitcoin', 'ethereum', 'monero']
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
    setThreeMainCoins: (data: Array<string>) => ({type: "MAIN/THREE-MAIN-COIN", data} as const),
};


// thunks
export const getMainCoin = (
    arrCoin: Array<string>
) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchMainCoins(arrCoin);
        // let res = await cryptoAPI.fetchMainCoins(firstCoin, secondCoin, thirdCoin);
        dispatch(actionsMainCrypto.getMainsCoin(res.data.data))
    } catch (e: any) {
        console.log(e)
    }
};
// export const getAllCoin = (porcion: string, arrCoin: Array<string>) => async (dispatch: Dispatch<any>) => {
//     try {
//         let res = await cryptoAPI.fetchAll(porcion);
//         dispatch(actionsMainCrypto.getAllCrypto(res.data.data))
//         dispatch(getMainCoin(arrCoin))
//     } catch (e: any) {
//         console.log(e)
//     }
// };
export const getAllCoin = (porcion: number, currentPage: number) => async (dispatch: Dispatch<any>) => {
    try {
        let res = await cryptoAPI.fetchAll(porcion, currentPage);
        dispatch(actionsMainCrypto.getAllCrypto(res.data.data))

    } catch (e: any) {
        console.log(e)
    }
};


// types
export type InitialStateType = {
    allCoin: Array<CoinType>
    mainCoins: Array<CoinType>
    threeMainCoins: Array<string>
};
export type CryptoActionType = InferActionType<typeof actionsMainCrypto>





