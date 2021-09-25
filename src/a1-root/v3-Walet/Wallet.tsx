import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {
    actionsWaletCrypto,
    CoinInWalletType,
    getCurrentCost,
    getStartandCurrentCost
} from "../Redusers/WalletCryptoReduser";
import {nanoid} from "nanoid";
import InputForWalet from "./InputForWalet";


const Wallet = React.memo(() => {

    const dispatch = useDispatch();

    let coins = useSelector<AppRootStateType, Array<CoinInWalletType>>(state => state.wallet.coinInWallet)


    const handleSubmit = useCallback(() => {
            dispatch(getStartandCurrentCost())
            dispatch(getCurrentCost())
        }
        , [])


    const handleDelete = useCallback(
            (id: string) => {
                dispatch(actionsWaletCrypto.deleteCoin(id))
            }
        , [])
    return (
        <div
            style={{
                width: "200px",
                height: "400px",
                border: '1px solid red'
            }}>
            <h2>Кошелек</h2>

            {coins && coins.map(i => {
                return <div
                    key={nanoid()}
                >
                    <InputForWalet
                        name={i.name}
                        id={i.id}
                        sum={i.sum}
                        symbol={i.symbol}
                    />

                    <button onClick={() => handleDelete(i.id)}>Delete</button>
                </div>
            })
            }
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
})

export default Wallet;
