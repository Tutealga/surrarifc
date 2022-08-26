import Container from 'react-bootstrap/Container';
import CardComponent from '../../CardComponent/CardComponent';
import '../ItemListContainer.css'

const Delantero = ({title}) => {
    return (
      <Container>
          <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardComponent 
      posicion='DELANTERO'
      nombre='Mateo Algañaras'
      numero='21'
      />
<CardComponent 
      posicion='DELANTERO CENTRO'
      nombre='Sergio Jerez'
      numero='9'
      />
<CardComponent 
      posicion='DELANTERO CENTRO'
      nombre='Francisco Mediavilla'
      numero='10'
      />
          </Container> 
      </Container>
    );
  }
  
  export default Delantero;