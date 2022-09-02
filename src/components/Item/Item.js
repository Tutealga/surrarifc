import {Card} from 'react-bootstrap';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({info}) => {

  const onAdd = (cantidad) => {
    (info.stock > 0) && console.log(cantidad)
  }

  return (
    <Card id="cardProducto" style={{ backgroundImage: `url(${info.pictureUrl})`}}>
      <Card.Body>
        <Card.Title className="pTitle text-color-blanco">{info.title}</Card.Title>
        <Card.Text className="pDescription">{info.description}</Card.Text>
        <Card.Text className="pPrice">${info.price}</Card.Text>
        <ItemCount initial={info.initial} stock={info.stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default Item;