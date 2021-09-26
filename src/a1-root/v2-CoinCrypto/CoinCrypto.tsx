import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {CoinType} from "../../API/cryptoAPI";
import {actionsCoinCrypto, getChangedForCoin} from "../../Redusers/CoinCryptoReduser";
import {Chart} from "../v4-Chart/Chart";
import {useLocation} from "react-router";
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {Preloader} from "../common/Preloader/Preloader";
import {H2} from "../common/Headings/H2";
import { Link } from 'react-router-dom';
import s from "../v1-AllCrypto/AllCrypto.module.scss";
import {TableCoinList} from "./TableCoinList/TableCoinList";

interface LocationState {
    id: string
}

const CoinCrypto = React.memo( () => {
    const dispatch = useDispatch()
    const location = useLocation<LocationState>()
    const idLocation: string = location.state.id

    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)
    const error = useSelector<AppRootStateType, string|null>(state => state.coinCrypto.error)
    let loader = useSelector<AppRootStateType,boolean|null>(state => state.allCrypto.loader)


    useEffect(()=>{
        let int =  setTimeout(()=>{
            dispatch(actionsCoinCrypto.setError(null))
        }, 3000)
        return () => clearTimeout(int)
    }, [error])

    useEffect(() => {
            // getCoin(idLocation)
            dispatch(getChangedForCoin(idLocation))

        }, [idLocation]
    )
    if( loader){
        return <Preloader/>
    }

    if (idLocation === '') {
        return (
            <div>
                <h5>There is not some coin</h5>
                <Link to={"/Crypto_list"}>Chose coin</Link>
            </div>
        )
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <H2>{idLocation}</H2>
                <TableCoinList/>
                <div className={s.chart}>
                    <Chart/>
                </div>

                {error && <ErrorWindow errorMessage={error}/>}
            </div>
        </div>

    )
})

export default CoinCrypto
