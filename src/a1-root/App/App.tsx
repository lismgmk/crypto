import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import AllCrypto from "../v1-AllCrypto/AllCrypto";
import CoinCrypto from "../v2-CoinCrypto/CoinCrypto";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "../NaviBar/NaviBar";
import {getAllCoin, getMainCoin} from "../Redusers/MainCryptoReduser";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch();

    const arrCoin = ['bitcoin', 'ethereum', 'monero']
    let page = 5
    useEffect(() => {
        dispatch(getAllCoin('5'))
        dispatch(getMainCoin(arrCoin))
        // setLoad('')
    }, [page])
    // useEffect(() => {
    //     dispatch(getAllCoin('5'))
    //
    //     // setLoad('')
    // }, [page])
    //
    // useEffect(() => {
    //     dispatch(getMainCoin(arrCoin))
    // }, [arrCoin])
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

