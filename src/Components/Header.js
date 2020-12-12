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
import { Fade, Stagger } from "react-animation-components";

import Logo from "../tea logo.png";

function Header() {
    const [isNavOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isNavOpen);
    return (
        // <Jumbotron fluid className="fixed-top">
        <Container className="mx-auto">
            <Navbar className="bg-white" light sticky="top" expand="md">
                <div className="container">
                    <NavLink className="mr-auto my-3" to="/home">
                        <img
                            src="images/tea logo.png"
                            className="logo"
                            alt="Tea Era Logo"
                        />
                    </NavLink>
                    <NavbarToggler onClick={toggleNav} />
                    <Stagger in>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                                <Fade in delay={100}>
                                    <NavItem className="navItems">
                                        <NavLink
                                            className="nav-link header-link"
                                            to="/menu"
                                        >
                                            Menu
                                        </NavLink>
                                    </NavItem>
                                </Fade>
                                <Fade in delay={150}>
                                    <NavItem className="navItems">
                                        <NavLink
                                            className="nav-link header-link"
                                            to="/Tea"
                                        >
                                            Tea
                                        </NavLink>
                                    </NavItem>
                                </Fade>
                                <Fade in delay={200}>
                                    <NavItem className="navItems">
                                        <NavLink
                                            className="nav-link header-link"
                                            to="/attractions"
                                        >
                                            Attactions
                                        </NavLink>
                                    </NavItem>
                                </Fade>
                                <Fade in delay={250}>
                                    <NavItem className="navItems">
                                        <NavLink
                                            className="nav-link header-link"
                                            to="/location"
                                        >
                                            Location
                                        </NavLink>
                                    </NavItem>
                                </Fade>
                                <Fade in delay={300}>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link header-link"
                                            to="/contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Fade>
                            </Nav>
                        </Collapse>
                    </Stagger>
                </div>
            </Navbar>
        </Container>
        // </Jumbotron>
    );
}

export default Header;
