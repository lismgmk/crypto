import React, {useEffect, useState} from 'react'
import {Col, Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getAllCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {getCoin} from "../Redusers/CoinCryptoReduser";
import {Redirect} from "react-router";


function AllCrypto() {
    const dispatch = useDispatch();

    let AllCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)
    const [load, setLoad] = useState<string>('loading')

    useEffect(() => {
        dispatch(getAllCoin('5'))
        setLoad('')
    }, [])


    const handleClickCoin = async (id: string) => {
        setLoad('loading')
        await dispatch(getCoin(id))
        setLoad('')
    }
    if (load === 'loading') {
        return <h5>...loading</h5>
    }
    if (oneCoins !== null) {
        return <Redirect to="/Crypto_coin"/>
    }
    return (
        <div>
            <Container>
                {AllCoins.map(i => {
                    return <div key={nanoid()}>
                        <div
                            onClick={() => handleClickCoin(i.id)}
                        >{i.name} </div>
                        <span>{i.priceUsd} {i.symbol}</span>
                    </div>
                })
                }


            </Container>


        </div>
    )
}

export default AllCrypto;
