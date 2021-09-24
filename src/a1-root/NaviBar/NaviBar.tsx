import React, {useEffect} from 'react'
import {Button, Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getMainCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";


const NaviBar = () => {

    let arrCoin = ['bitcoin', 'ethereum', 'monero']
    const dispatch = useDispatch();
    let mainCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.mainCoins)
    let startCoast = useSelector<AppRootStateType, number>(state => state.wallet.startCoastUSD)

    useEffect(() => {
            // dispatch(getMainCoin(firstCoin, secondCoin, thirdCoin))
            dispatch(getMainCoin(arrCoin))
        }, []
    )

    console.log(startCoast)
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
                <div style={{color: 'red'}}>{startCoast}</div>

                <Nav>
                    <Button variant="primary"
                            className="ml-5"
                    ><NavLink href="/Crypto_list">Valet</NavLink></Button>
                </Nav>


            </Container>
        </Navbar>


    )
}

export default NaviBar;
