import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {CoinType} from "../../API/cryptoAPI";
import {actionsMainCrypto, getMainCoin} from "../../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {actionsWaletCrypto, getCurrentCost} from "../../Redusers/WalletCryptoReduser";
import {NavLink} from 'react-router-dom'
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {Preloader} from "../common/Preloader/Preloader";
import {Button} from "../common/Button/Button";
import style from "./Header.module.scss";
import {UserSvg} from "../../assets/icon/UserSVG";
import {WalletSvg} from "../../assets/icon/WalletSVG";
import {actionsCoinCrypto} from "../../Redusers/CoinCryptoReduser";

const Header = React.memo(() => {

        const dispatch = useDispatch();
        let mainCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.mainCoins)
        let arrCoin = useSelector<AppRootStateType, Array<string>>(state => state.allCrypto.threeMainCoins)
        let startCoast = useSelector<AppRootStateType, number>(state => state.wallet.startCoastUSD)
        let getDifference = useSelector<AppRootStateType, number>(state => state.wallet.difference)
        let differencePercent = useSelector<AppRootStateType, number>(state => state.wallet.differencePercent)
        const error = useSelector<AppRootStateType, string | null>(state => state.wallet.error)
        const errorMainCoins = useSelector<AppRootStateType, string | null>(state => state.allCrypto.errorMainCoins)
        let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)


        useEffect(() => {
            let int = setTimeout(() => {
                errorMainCoins && dispatch(actionsMainCrypto.setErrorMainCoins(null))
                error && dispatch(actionsWaletCrypto.setError(null))
            }, 3000)
            return () => clearTimeout(int)
        }, [error, errorMainCoins])

        useEffect(() => {
                dispatch(getMainCoin(arrCoin))
            }, []
        )

        const hendleRefresh = useCallback(() => {
            dispatch(getCurrentCost())
        }, [])


        if (loader) {
            return <Preloader/>
        }

        return (

            <header className={style.header}>
                <div className={style.header__container}>
                    <h2>Cryptocurrency rates</h2>
                    <nav className={style.header__nav}>
                        <ul className={style.header__list}>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        dispatch(actionsCoinCrypto.getOneMainCoin(''))
                                    }}
                                    to={"/Crypto_list"} activeClassName={style.activeLink}>
                                    <div style={{color: 'red'}}><UserSvg/></div>
                                    Main</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        dispatch(actionsCoinCrypto.getOneMainCoin(''))
                                    }}
                                    to={"/Crypto_wallet"}
                                    activeClassName={style.activeLink}><WalletSvg/>
                                    Wallet</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={style.header__container}>
                    {mainCoins && mainCoins.map(i => {
                        return <ul className={`${style.activeLink} ${style.header2__list}`} key={nanoid()}>
                            <li>{i.name}</li>
                            <li>{(+i.priceUsd).toFixed(3)}</li>
                            <li>{i.symbol}</li>
                        </ul>
                    })
                    }

                </div>
                <div className={style.header__container}>
                    <ul className={`${style.activeLink} ${style.header2__list}`}>
                        <li style={{color: 'green'}}>Wallet balance: {startCoast.toFixed(3)}</li>
                        <li style={{color: 'red'}}>
                            Delta: {getDifference.toFixed(3)}</li>
                        <li style={{color: 'blue'}}>Delta percentage: {differencePercent.toFixed(3)} %</li>
                    </ul>
                    <Button width={80}
                            color='red'
                            rounded
                            onClick={hendleRefresh}
                    >Refresh
                    </Button>
                </div>
                {error && <ErrorWindow errorMessage={error}/>}
                {errorMainCoins && <ErrorWindow errorMessage={errorMainCoins}/>}
            </header>
        )
    }
)
export default Header;
