import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {allCryptoReduser} from "../Redusers/allCryptoReduser";


const rootReducer = combineReducers({
    allCrypto: allCryptoReduser
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
