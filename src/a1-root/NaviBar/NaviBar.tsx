import React, {useCallback, useEffect} from 'react'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {actionsMainCrypto, getMainCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {actionsWaletCrypto, getCurrentCost} from "../Redusers/WalletCryptoReduser";
import {Link} from 'react-router-dom'
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {actionsCoinCrypto} from "../Redusers/CoinCryptoReduser";

const NaviBar = React.memo(() => {

        const dispatch = useDispatch();
        let mainCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.mainCoins)
        let arrCoin = useSelector<AppRootStateType, Array<string>>(state => state.allCrypto.threeMainCoins)
        let startCoast = useSelector<AppRootStateType, number>(state => state.wallet.startCoastUSD)
        let getDifference = useSelector<AppRootStateType, number>(state => state.wallet.difference)
        let differencePercent = useSelector<AppRootStateType, number>(state => state.wallet.differencePercent)

        const error = useSelector<AppRootStateType, string | null>(state => state.wallet.error)
        const errorMainCoins = useSelector<AppRootStateType, string | null>(state => state.allCrypto.errorMainCoins)


    useEffect(()=>{
        let int =  setTimeout(()=>{
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

        return (

            <div>
                <Navbar
                    style={{color: 'white'}}
                    sticky="top"
                    collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        {mainCoins && mainCoins.map(i => {
                            return <div key={nanoid()}>
                                <div>{i.name}</div>
                                <div>{i.priceUsd}</div>
                                <div>{i.symbol}</div>
                            </div>
                        })
                        }
                        <div style={{color: 'green'}}>{startCoast}</div>
                        <div style={{color: 'red'}}>
                            {getDifference}
                            <span style={{color: 'blue'}}>{differencePercent} %</span>
                            <button onClick={hendleRefresh}>Refresh</button>
                        </div>

                        <Nav>
                            <Button variant="primary"
                                    className="ml-5"
                            >
                                <Link to="/Crypto_list">Valet</Link>
                            </Button>
                        </Nav>
                    </Container>
                </Navbar>
                {error && <ErrorWindow errorMessage={error}/>}
                {errorMainCoins && <ErrorWindow errorMessage={errorMainCoins}/>}
            </div>


        )
    }
)
export default NaviBar;
