import React, {useState} from "react";
import s from "./TableList.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../App/store";
import {CoinType} from "../../../API/cryptoAPI";
import {nanoid} from "nanoid";
import {Button} from "../../common/Button/Button";
import {Modal} from "../../common/Modal/Modal";
import {actionsWaletCrypto} from "../../../Redusers/WalletCryptoReduser";

type TableListPropsType = {
    setCoinId: (val: string) => void
    setFlag: (val: boolean) => void
}


export const TableList: React.FC<TableListPropsType> = (props: TableListPropsType) => {
    const {setCoinId, setFlag} = props

    const dispatch = useDispatch();

    let allCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    const [addModal, setAddModal] = useState(false);

    const handleClickCoin = (id: string) => {
        setCoinId(id)
        setFlag(true)
    }

    const handleAddCoin = (name: string, sumbol: string, priceUsd: string) => {
        dispatch(actionsWaletCrypto.addCoin(name, sumbol, priceUsd))
    }

    return (
        <div className={s.table}>
            <table className={s.table__block}>
                <thead>
                <tr>
                    <th className={s.col1}>Rank</th>
                    <th className={s.col2}>Name</th>
                    <th className={s.col3}>Price (Usd)</th>
                    <th className={s.col4}>Change Percent 24hr</th>
                    <th className={s.col5}>Symbol</th>
                    <th className={s.col6}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {allCoins.map((c) => {
                    return <tr key={nanoid()}>
                        <th className={s.col1}>{(+c.rank).toFixed(0)}</th>
                        <th className={s.col2} onClick={() => handleClickCoin(c.id)}>{c.name}</th>
                        <th className={s.col3}>{(+c.priceUsd).toFixed(3)}</th>
                        <th className={s.col4}>{(+c.changePercent24Hr).toFixed(3)}</th>
                        <th className={s.col5}>{c.symbol}</th>
                        <th className={`${s.col6} ${s.btn}`}>
                            <Button
                                onClick={() => {
                                    setAddModal(true)
                                    handleAddCoin(c.id, c.symbol, c.priceUsd)
                                }}
                                rounded={false}
                                color='light-blue'>Add to wallet
                            </Button>
                        </th>

                    </tr>
                })
                }
                </tbody>
            </table>
            <Modal modalActive={addModal} setModalActive={setAddModal}>
               The coin has been successfully added to the wallet.
               To edit, go to the <Link to="/Crypto_wallet">Wallet</Link> or add more

            </Modal>

        </div>
    )
}
