import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href={`/homechef/${localStorage.getItem('userid')}`}>HomeChef</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href={`/homechef/${localStorage.getItem('userid')}/accepted_orders`}><i classname='fas fa-user'></i>
                            Accepted Orders</Nav.Link>
                        {/* <Nav.Link href="/my_menu"><i classname='fas fa-user'></i>
                            My Menu</Nav.Link> */}
                        <Nav.Link href={`/homechef/${localStorage.getItem('userid')}/add_menu`}><i classname='fas fa-user'></i>
                            Add Menu</Nav.Link>
                        <Nav.Link href={`/user/${localStorage.getItem('userid')}`}><i classname='fas fa-register'></i>
                            Order food</Nav.Link>
                        <Nav.Link href="/"><i classname='fas fa-register'></i>
                            Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}
export default Header
