import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {MainCryptoReduser} from "../Redusers/MainCryptoReduser";
import {CoinCryptoReduser} from "../Redusers/CoinCryptoReduser";


const rootReducer = combineReducers({
    allCrypto: MainCryptoReduser,
    coinCrypto: CoinCryptoReduser,
    // wallet: WalletReduser
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type InferActionType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
