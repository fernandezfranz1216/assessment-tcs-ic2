import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
	return (
		<Navbar id="navbar" expand="lg" className="nav mb-5">
            <Navbar.Brand href="/" id="brand">Franz Fernandez</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="py-5 nav-collapse text-center justify-content-end">
                <Nav>
                  <Nav.Link as={NavLink} to="/" id="linkNav"  exact>Me</Nav.Link>
                  <Nav.Link as={NavLink} to="/q-and-a" id="linkNav" exact>Q&As</Nav.Link>
                  <Nav.Link as={NavLink} to="/examples" id="linkNav" exact>Examples</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
	)
}