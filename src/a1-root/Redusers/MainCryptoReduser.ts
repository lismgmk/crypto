import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CoinType} from "../API/cryptoAPI";
import {Dispatch} from "react";
import {InferActionType} from "../App/store";


const initialState = {
    allCoin: null,
    mainCoin: null
};

export const MainCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {
            case "MAIN/ALL-CRYPTO":
                return {...state, allCoin: action.data};
            case "MAIN/MAIN-COIN":
                return {...state, mainCoin: action.data};
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
export const cryptoAll = () => async (dispatch: Dispatch<any>) => {
    // try {
    //
    //     await authAPI.me();
    //     dispatch(actionsForApp.setAppStatus('succeeded'))
    // } catch (e: any) {
    //     dispatch(actionsForApp.setAppStatus("succeeded"));
    //     const error = e.response.data.error === 'you are not authorized /ᐠ-ꞈ-ᐟ\\'
    //         ? null
    //         : e.response.data.error
    //             ? e.response.data.error
    //             : (e.message + ', more details in the console');
    //     dispatch(actionsForApp.setAppError(error));
    // }
};


// types
export type InitialStateType = {
    allCoin: Array<CoinType> | null,
    mainCoin: Array<CoinType> | null
};
export type CryptoActionType = InferActionType<typeof actionsMainCrypto>





