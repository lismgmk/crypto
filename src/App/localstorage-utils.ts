import {AppRootStateType} from "./store";
import {InitialStateWalletType} from "../Redusers/WalletCryptoReduser";


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('walletState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: { wallet: InitialStateWalletType }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('walletState', serializedState);
    } catch {
        // ignore write errors
    }
};
