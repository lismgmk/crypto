import React, {useCallback} from "react";
import s from "../../v1-AllCrypto/TableList/TableList.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../App/store";
import {nanoid} from "nanoid";
import {Button} from "../../common/Button/Button";
import {
    actionsWaletCrypto,
    CoinInWalletType,
} from "../../../Redusers/WalletCryptoReduser";
import {Preloader} from "../../common/Preloader/Preloader";
import InputForWalet from "../InputForWalet";


export const TableWalletList: React.FC = () => {

    const dispatch = useDispatch();

    let coins = useSelector<AppRootStateType, Array<CoinInWalletType>>(state => state.wallet.coinInWallet)
    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)


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
