import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({info}) => {
  const [IrACarrito, setIrACarrito] = useState(false);

  const {addItem} = useCartContext();

  const onAdd = (cantidad) => {
    (info.stock > 0) && setIrACarrito(true);
    addItem(info, cantidad)
  }

    return(
      <div className="cardProductDetail">
         <img src={info.pictureUrl}></img>
         <div>
           <h1 className="productTitleDetail">{info.title}</h1>
           <p className="productPriceDetail">${info.price}</p>
           <p className="productDescriptionDetail">{info.description}</p>
           {
           IrACarrito
           ? <Link id="finalizarCompra" className="pt-1 btn btn-primary" to='/cart'>Finalizar compra</Link>
           :<ItemCount initial={info.initial} stock={info.stock} onAdd={onAdd}/>
           }
         </div>
      </div>
    );
}

export default ItemDetail;