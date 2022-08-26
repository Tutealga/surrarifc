import Container from 'react-bootstrap/Container';
import CardComponent from './CardComponent/CardComponent';

const ItemListContainer = ({title}) => {
  return (
    <Container>
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <Container style={{display:'flex'}}>
        <CardComponent 
      posicion='Portero'
      nombre='Ignacio Terra Brandes'
      numero='23'
      img='./CardComponent/card-season23.png'
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Mateo Algañaras'
      numero='21'
      img='http://localhost:3000/static/media/card-season23.46afd6810fc5914627c2.png'
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Sergio Jerez'
      numero='9'
      img='http://localhost:3000/static/media/card-season23.46afd6810fc5914627c2.png'
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Francisco Mediavilla'
      numero='10'
      img='http://localhost:3000/static/media/card-season23.46afd6810fc5914627c2.png'
      />
        </Container> 
    </Container>
  );
}

export default ItemListContainer;
