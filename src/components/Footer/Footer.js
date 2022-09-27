import './Footer.css'
import logo from '../../assets/logo.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <Container fluid className="footer">
      <Container fluid className="footerDiv">
      <div>
<h6>SURRARI F.C</h6>
<ul className="ulLinks">
  <li><Link to={"/"}>Inicio</Link></li>
  <li><Link to={"/"}>Tienda</Link>
    <ul>
    <li><Link to={"/category/camiseta"}>Camisetas</Link></li>
    <li><Link to={"/category/pantalon"}>Pantalones</Link></li>
    </ul>
    </li>
  <li><Link to={'/plantilla'}>Plantilla</Link></li>
</ul>
      </div>
      <div className="divRedes">
<h6>SÍGUENOS</h6>
<ul className='ulRedes'>
<li><a target="__blank" href="https://www.instagram.com/surrarifc/"><i className="fa-brands fa-instagram"></i></a></li>
  <li><a target="__blank" href="https://www.tiktok.com/@surrarifc"><i className="fa-brands fa-tiktok"></i></a></li>
</ul>
<Link to={"/"} className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>   
      </Container>
      <Container fluid className="credits text-center mt-4">
      <p>Surrari F.C © 2022. Todos los derechos reservados.</p>
      </Container>
    </Container>
  );
}

export default Footer;

