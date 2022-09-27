import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { Container } from 'react-bootstrap';

const Cart = () => {
const {cart, totalPrice} = useCartContext();

if (cart.length === 0){
  return (
    <Container >
    <h1 className="text-center">Carrito</h1>
    <Container>
    <p>No hay productos en el carrito</p>
    <Link className="pt-1" id="goBuy" to='/'>Ir a comprar</Link>
    </Container>
    </Container>
  );
}

  return (
    <Container>
    <h1 className="text-center">Carrito</h1>
    <Container>
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p id="total" className="text-center">
      Total: ${totalPrice()}
    </p>
    </Container>
    </Container>
    
  );
}

export default Cart;