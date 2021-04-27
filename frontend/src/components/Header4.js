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
                        <Nav.Link href="/Accepted_Orders"><i classname='fas fa-user'></i>
                            Accepted Orders</Nav.Link>
                        <Nav.Link href="/My_Menu"><i classname='fas fa-user'></i>
                            My Menu</Nav.Link>
                        <Nav.Link href="/Add_Menu"><i classname='fas fa-user'></i>
                            Add Menu</Nav.Link>
                        <Nav.Link href="/Order_Food"><i classname='fas fa-register'></i>
                            Order food</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}
export default Header
