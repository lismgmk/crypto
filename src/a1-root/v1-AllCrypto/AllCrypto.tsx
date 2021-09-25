import React, {useEffect, useState} from 'react'
import { Container } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getAllCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import { getCoin} from "../Redusers/CoinCryptoReduser";
import {Link, Redirect} from "react-router-dom";
import {actionsWaletCrypto} from "../Redusers/WalletCryptoReduser";


const AllCrypto = React.memo( () => {
    const dispatch = useDispatch();

    let AllCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    const [coinId, setCoinId] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)
    let page = 5
    useEffect(() => {
        dispatch(getAllCoin('5'))
    }, [page])

    const handleClickCoin = async (id: string) => {
        setCoinId(id)
        setFlag(true)
    }

    const handleAddCoin = (name: string, sumbol: string, priceUsd: string) => {
        console.log(name)
        dispatch(actionsWaletCrypto.addCoin(name, sumbol, priceUsd))
    }

    if (flag) {
        dispatch(getCoin(coinId))
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
                            onClick={() => handleAddCoin(i.id, i.symbol, i.priceUsd)}
                        >Add to walet
                        </button>

                        <span>{i.priceUsd} {i.symbol}</span>
                    </div>
                })
                }
                <Link to="/Crypto_wallet">Wallet</Link>
            </Container>
        </div>
    )
})

export default AllCrypto
