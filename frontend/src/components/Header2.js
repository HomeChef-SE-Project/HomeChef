import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">HomeChef</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
