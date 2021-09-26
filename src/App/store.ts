import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {CryptoActionType, MainCryptoReduser} from "../Redusers/MainCryptoReduser";
import {CoinActionType, CoinCryptoReduser} from "../Redusers/CoinCryptoReduser";
import {WalletActionType, WalletCryptoReduser} from "../Redusers/WalletCryptoReduser";
import {loadState, saveState} from "./localstorage-utils";
import {PaginationActionType, paginationReducer} from "../Redusers/paginationReduser";


const rootReducer = combineReducers({
    allCrypto: MainCryptoReduser,
    coinCrypto: CoinCryptoReduser,
    wallet: WalletCryptoReduser,
    pagination: paginationReducer
})
export const store = createStore(rootReducer,loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        wallet: store.getState().wallet
    })
})

export type CommonActionTypeForApp =
    | CryptoActionType
    | PaginationActionType
    | CoinActionType
    | WalletActionType

export type AppRootStateType = ReturnType<typeof rootReducer>
export type InferActionType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;



