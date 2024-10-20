import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser } from 'react-icons/fa';



function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>


                {/* <Link to="/"> */}
                <Navbar.Brand href="#home">Proshop</Navbar.Brand>

                {/* </Link> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Link to='/cart'> */}
                        <Nav.Link>
                            <FaShoppingCart /> cart
                        </Nav.Link>
                        {/* </Link> */}
                        {/* <Link to='/login'> */}
                        <Nav.Link href='/login'>
                            <FaUser /> Sign In
                        </Nav.Link>
                        {/* </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;