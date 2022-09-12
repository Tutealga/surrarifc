import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logo.png';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

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
            <NavLink className="categorias nav-link" to='/'>INICIO</NavLink>
            <NavDropdown title="TIENDA" id="basic-nav-dropdown">
            <NavLink className="categorias nav-link" to='/categoria/camiseta'>CAMISETAS</NavLink>
            <NavLink className="categorias nav-link" to='/categoria/pantalon'>PANTALONES</NavLink>
            </NavDropdown>
            <NavLink className="categorias nav-link" to='/plantilla'>PLANTILLA</NavLink>
            <NavLink className="categorias nav-link" to='/resultados'>RESULTADOS</NavLink>
            <NavLink className="categorias nav-link" to='/cart'><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

