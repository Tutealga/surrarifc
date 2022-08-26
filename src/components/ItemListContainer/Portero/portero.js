import Container from 'react-bootstrap/Container';
import CardComponentPortero from '../../CardComponent/CardComponentPortero';
import '../ItemListContainer.css'

const Portero = ({title}) => {
    return (
      <Container>
        <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardComponentPortero 
      posicion='PORTERO'
      nombre='Ignacio Terra Brandes'
      numero='23'
      />
          </Container> 
      </Container>
    );
  }
  
  export default Portero;