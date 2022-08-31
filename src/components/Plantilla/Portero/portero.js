import Container from 'react-bootstrap/Container';
import CardJugadorPortero from '../../CardComponent/CardJugador';
import '../Plantilla.css'
import background from '../../CardComponent/card-season22.png'

const Portero = ({title}) => {
    return (
      <Container>
        <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardJugadorPortero 
      posicion='PORTERO'
      nombre='Ignacio Terra Brandes'
      numero='23'
      img={background}/>
          </Container> 
      </Container>
    );
  }
  
  export default Portero;