import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {Container, NavLink} from "react-bootstrap";
import {actionsCoinCrypto, getChangedForCoin} from "../Redusers/CoinCryptoReduser";
import {Chart} from "../v4-Chart/Chart";
import {useLocation} from "react-router";
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {actionsMainCrypto} from "../Redusers/MainCryptoReduser";


interface LocationState {
    id: string
}

const CoinCrypto = React.memo( () => {
    const dispatch = useDispatch()
    const location = useLocation<LocationState>()
    const idLocation: string = location.state.id

    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)
    const error = useSelector<AppRootStateType, string|null>(state => state.coinCrypto.error)
    // const errorMainCoins = useSelector<AppRootStateType, string|null>(state => state.allCrypto.errorMainCoins)


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
            {error && <ErrorWindow errorMessage={error}/>}
            {/*{errorMainCoins && <ErrorWindow errorMessage={errorMainCoins}/>}*/}
        </div>
    )
})

export default CoinCrypto
