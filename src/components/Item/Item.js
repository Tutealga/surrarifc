import {Card,Button} from 'react-bootstrap';
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Card id="cardProducto" style={{ backgroundImage: `url(${info.pictureUrl})`}}>
      <Card.Body>
        <Card.Title className="pTitle text-color-blanco">{info.title}</Card.Title>
        <Card.Text className="pPrice">${info.price}</Card.Text>
        <Link className="text-center" to={`/detail/${info.id}`}><Button variant="light">Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;