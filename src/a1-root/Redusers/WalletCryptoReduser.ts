import {AppRootStateType, InferActionType} from "../App/store";
import {nanoid} from "nanoid";
import {Dispatch} from "react";
import {actionsCoinCrypto} from "./CoinCryptoReduser";


const initialState = {
    coinInWallet: [],
    startCoastUSD: 0,
    currentCoastUSD: 0,
    difference: 0,
    differencePercent: 0,
};

export const WalletCryptoReduser =
    (state: InitialStateWalletType = initialState, action: CryptoActionType): InitialStateWalletType => {
        switch (action.type) {
            case "WALLET/ADD-COIN":
                let init = state.coinInWallet
                if (init.length === 0) {
                    return {
                        ...state,
                        coinInWallet: [
                            ...state.coinInWallet,
                            {
                                id: nanoid(),
                                sum: 0,
                                name: action.name,
                                symbol: action.symbol,
                                priceUsd: action.priceUsd
                            }
                        ]
                    }
                } else {
                    if (init.filter(i => i.name == action.name).length === 0) {
                        return {
                            ...state,
                            coinInWallet: [
                                ...state.coinInWallet,
                                {
                                    id: nanoid(),
                                    sum: 0,
                                    name: action.name,
                                    symbol: action.symbol,
                                    priceUsd: action.priceUsd
                                }
                            ]
                        }
                    } else {
                        return state
                    }
                }
            case "WALLET/EDIT-SUM":
                return {
                    ...state,
                    coinInWallet: state.coinInWallet.map(i => i.id === action.id ? {...i, sum: action.sum} : i)
                };
            case "WALLET/DELETE-COIN":
                return {
                    ...state,
                    coinInWallet: state.coinInWallet.filter(i => i.id !== action.id)
                };
            case "WALLET/ADD-START-COAST":
                return {
                    ...state,
                    startCoastUSD: action.num
                };
            case "WALLET/ADD-CURRENT-COAST":
                return {
                    ...state,
                    currentCoastUSD: action.num
                };
            case "WALLET/ADD-DIFFERENCE":
                return {
                    ...state,
                    difference: action.num
                };
            case "WALLET/ADD-DIFFERENCE-PERCENT":
                return {
                    ...state,
                    differencePercent: action.num
                };

            default:
                return state;
        }
    };


// actions
export const actionsWaletCrypto = {
    addCoin: (name: string, symbol: string, priceUsd: string) => ({type: "WALLET/ADD-COIN", name, symbol, priceUsd} as const),
    editSum: (sum: number, id: string) => ({type: "WALLET/EDIT-SUM", sum, id} as const),
    deleteCoin: (id: string) => ({type: "WALLET/DELETE-COIN", id} as const),
    getStartCoastUSD: (num: number) => ({type: "WALLET/ADD-START-COAST", num} as const),
    getCurrentCoastUSD: (num: number) => ({type: "WALLET/ADD-CURRENT-COAST", num} as const),
    getDifference: (num: number) => ({type: "WALLET/ADD-DIFFERENCE", num} as const),
    getDifferencePercent: (num: number) => ({type: "WALLET/ADD-DIFFERENCE-PERCENT", num} as const),
    setError: (error: string) => ({type: "WALLET/SET-ERROR", error} as const),
}

// thunks
// export const editCoin = (name: string, symbol: string) => (dispatch: Dispatch<any>, getState: any) => {
//     let coin = getState().allCrypto.allCoin.filter((i: { id: string; })=>i.id === id )
//     dispatch(actionsCoinCrypto.getOneCoin(coin[0]))
//     // let allCoins = getState.allCrypto.allCoin
// // let
// //     console.log(allCoins)
// //     if(g.length === 0){
// //         dispatch(actionsWaletCrypto.addNewCoin(name, symbol))
// //     } else {
// //         if( g.filter(i => i.name === name).length === 0){
// //             dispatch(actionsWaletCrypto.addNewCoin(name, symbol))
// //         }
// //     }
//
//
// }


// types
export type InitialStateWalletType = {
    coinInWallet: Array<CoinInWalletType>
    startCoastUSD: number
    currentCoastUSD: number
    difference: number
    differencePercent: number
};

export type CoinInWalletType = {
    id: string
    sum: number
    name: string
    symbol: string
    priceUsd: string
}
export type CryptoActionType = InferActionType<typeof actionsWaletCrypto>





