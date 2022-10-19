import './Cart.css'
import { Container } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';

import CartEmpty from './CartEmpty';
import CartDetail from './CartDetail';

const Cart = () => {

  const {cart} = useCartContext();

  return (
    <Container >
    <h1 className="text-center">Carrito</h1>
    { (cart.length === 0) 
    ?
      <CartEmpty/>
    :
     <CartDetail/>
    }
    </Container>
    );
}

export default Cart;