import './Footer.css'
import logo from './logo.png';
import { Navbar,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
     <Container fluid className="footer">
      <div>
<h6>SURRARI F.C</h6>
<ul className="ulLinks">
  <li><Link to={"/"}>Inicio</Link></li>
  <li><Link to={"/"}>Tienda</Link>
    <ul>
    <li><Link to={"/categoria/jugador"}>Jugador</Link></li>
    <li><Link to={"/categoria/portero"}>Portero</Link></li>
    </ul>
    </li>
  <li><Link to={'/plantilla'}>Plantilla</Link></li>
</ul>
      </div>
      <div>
<h6>ÚNETENOS</h6>
<ul className='ulRedes'>
<li><a target="__blank" href="https://www.instagram.com/surrarifc/"><i class="fa-brands fa-instagram"></i></a></li>
  <li><a target="__blank" href="https://www.tiktok.com/@surrarifc"><i class="fa-brands fa-tiktok"></i></a></li>
</ul>
<Link to={"/"} className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>     
    </Container>
  );
}

export default Footer;

