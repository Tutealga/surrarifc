import Card from 'react-bootstrap/Card';
import './CardComponent.css'

const CardComponent = ({ nombre, posicion, numero, img }) => {
  return (
    <Card id="card-body" style={{ backgroundImage: `url(${img})` }}>
      <Card.Body>
      <Card.Text className="text-color-blanco">
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

export default CardComponent;