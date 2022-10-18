import { Card, Button} from 'react-bootstrap';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({products}) => {

  return (
    <Card id="cardProduct" style={{ backgroundImage: `url(${products.pictureUrl})`}}>
      <Card.Body className="alignEnd">
        <Card.Title className="productTitle textColorWhite">{products.title}</Card.Title>
        <Card.Text className="productPrice">${products.price}</Card.Text>
        <Link className="text-center buttonBuy" to={`/detail/${products.id}`}><Button variant="light">Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;