import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {actionsCoinCrypto, getChangedForCoin} from "../../Redusers/CoinCryptoReduser";
import {Chart} from "../v4-Chart/Chart";
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {Preloader} from "../common/Preloader/Preloader";
import {H2} from "../common/Headings/H2";
import {Redirect} from 'react-router-dom';
import s from "../v1-AllCrypto/AllCrypto.module.scss";
import {TableCoinList} from "./TableCoinList/TableCoinList";


const CoinCrypto = React.memo(() => {
    const dispatch = useDispatch()

    const idLocation = useSelector<AppRootStateType, string>(state => state.coinCrypto.oneMainCoin)

    const error = useSelector<AppRootStateType, string | null>(state => state.coinCrypto.error)
    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)


    useEffect(() => {
        let int = setTimeout(() => {
            dispatch(actionsCoinCrypto.setError(null))
        }, 3000)
        return () => clearTimeout(int)
    }, [error])

    useEffect(() => {
            dispatch(getChangedForCoin(idLocation))
        }, [idLocation]
    )
    if (loader) {
        return <Preloader/>
    }

    if (idLocation === '') {
        return (
            <Redirect to={"/Crypto_list"}>Chose coin</Redirect>
        )
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {error && <ErrorWindow errorMessage={error}/>}
                <H2>{idLocation}</H2>
                <TableCoinList/>
                <div className={s.chart}>
                    <Chart/>
                </div>
            </div>
        </div>

    )
})

export default CoinCrypto
