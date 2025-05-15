import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/navbar-custom.css"
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';
function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src='../logo-nav.png' alt='logo indu' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/camisetas'>Camisetas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/shorts'>
                Shorts
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/accesorios'>Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetReactIcons/>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;