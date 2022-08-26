import Card from 'react-bootstrap/Card';
import './CardComponent.css'
import background from './card-season22.png'

const CardComponentPortero = ({ nombre, posicion, numero }) => {
  return (
    <Card id="card-body" style={{ backgroundImage: `url(${background})`}}>
      <Card.Body>
      <Card.Text className="numero text-color-blanco">
          {numero}
        </Card.Text>
      <Card.Text style={{color:'#fff201'}}>
          {posicion}
        </Card.Text>
        <Card.Title className="text-color-blanco">{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardComponentPortero;