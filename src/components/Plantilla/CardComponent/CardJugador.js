import {Card} from 'react-bootstrap';
import './CardJugador.css'

const CardJugador = ({ info }) => {
  return (
    <Card id="card" style={{ backgroundImage: `url(${info.img})`}}>
      <Card.Body>
      <Card.Text className="numero text-color-blanco">{info.number}</Card.Text>
      <Card.Text className="jugadorPosicion">{info.position}</Card.Text>
        <Card.Title className="jugadorNombre text-color-blanco">{info.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardJugador;