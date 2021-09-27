import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {
    actionsWaletCrypto,
    CoinInWalletType,
    getCurrentCost,
    getStartandCurrentCost
} from "../../Redusers/WalletCryptoReduser";
import {nanoid} from "nanoid";
import InputForWalet from "./InputForWalet";
import {Button} from "../common/Button/Button";
import {Preloader} from "../common/Preloader/Preloader";
import {H2} from "../common/Headings/H2";
import s from "../v1-AllCrypto/AllCrypto.module.scss";
import {TableList} from "../v1-AllCrypto/TableList/TableList";
import {TableWalletList} from "./TableWalletList/TableWalletList";

const Wallet = React.memo(() => {

    const dispatch = useDispatch();

    let coins = useSelector<AppRootStateType, Array<CoinInWalletType>>(state => state.wallet.coinInWallet)
    let loader = useSelector<AppRootStateType,boolean|null>(state => state.allCrypto.loader)


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

    if(loader){
        return <Preloader/>
    }
    return (
        <div className={s.container}>
            <H2>All coins</H2>
            <div className={s.wrapper}>
            <TableWalletList/>
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
                        <Button
                            width={80}
                            color='red'
                            rounded
                            onClick={() => handleDelete(i.id)}
                        >Delete</Button>

                        {/*<button onClick={() => handleDelete(i.id)}>Delete</button>*/}
                    </div>
                })
                }
                <Button
                    color={'dark-blue'}
                    onClick={handleSubmit}
                    rounded
                >Submit</Button>

            </div>
            </div>

    )
})

export default Wallet;
