import React from 'react'
import {Button, Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";


function NaviBar() {


    return (

        <Navbar
            sticky="top"
            collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <NavbarBrand>Crypto</NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>

                    <Nav>
                        <NavLink href="/Crypto_list">All Crypto Coins</NavLink>
                    </Nav>

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
