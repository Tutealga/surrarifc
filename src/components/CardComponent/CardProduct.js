import {Card} from 'react-bootstrap';
import './CardProduct.css'
import ItemCount from '../ItemCount/ItemCount'

const CardProduct = ({producto, initial, stock, img}) => {

  const onAdd = (cantidad) => {
    (stock > 0) && console.log(cantidad)
  }

  return (
    <Card id="card" style={{ backgroundImage: `url(${img})`}}>
      <Card.Body>
        <Card.Title className="pNombre text-color-blanco">{producto}</Card.Title>
        <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;