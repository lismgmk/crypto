import React, {useEffect} from 'react'
import {Col, Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getAllCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";


function AllCrypto() {
    const dispatch = useDispatch();
    let AllCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    useEffect(() => {
       dispatch(getAllCoin('5'))
    }, [])

    return (
        <div>
            <Container>
                {AllCoins.map(i=>{
                    return<div key={nanoid()}>
                        <div>{i.name}</div>
                        <div>{i.priceUsd}</div>
                        <div>{i.symbol}</div>
                    </div>
                })
                }


            </Container>


        </div>
    )
}

export default AllCrypto;
