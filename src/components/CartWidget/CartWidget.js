import React from 'react';
import { Container } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalProducts} = useCartContext();

  if(totalProducts()){
    return (
      <Container class="d-flex gap-2 align-items-center">
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{totalProducts()}</span>
      </Container> 
    );
  }
  
}

export default CartWidget;