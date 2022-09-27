import React from 'react';
import './ItemCart.css'
import {useCartContext} from '../../context/CartContext'
import {Button} from 'react-bootstrap';

const ItemCart = ({ product }) => {
    const {removeItem} = useCartContext();

    return (
<div className='itemCart'>
    <img src={product.pictureUrl}/>
    <div>
        <p className="title">{product.title}</p>
        <p className="price">${product.price}</p>
        <p className="quantity">Cantidad: {product.quantity} un</p>
        <p className="quantity">Subtotal: ${product.price * product.quantity}</p>
        <Button type="btn" className="btn btn-light" onClick={() => removeItem(product.id)}>Eliminar</Button>
    </div>
</div>
    );
}

export default ItemCart;
