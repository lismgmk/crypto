import React from 'react'
import {Button, Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";



function NaviBar() {


    return (
        <Container fluid='sm'>
            <Navbar
                sticky="top"
                collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrand>Crypto</NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>

                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav>
                        <NavLink href="/Crypto_list">All Crypto Coins</NavLink>
                    </Nav>

                    <Nav>
                        <Button variant="primary"
                                className="ml-5"
                        ><NavLink href="/Crypto_list">Vallet</NavLink></Button>
                    </Nav>


                </NavbarCollapse>

            </Navbar>
        </Container>

    )
}

export default NaviBar;
