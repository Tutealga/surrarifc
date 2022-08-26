import Container from 'react-bootstrap/Container';
import CardComponent from '../../CardComponent/CardComponent';
import '../ItemListContainer.css'

const Defensa = ({title}) => {
    return (
      <Container>
        <h2 className="titlePosicion">{title}</h2>
          <Container className="itemListContainer">
        <CardComponent 
        posicion='DEFENSA'
        nombre='Santiago Locatelli'
        numero='11'
        />
        <CardComponent 
        posicion='DEFENSA'
        nombre='Santiago Fraga'
        numero='17'
        />
        <CardComponent 
        posicion='DEFENSA'
        nombre='Iñaki Mena'
        numero='27'
        />
        <CardComponent 
        posicion='DEFENSA CENTRAL'
        nombre='Mateo Fraga'
        numero='4'
        />
          </Container> 
      </Container>
    );
  }
  
  export default Defensa;