import {createContext, useContext} from 'react';

import { useLocalStorage } from '../components/LocalStorage/LocalStorage';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) =>{
const [cart, setCart] = useLocalStorage("cart", []);

const addItem = (item, quantity) =>{
    {
    isInCart(item.id)
    ?
    setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
    }))
    :
    setCart([...cart, {...item, quantity}]);
}};

const totalPrice = () =>{
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
};

const totalProducts = () => cart.reduce((prev, act) => prev + act.quantity,0);

const clear = () => setCart([]);

const sumProduct = (id) => {
    const newCart = cart.map((product) =>{
        return product.id === id ? {...product, quantity: product.quantity +1 } : product;
    });
    setCart(newCart);
};

const restProduct = (id) => {
    const newCart = cart.map((product) =>{
        return product.id === id ? {...product, quantity: product.quantity - 1 } : product;
    });
    setCart(newCart);
};

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
  
    return (
<CartContext.Provider value={{
    clear, 
    isInCart, 
    removeItem, 
    addItem,
    totalPrice,
    totalProducts,
    sumProduct,
    restProduct,
    cart
    }}>
  {children}
</CartContext.Provider>
    );
}

export default CartProvider;