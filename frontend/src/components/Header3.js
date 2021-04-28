import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl,Button,Container } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">HomeChef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                <NavDropdown.Item href={`/admin/${localStorage.getItem('userid')}/homemaker_registrations`}>HomeMaker Registrations</NavDropdown.Item>
                                <NavDropdown.Item href={`/admin/${localStorage.getItem('userid')}/sales`}>Sales Perfomance</NavDropdown.Item>
                                <NavDropdown.Item href={`/admin/${localStorage.getItem('userid')}/no_signin`}>Number of Visitors</NavDropdown.Item>                               
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;