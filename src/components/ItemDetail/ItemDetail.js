import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
  const [goCart, setGoCart] = useState(false);

  const {addItem} = useCartContext();

  const onAdd = (quantity) => {
    (item.stock > 0) && setGoCart(true);
    addItem(item, quantity)
  }

    return(
      <div className="cardProductDetail">
         <img src={item.pictureUrl}></img>
         <div>
           <h1 className="productTitleDetail">{item.title}</h1>
           <p className="productPriceDetail">${item.price}</p>
           <p className="productDescriptionDetail">Todas las prendas son de poliester, la mejor calidad en telas deportivas que destaca por su comodidad y resistencia.</p>
           <p>Stock: {item.stock}</p>
           {
           goCart
           ? <><Link id="checkout" className="pt-1 btn btn-primary" to='/cart'>Ir al carrito</Link><Link id="checkout" className="pt-1 btn btn-primary" to='/'>Seguir comprando</Link></>
           : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
           }
         </div>
      </div>
    );
}

export default ItemDetail;