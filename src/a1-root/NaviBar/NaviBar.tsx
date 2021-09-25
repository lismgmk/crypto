import React, {useCallback, useEffect} from 'react'
import {Button, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getMainCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {getCurrentCost} from "../Redusers/WalletCryptoReduser";
import { Link } from 'react-router-dom'

const NaviBar = React.memo(() => {

    const dispatch = useDispatch();
    let mainCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.mainCoins)
    let arrCoin = useSelector<AppRootStateType, Array<string>>(state => state.allCrypto.threeMainCoins)
    let startCoast = useSelector<AppRootStateType, number>(state => state.wallet.startCoastUSD)
    let getDifference = useSelector<AppRootStateType, number>(state => state.wallet.difference)
    let differencePercent = useSelector<AppRootStateType, number>(state => state.wallet.differencePercent)

    useEffect(() => {
            dispatch(getMainCoin(arrCoin))
        }, []
    )

    const hendleRefresh =useCallback( ()=>{
        dispatch(getCurrentCost())
    }, [])

    return (


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


    )
}
)
export default NaviBar;
