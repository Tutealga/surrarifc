import React from 'react';
import './ItemCart.css'
import {useCartContext} from '../../context/CartContext'
import {Container, Button} from 'react-bootstrap';

const ItemCart = ({ producto }) => {
    const {removeItem} = useCartContext();
    return (
<div className='itemCart'>
    <img src={producto.pictureUrl}/>
    <div>
        <p className="title">{producto.title}</p>
        <p className="price">${producto.price}</p>
        <p className="cantidad">Cantidad: {producto.quantity} un</p>
        <p className="cantidad">Subtotal: ${producto.price * producto.quantity}</p>
        <Button type="btn" className="btn btn-light" onClick={() => removeItem(producto.id)}>Eliminar</Button>
    </div>
</div>
    );
}

export default ItemCart;
