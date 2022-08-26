import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import logo from './logo.png';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar id="header" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="categorias" href="#action1">TIENDA</Nav.Link>
            <Nav.Link className="categorias" href="#action2">PLANTILLA</Nav.Link>
            <Nav.Link className="categorias" href="#action2">FOTOS</Nav.Link>
            <Nav.Link className="categorias" href="#"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

