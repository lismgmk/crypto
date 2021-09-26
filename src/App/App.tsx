import React from 'react';
import {Switch, Route} from "react-router-dom";
import AllCrypto from "../a1-root/v1-AllCrypto/AllCrypto";
import CoinCrypto from "../a1-root/v2-CoinCrypto/CoinCrypto";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "../a1-root/Header/Header";
import Wallet from "../a1-root/v3-Wallet/Wallet";


function App() {

    return (
        <>
            <NaviBar/>
            <Switch>
                <Route exact path={"/"} render={() => <AllCrypto/>}/>
                <Route exact path={"/Crypto_list"} render={() => <AllCrypto/>}/>
                <Route exact path={"/Crypto_coin"} render={() => <CoinCrypto/>}/>
                <Route exact path={"/Crypto_wallet"} render={() => <Wallet/>}/>
                <Route path={"*"} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            </Switch>
        </>
    )
}

export default App

