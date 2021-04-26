import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import backendUrl from "../deployment"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">HomeChef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href={`${backendUrl}/auth/google`}>
                                <i classname="fas fa-user"></i>
                                Customer Login
                            </Nav.Link>
                
                            <Nav.Link href="/admin_login">
                                <i classname="fas fa-user"></i>
                                Admin Login
                            </Nav.Link>
                            <Nav.Link href="/agent_login">
                                <i classname="fas fa-user"></i>
                                Agent Login
                            </Nav.Link>

                            <Nav.Link href="/homechef_login">
                                <i classname="fas fa-user"></i>
                                HomeChef Login
                            </Nav.Link>
                            <Nav.Link href="/homechef_register">
                                <i classname="fas fa-register"></i>
                                Want to be a HomeChef?
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
