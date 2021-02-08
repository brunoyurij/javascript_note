import React, { useState } from 'react';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img src={LogoImage} alt="Logo" />
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment
                        as="div"
                        className="navbar-item navbar-end"
                        align="right"
                    >
                        Item 1
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;
