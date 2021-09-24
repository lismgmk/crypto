import React, {useEffect, useMemo, useState} from 'react'
import {Col, Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getAllCoin, getMainCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {getChangedForCoin, getCoin} from "../Redusers/CoinCryptoReduser";
import {Redirect} from "react-router";
import Walet from "../v3-Walet/Walet";
import {actionsWaletCrypto} from "../Redusers/WalletCryptoReduser";


const AllCrypto = () => {
    const dispatch = useDispatch();

    let AllCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)
    // const [load, setLoad] = useState<string>('loading')
    const [coinId, setCoinId] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)
    const arrCoin = ['bitcoin', 'ethereum', 'monero']
    let page = 5
    useEffect(() => {
        dispatch(getAllCoin('5'))
        // setLoad('')
    }, [page])

    // useEffect(() => {
    //     dispatch(getMainCoin(arrCoin))
    // }, [arrCoin])


    const handleClickCoin = async (id: string) => {
        // setLoad('loading')
        setCoinId(id)
        setFlag(true)
        // setLoad('')
    }
    const handleAddCoin = (name: string, sumbol: string, priceUsd: string) => {
        dispatch(actionsWaletCrypto.addCoin(name, sumbol, priceUsd))
    }


    // if (load === 'loading') {
    //     return <h5>...loading</h5>
    // }
    if (flag) {
        // dispatch(getChangedForCoin(coinId))
        // dispatch(getCoin(coinId))
        return <Redirect
            to={{
                pathname: "/Crypto_coin",
                state: {id: coinId}
            }}
        />
    }
    return (
        <div>
            <Container>
                {AllCoins.map(i => {
                    return <div key={nanoid()}>
                        <div
                            onClick={() => handleClickCoin(i.id)}
                        >
                            {i.name}
                        </div>
                        <button
                            onClick={() => handleAddCoin(i.name, i.symbol, i.priceUsd)}
                        >Add to walet
                        </button>


                        <span>{i.priceUsd} {i.symbol}</span>
                    </div>
                })
                }

                <Walet/>
            </Container>


        </div>
    )
}

export default AllCrypto
