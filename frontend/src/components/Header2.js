import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl,Button,Container } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#">HomeChef</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="My Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/under_construction">Previous orders</NavDropdown.Item>
                                <NavDropdown.Item href="/under_construction">Wallet</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;