import React, {useState, useContext} from 'react';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) =>{

const [carrito, setCarrito] = useState([]);

console.log('Carrito: ', carrito);

const addItem = (item, quantity) =>{
    if(isInCart(item.id)){
        setCarrito(carrito.map(producto => {
            return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity} : producto
        }));
    } else{
        setCarrito([...carrito, {...item, quantity}]);
    }
}

const totalPrice = () =>{
    return carrito.reduce((prev, act) => prev + act.quantity * act.price, 0);
}

const totalProducts = () => carrito.reduce((prev, act) => prev + act.quantity,0);

const clear = () => setCarrito([]);

const isInCart = (id) => carrito.find(producto => producto.id === id) ? true : false;

const removeItem = (id) => setCarrito(carrito.filter(producto => producto.id !== id));
  
    return (
<CartContext.Provider value={{
    clear, 
    isInCart, 
    removeItem, 
    addItem,
    totalPrice,
    totalProducts,
    carrito
    }}>
  {children}
</CartContext.Provider>
    );
}

export default CartProvider;