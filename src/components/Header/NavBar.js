import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar id="header" expand="lg">
      <Container fluid>
        <NavLink to='/' className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"to
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="categories nav-link" to='/'>Inicio</NavLink>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
            <NavLink className="categories nav-link" to='/category/camiseta'>Camisetas</NavLink>
            <NavLink className="categories nav-link" to='/category/pantalon'>Pantalones</NavLink>
            <NavLink className="categories nav-link" to='/category/jugador'>Jugador</NavLink>
            <NavLink className="categories nav-link" to='/category/portero'>Portero</NavLink>
            </NavDropdown>
            <NavLink className="categories nav-link" to='/team'>Plantilla</NavLink>
            <NavLink className="categories nav-link" to='/results'>Resultados</NavLink>
            <NavLink className="categories nav-link" to='/cart'><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

