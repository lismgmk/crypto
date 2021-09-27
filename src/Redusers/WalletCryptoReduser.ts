import {AppRootStateType, CommonActionTypeForApp, InferActionType} from "../App/store";
import {nanoid} from "nanoid";
import {Dispatch} from "react";
import {cryptoAPI} from "../API/cryptoAPI";
import {actionsMainCrypto} from "./MainCryptoReduser";


const initialState = {
    coinInWallet: [],
    startCoastUSD: 0,
    difference: 0,
    differencePercent: 0,
    error: null,
};

export const WalletCryptoReduser =
    (state: InitialStateWalletType = initialState, action: CommonActionTypeForApp): InitialStateWalletType => {
        switch (action.type) {
            case "WALLET/ADD-COIN":
                let init = state.coinInWallet
                console.log(init)
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
                                priceUsd: action.priceUsd,
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
                                    priceUsd: action.priceUsd,
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
            case "WALLET/ERROR":
                return {...state, error: action.error};
            default:
                return state;
        }
    };


// actions
export const actionsWaletCrypto = {
    addCoin: (name: string, symbol: string, priceUsd: string) => ({
        type: "WALLET/ADD-COIN",
        name,
        symbol,
        priceUsd
    } as const),
    editSum: (sum: number, id: string) => ({type: "WALLET/EDIT-SUM", sum, id} as const),
    deleteCoin: (id: string) => ({type: "WALLET/DELETE-COIN", id} as const),
    getStartCoastUSD: (num: number) => ({type: "WALLET/ADD-START-COAST", num} as const),
    getDifference: (num: number) => ({type: "WALLET/ADD-DIFFERENCE", num} as const),
    getDifferencePercent: (num: number) => ({type: "WALLET/ADD-DIFFERENCE-PERCENT", num} as const),
    setError: (error: string | null) => ({type: "WALLET/ERROR", error} as const),
}

// thunks
export const getStartandCurrentCost = () => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    let coins = getState().wallet.coinInWallet
    const reMathWallet = () => {
        let sumWallet = 0
        coins.forEach((i) => {
            sumWallet += +i.priceUsd * +i.sum
        })
        return sumWallet
    }
    dispatch(actionsWaletCrypto.getStartCoastUSD(reMathWallet()))
}


export const getCurrentCost = () => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {

    try {
        let coins = getState().wallet.coinInWallet
        if (coins.length === 0) {
            dispatch(actionsWaletCrypto.getDifference(0))
            dispatch(actionsWaletCrypto.getDifferencePercent(0))

        } else {
            let startCoinCoast = getState().wallet.startCoastUSD
            let coinsNameinWallet: Array<string> = []
            coins.forEach((i) => {
                coinsNameinWallet.push(i.name)
            })
            dispatch(actionsMainCrypto.setLoader(true))
            let res = await cryptoAPI.fetchMainCoins(coinsNameinWallet)
            dispatch(actionsWaletCrypto.setError(null))
            let newCoins = res.data.data
            let sumWallet = 0
            let i = 0
            do {
                sumWallet += +newCoins[i].priceUsd * +coins[i].sum;
                i++
            } while (i < newCoins.length)
            let delta = startCoinCoast - sumWallet
            let deltaPersent = ((startCoinCoast - sumWallet) / startCoinCoast) * 100
            dispatch(actionsWaletCrypto.getDifference(delta))
            dispatch(actionsWaletCrypto.getDifferencePercent(deltaPersent))
        }
    } catch (e: any) {
        dispatch(actionsWaletCrypto.setError(e.message))
    } finally {
        dispatch(actionsMainCrypto.setLoader(false))
    }
}


// types
export type InitialStateWalletType = {
    coinInWallet: Array<CoinInWalletType>
    startCoastUSD: number
    difference: number
    differencePercent: number
    error: string | null
};

export type CoinInWalletType = {
    id: string
    sum: number
    name: string
    symbol: string
    priceUsd: string
}
export type WalletActionType = InferActionType<typeof actionsWaletCrypto>





