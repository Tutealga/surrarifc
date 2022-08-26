import Container from 'react-bootstrap/Container';
import CardComponent from '../../CardComponent/CardComponent';
import '../ItemListContainer.css'

const Mediocampista = ({title}) => {
    return (
      <Container>
            <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
          <CardComponent 
      posicion='MEDIAPUNTA'
      nombre='Ignacio Mieres'
      numero='19'
      />
      <CardComponent 
      posicion='CENTROCAMPISTA'
      nombre='Nicolas Ortiz'
      numero='12'
      />
<CardComponent 
      posicion='MEDIOCENTRO DEFENSIVO'
      nombre='Joaquin Mieres'
      numero='5'
      />
<CardComponent 
      posicion='MEDIAPUNTA'
      nombre='Gonzalo Cafiero'
      numero='8'
      />
<CardComponent 
      posicion='CENTROCAMPISTA'
      nombre='Augusto Lopez'
      numero='80'
      />
          </Container> 
      </Container>
    );
  }
  
  export default Mediocampista;