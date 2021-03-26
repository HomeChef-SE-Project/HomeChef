import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">HomeChef</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/auth/google"><i classname='fas fa-user'></i>
                        Login</Nav.Link>
                        <Nav.Link href="/Sign up"><i classname='fas fa-register'></i>
                        Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header
