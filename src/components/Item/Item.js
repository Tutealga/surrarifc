import { Card, Button} from 'react-bootstrap';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({info}) => {

  return (
    <Card id="cardProduct" style={{ backgroundImage: `url(${info.pictureUrl})`}}>
      <Card.Body>
        <Card.Title className="productTitle text-color-white">{info.title}</Card.Title>
        <Card.Text className="productPrice">${info.price}</Card.Text>
        <Link className="text-center buttonBuy" to={`/detail/${info.id}`}><Button variant="light">Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;