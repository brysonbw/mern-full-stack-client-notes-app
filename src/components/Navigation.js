//RRD
import { Link } from 'react-router-dom';

// React Bootstrap
import { Navbar, Container } from "react-bootstrap";

function Navigation() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <Container className="mb-3 mt-3">
  <Navbar.Brand as={Link} to='/'>Note Keeper</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Navigation
