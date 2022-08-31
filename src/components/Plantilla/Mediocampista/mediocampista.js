import {Container} from 'react-bootstrap';
import CardJugador from '../../CardComponent/CardJugador';
import '../Plantilla.css'
import background from '../../CardComponent/card-season23.png'

const Mediocampista = ({title}) => {
    return (
      <Container>
            <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardJugador 
      posicion='MEDIAPUNTA'
      nombre='Ignacio Mieres'
      numero='19'
      img={background}
      />
      <CardJugador 
      posicion='CENTROCAMPISTA'
      nombre='Nicolas Ortiz'
      numero='12'
      img={background}
      />
<CardJugador 
      posicion='MEDIOCENTRO DEFENSIVO'
      nombre='Joaquin Mieres'
      numero='5'
      img={background}
      />
<CardJugador 
      posicion='MEDIAPUNTA'
      nombre='Gonzalo Cafiero'
      numero='8'
      img={background}
      />
<CardJugador 
      posicion='CENTROCAMPISTA'
      nombre='Augusto Lopez'
      numero='80'
      img={background}
      />
          </Container> 
      </Container>
    );
  }
  
  export default Mediocampista;