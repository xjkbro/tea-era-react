import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
    Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import Logo from "../tea logo.png";

function Header() {
    const [isNavOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isNavOpen);
    return (
        // <Jumbotron fluid className="fixed-top">
        <Container className="mx-auto">
            <Navbar className="bg-white" light sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/home">
                        <img
                            src="images/tea logo.png"
                            className="logo"
                            alt="Tea Era Logo"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem className="navItems">
                                <NavLink
                                    className="nav-link header-link"
                                    to="/menu"
                                >
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItems">
                                <NavLink
                                    className="nav-link header-link"
                                    to="/Tea"
                                >
                                    Tea
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItems">
                                <NavLink
                                    className="nav-link header-link"
                                    to="/attractions"
                                >
                                    Attactions
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItems">
                                <NavLink
                                    className="nav-link header-link"
                                    to="/location"
                                >
                                    Location
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link header-link"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </Container>
        // </Jumbotron>
    );
}

export default Header;
