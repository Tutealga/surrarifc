import {Container} from 'react-bootstrap';
import CardJugador from '../../CardComponent/CardJugador';
import '../Plantilla.css'
import background from '../../CardComponent/card-season23.png'

const Defensa = ({title}) => {
    return (
      <Container>
        <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
        <CardJugador 
        posicion='DEFENSA'
        nombre='Santiago Locatelli'
        numero='11'
        img={background}
        />
        <CardJugador 
        posicion='DEFENSA CENTRAL'
        nombre='Mateo Fraga'
        numero='4'
        img={background}
        />
        <CardJugador
        posicion='DEFENSA'
        nombre='Iñaki Mena'
        numero='27'
        img={background}
        />
        <CardJugador 
        posicion='DEFENSA'
        nombre='Santiago Fraga'
        numero='17'
        img={background}
        />
          </Container> 
      </Container>
    );
  }
  
  export default Defensa;