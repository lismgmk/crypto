import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType, HistoryCoinType} from "../API/cryptoAPI";
import {NavLink} from "react-bootstrap";
import {getChangedForCoin, getCoin} from "../Redusers/CoinCryptoReduser";
import {Chart} from "../v4-Chart/Chart";


function CoinCrypto() {
    const dispatch = useDispatch()

    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)
    const [load, setLoad] = useState<string>('loading')

    useEffect(() => {
        if (oneCoins) {
            dispatch(getChangedForCoin(oneCoins.id))
        }
        setLoad('')
    }, [])


    if (load === 'loading') {
        return <h5>...loading</h5>
    }
    if (oneCoins === null) {
        return <div>
            <h5>There is not some coin</h5>
            <NavLink href={"/Crypto_list"}>Chose coin</NavLink>
        </div>
    }
    return (
        <div>
            <div>{oneCoins.id}</div>
            <div>{oneCoins.symbol}</div>
            <div>{oneCoins.name}</div>
            <div>{oneCoins.rank}</div>
            <Chart/>
        </div>
    )
}

export default CoinCrypto;
