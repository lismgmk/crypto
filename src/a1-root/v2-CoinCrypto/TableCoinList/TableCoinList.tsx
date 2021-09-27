import React, {useState} from "react";
import s from "../../v1-AllCrypto/TableList/TableList.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../App/store";
import {CoinType} from "../../../API/cryptoAPI";
import {Button} from "../../common/Button/Button";
import {Modal} from "../../common/Modal/Modal";
import {actionsWaletCrypto} from "../../../Redusers/WalletCryptoReduser";



export const TableCoinList: React.FC = () => {

    const dispatch = useDispatch();

    const [addModal, setAddModal] = useState(false);
    let oneCoins = useSelector<AppRootStateType, CoinType | null>(state => state.coinCrypto.coin)


    const handleAddCoin = (name: string, sumbol: string, priceUsd: string) => {
        dispatch(actionsWaletCrypto.addCoin(name, sumbol, priceUsd))
    }

    return (
        <div className={s.table}>
            <table className={s.table__blockCoin}>
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
                {oneCoins &&
                <tr>
                    <th className={s.col1}>{(+oneCoins.rank).toFixed(0)}</th>
                    <th className={s.col2}>{oneCoins.name}</th>
                    <th className={s.col3}>{(+oneCoins.priceUsd).toFixed(3)}</th>
                    <th className={s.col4}>{(+oneCoins.changePercent24Hr).toFixed(3)}</th>
                    <th className={s.col5}>{oneCoins.symbol}</th>
                    <th className={`${s.col6} ${s.btn}`}>
                        <Button
                            onClick={() => {
                                setAddModal(true)
                                oneCoins && handleAddCoin(oneCoins.id, oneCoins.symbol, oneCoins.priceUsd)
                            }}
                            rounded={false}
                            color='light-blue'>Add to wallet
                        </Button>
                    </th>

                </tr>
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
