import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {
    getCurrentCost,
    getStartandCurrentCost
} from "../../Redusers/WalletCryptoReduser";
import {Button} from "../common/Button/Button";
import {Preloader} from "../common/Preloader/Preloader";
import {H2} from "../common/Headings/H2";
import s from "../v1-AllCrypto/AllCrypto.module.scss";
import {TableWalletList} from "./TableWalletList/TableWalletList";

const Wallet = React.memo(() => {

    const dispatch = useDispatch();
    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)

    const handleSubmit = useCallback(() => {
            dispatch(getStartandCurrentCost())
            dispatch(getCurrentCost())
        }
        , [])


    if (loader) {
        return <Preloader/>
    }
    return (
        <div className={s.container}>
            <H2>All coins</H2>

            <div className={s.wrapper}>
                <TableWalletList/>
            </div>
            <Button
                style={{
                    width: "80px",
                    margin: "15px 0",
                }}
                color={'dark-blue'}
                onClick={handleSubmit}
                rounded
            >Submit
            </Button>
        </div>
    )
})

export default Wallet;
