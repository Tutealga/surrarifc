import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalProducts} = useCartContext();

  if(totalProducts()){
    return (
      <>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{totalProducts()}</span>
      </> 
    );
  }
  
}

export default CartWidget;