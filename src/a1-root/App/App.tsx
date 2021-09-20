import React from 'react';
import {Switch, Route} from "react-router-dom";
import AllCrypto from "../v1-AllCrypto/AllCrypto";
import CoinCrypto from "../v2-CoinCrypto/CoinCrypto";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "../NaviBar/NaviBar";


function App() {
    return (
        <>
            <NaviBar/>
            <Switch>
                <Route exact path={"/"} render={() => <AllCrypto/>}/>
                <Route exact path={"/Crypto_list"} render={() => <AllCrypto/>}/>
                <Route exact path={"/Crypto_coin"} render={() => <CoinCrypto/>}/>
                <Route path={"*"} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            </Switch>
        </>
    )
}

export default App

