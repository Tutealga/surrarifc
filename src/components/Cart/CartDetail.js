import { Container, Button, Form } from 'react-bootstrap';
import ItemCart from '../ItemCart/ItemCart'
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import './Cart.css'

const CartDetail = () =>{
    const {cart, totalPrice} = useCartContext();

    const [buyer, setBuyer] = useState(initialBuyer);

    const initialBuyer = {
        name: '',
        phone: '',
        email:'',
        direction: ''
    }
    
    const order = {
    items:cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total:totalPrice(),
    }
    
    const inputsValue = (e) =>{
      const {name, value} = e.target;
      setBuyer({...buyer, [name]:value});
    }
    
    const checkout = async(e) =>{
      const db = getFirestore();
      e.preventDefault();
      const docRef = await addDoc(collection(db, 
        'orders'), { 
          buyer, 
          ...order 
        });
      setBuyer({...initialBuyer});
      alert('Su numero de compra es: ' + docRef.id);
    }

    return(
        <Container>
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p id="total" className="text-center">
      Total: ${totalPrice()}
    </p>
    <Form onSubmit={checkout}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="name" type="text" placeholder="Nombre y Apellido" onChange={inputsValue} value={buyer.name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="phone" type="text" placeholder="Numero de contacto" onChange={inputsValue} value={buyer.phone}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="email" type="email" placeholder="Correo electronico" onChange={inputsValue} value={buyer.email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="direction" type="text" placeholder="Direccion de entrega" onChange={inputsValue} value={buyer.direction}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
    </Container>
    );
}

export default CartDetail;
