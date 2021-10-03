import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink 
                            className="m-3"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                            className="m-3"
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                            className="m-3"
                                to="/services"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Services
                            </NavLink>
                            <NavLink
                            className="m-3"
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Contact
                            </NavLink>
                                               
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;