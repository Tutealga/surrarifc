import {Card} from 'react-bootstrap';
import './CardProduct.css'
import ItemCount from '../ItemCount/ItemCount'

const CardProduct = ({nombre, initial, stock, img, price}) => {

  const onAdd = (cantidad) => {
    (stock > 0) && console.log(cantidad)
  }

  return (
    <Card id="card" style={{ backgroundImage: `url(${img})`}}>
      <Card.Body>
        <Card.Title className="pNombre text-color-blanco">{nombre}</Card.Title>
        <Card.Text className="pPosicion">${price}</Card.Text>
        <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;