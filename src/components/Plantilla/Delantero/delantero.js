import {Container} from 'react-bootstrap';
import CardJugador from '../../CardComponent/CardJugador';
import '../Plantilla.css'
import background from '../../CardComponent/card-season23.png'

const Delantero = ({title}) => {
    return (
      <Container>
          <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardJugador 
      posicion='DELANTERO'
      nombre='Mateo Algañaras'
      numero='21'
      img={background}
      />
<CardJugador 
      posicion='DELANTERO CENTRO'
      nombre='Sergio Jerez'
      numero='9'
      img={background}
      />
<CardJugador 
      posicion='DELANTERO CENTRO'
      nombre='Francisco Mediavilla'
      numero='10'
      img={background}
      />
          </Container> 
      </Container>
    );
  }
  
  export default Delantero;