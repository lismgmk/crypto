import React, {useCallback, useState} from "react";
import s from "./TableWalletList.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../App/store";
import {CoinType} from "../../../API/cryptoAPI";
import {nanoid} from "nanoid";
import {Button} from "../../common/Button/Button";
import {Modal} from "../../common/Modal/Modal";
import {
    actionsWaletCrypto,
    CoinInWalletType,
    getCurrentCost,
    getStartandCurrentCost
} from "../../../Redusers/WalletCryptoReduser";
import {actionsCoinCrypto} from "../../../Redusers/CoinCryptoReduser";
import {Preloader} from "../../common/Preloader/Preloader";
import InputForWalet from "../InputForWalet";

type TableListPropsType = {}


export const TableWalletList: React.FC<TableListPropsType> = (props: TableListPropsType) => {

    const dispatch = useDispatch();

    let coins = useSelector<AppRootStateType, Array<CoinInWalletType>>(state => state.wallet.coinInWallet)
    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)


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

    if (loader) {
        return <Preloader/>
    }


    return (
        <div className={s.table}>
            <table className={s.table__block}>
                <thead>
                <tr>
                    <th className={s.col1}>Name</th>
                    <th className={s.col2}>Value</th>
                    <th className={s.col3}>Symbol</th>
                    <th className={s.col4}>Edit</th>
                    <th className={s.col5}>Delete</th>
                </tr>
                </thead>
                <tbody>
                {coins.map((i) => {
                    return <tr key={nanoid()}>
                        <th className={s.col1}>{i.name}</th>

                            <InputForWalet
                                name={i.name}
                                id={i.id}
                                sum={i.sum}
                                symbol={i.symbol}
                            />
                        {/*<th className={s.col3}>{i.symbol}</th>*/}
                        <th className={`${s.col5} ${s.btn}`}>
                            <Button
                                width={80}
                                color='red'
                                rounded
                                onClick={() => handleDelete(i.id)}
                            >Delete</Button>
                        </th>

                    </tr>
                })
                }
                </tbody>
            </table>


        </div>
    )
}
