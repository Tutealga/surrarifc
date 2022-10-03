import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({info}) => {
  const [goCart, setGoCart] = useState(false);

  const {addItem} = useCartContext();

  const onAdd = (quantity) => {
    (info.stock > 0) && setGoCart(true);
    addItem(info, quantity)
  }

    return(
      <div className="cardProductDetail">
         <img src={info.pictureUrl}></img>
         <div>
           <h1 className="productTitleDetail">{info.title}</h1>
           <p className="productPriceDetail">${info.price}</p>
           <p className="productDescriptionDetail">{info.description}</p>
           {
           goCart
           ? <><Link id="finalizarCompra" className="pt-1 btn btn-primary" to='/cart'>Ir al carrito</Link><Link id="finalizarCompra" className="pt-1 btn btn-primary" to='/'>Seguir comprando</Link></>
           :<ItemCount initial={1} stock={info.stock} onAdd={onAdd}/>
           }
         </div>
      </div>
    );
}

export default ItemDetail;