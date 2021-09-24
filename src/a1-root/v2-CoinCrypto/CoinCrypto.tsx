import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType, HistoryCoinType} from "../API/cryptoAPI";
import {NavLink} from "react-bootstrap";
import {getChangedForCoin, getCoin} from "../Redusers/CoinCryptoReduser";
import {Chart} from "../v4-Chart/Chart";
import {useLocation} from "react-router";
import {getMainCoin} from "../Redusers/MainCryptoReduser";


interface LocationState {
    id: string
}

function CoinCrypto() {
    const dispatch = useDispatch()
    const location = useLocation<LocationState>()
    const idLocation: string = location.state.id
    console.log(idLocation)
    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)

    useEffect(()=>{
        dispatch(getChangedForCoin(idLocation))
        }, [idLocation]
    )

    if (idLocation === '') {
        return (
            <div>
                <h5>There is not some coin</h5>
                <NavLink href={"/Crypto_list"}>Chose coin</NavLink>
            </div>
        )
    }
        return (
            <div>
                <div>{idLocation}</div>
                {oneCoins && <div>
                    <div>{oneCoins.name}</div>
                    <div>{oneCoins.explorer}</div>
                    <div>{oneCoins.priceUsd}</div>
                </div>

                }

                <Chart/>
            </div>
        )



}

export default CoinCrypto;
