import {Card,Button} from 'react-bootstrap';
import './Item.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const Item = ({info}) => {

  return (
    <Card id="cardProducto" style={{ backgroundImage: `url(${info.pictureUrl})`}}>
      <Card.Body>
        <Card.Title className="productTitle text-color-blanco">{info.title}</Card.Title>
        <Card.Text className="productPrice">${info.price}</Card.Text>
        <Link className="text-center buttonComprar" to={`/detalle/${info.id}`}><Button variant="light">Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;