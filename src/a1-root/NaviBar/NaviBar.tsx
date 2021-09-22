import React, {useEffect} from 'react'
import {Button, Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getMainCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";


function NaviBar() {

let arrCoin = ['bitcoin', 'ethereum', 'monero']
    const dispatch = useDispatch();
    let mainCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.mainCoins)

    // useEffect(() => {
    //         // dispatch(getMainCoin(firstCoin, secondCoin, thirdCoin))
    //         dispatch(getMainCoin(arrCoin))
    //     }, []
    // )
    return (



        <Navbar
            style={{color: 'white'}}
            sticky="top"
            collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {mainCoins && mainCoins.map(i=>{
                    return<div key={nanoid()}>
                        <div>{i.name}</div>
                        <div>{i.priceUsd}</div>
                        <div>{i.symbol}</div>
                    </div>
                })
                }

                {/*<NavbarBrand >Crypto</NavbarBrand>*/}
                {/*<NavbarToggle aria-controls="responsive-navbar-nav"/>*/}

                {/*<Nav>*/}
                {/*    <NavLink href="/Crypto_list">All Crypto Coins</NavLink>*/}
                {/*</Nav>*/}

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
