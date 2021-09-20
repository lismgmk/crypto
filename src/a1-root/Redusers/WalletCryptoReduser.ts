import {Dispatch} from "react";
import {InferActionType} from "../App/store";
import {nanoid} from "nanoid";


const initialState = {
    coinInWallet: [],
    startCoastUSD: 0,
    currentCoastUSD: 0,
    difference: 0,
    differencePercent: 0

};

export const WalletCryptoReduser =
    (state: InitialStateType = initialState, action: CryptoActionType): InitialStateType => {
        switch (action.type) {
            case "WALLET/ADD-COIN":
                return {
                    ...state,
                    coinInWallet: [
                        ...state.coinInWallet,
                        {
                            id: nanoid(),
                            sum: 0,
                            name: action.name,
                            symbol: action.symbol
                        }
                    ]
                };
            case "WALLET/EDIT-SUM":
                return {
                    ...state,
                    coinInWallet: state.coinInWallet.map(i => i.id === action.id ? {...i, sum: action.sum} : i)
                };
            case "WALLET/DELETE-COIN":
                return {
                    ...state,
                    coinInWallet: state.coinInWallet.filter(i => i.id === action.id)
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
export const actionsCoinCrypto = {
    addCoin: (name: string, symbol: string) => ({type: "WALLET/ADD-COIN", name, symbol} as const),
    editSum: (sum: number, id: string) => ({type: "WALLET/EDIT-SUM", sum, id} as const),
    deleteCoin: (id: string) => ({type: "WALLET/DELETE-COIN", id} as const),
    getStartCoastUSD: (num: number) => ({type: "WALLET/ADD-START-COAST", num} as const),
    getCurrentCoastUSD: (num: number) => ({type: "WALLET/ADD-CURRENT-COAST", num} as const),
    getDifference: (num: number) => ({type: "WALLET/ADD-DIFFERENCE", num} as const),
    getDifferencePercent: (num: number) => ({type: "WALLET/ADD-DIFFERENCE-PERCENT", num} as const),
};

// thunks
export const cryptoCoin = () => async (dispatch: Dispatch<any>) => {
};


// types
export type InitialStateType = {
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
}
export type CryptoActionType = InferActionType<typeof actionsCoinCrypto>





