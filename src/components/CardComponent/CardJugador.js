import {Card} from 'react-bootstrap';
import './CardJugador.css'

const CardJugador = ({ nombre, posicion, numero, img }) => {
  return (
    <Card id="card" style={{ backgroundImage: `url(${img})`}}>
      <Card.Body>
      <Card.Text className="numero text-color-blanco">
          {numero}
        </Card.Text>
      <Card.Text className="pPosicion">
          {posicion}
        </Card.Text>
        <Card.Title className="pNombre text-color-blanco">{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardJugador;