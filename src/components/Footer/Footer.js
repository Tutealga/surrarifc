import Container from 'react-bootstrap/Container';
import './Footer.css'
import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
     <Container fluid className="footer">
      <div>
<h6>SURRARI F.C</h6>
<ul className="ulLinks">
  <li><a href="#">Tienda</a></li>
  <li><a href="#">Plantilla</a></li>
  <li><a href="#">Calendario y Resultados</a></li>
  <li><a href="#">Fotos</a></li>
</ul>
      </div>
      <div>
<h6>ÚNETENOS</h6>
<ul className='ulRedes'>
<li><a target="__blank" href="https://www.instagram.com/surrarifc/"><i class="fa-brands fa-instagram"></i></a></li>
  <li><a target="__blank" href="https://www.tiktok.com/@surrarifc"><i class="fa-brands fa-tiktok"></i></a></li>
</ul>
<a className="aLogo"><div><Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand></div></a>
      </div>     
    </Container>
  );
}

export default Footer;

