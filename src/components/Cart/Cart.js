import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { Container, Button } from 'react-bootstrap';
import {addDoc, getFirestore, collection} from 'firebase/firestore';

const Cart = () => {
const {cart, totalPrice} = useCartContext();

const order = {
  buyer: {
    name: 'Mateo',
    email: 'mateo@gmail.com',
    phone: '1156794856',
  },
items:cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
total:totalPrice(),
}

const finalizarCompra = () =>{
  const db = getFirestore();
  const ordersCollection = collection(db,'orders');
  addDoc(ordersCollection,order)
  .then(({ id }) => console.log(id))
}

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
    <Button onClick={finalizarCompra}>Finalizar compra</Button>
    </Container>
    </Container>
    
  );
}

export default Cart;