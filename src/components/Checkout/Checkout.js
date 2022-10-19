import { Button, Form, Container } from 'react-bootstrap';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import '../Cart/Cart.css'
import Order from '../Order/Order'

const Checkout = () =>{
    const {cart, totalPrice, clear} = useCartContext();

    const initialBuyer = {
        name: '',
        phone: '',
        email:'',
        direction: ''
    }
  
      const [buyer, setBuyer] = useState(initialBuyer);
      const [orderId, setOrderId] = useState();
  
      const order = {
      items:cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
      total:totalPrice(),
      }
      
      const inputsValue = (e) =>{
        const {name, value} = e.target;
        setBuyer({...buyer, [name]:value});
      }
      
      const checkout = (e) =>{
        const db = getFirestore();
        e.preventDefault();
        const docRef = collection(db, 'orders');
        addDoc(docRef, {buyer, ...order})
        .then(({id}) =>{
          setOrderId(id);
          clear();
          })
      }

return(
  <>
  {
    orderId
    ?
    <Order orderId={orderId}/>
    :
    <Container>
    <h1 class="text-center">Finalizar compra</h1>
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
      <Button id="goBuy" variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
  </Container>
  } 
  </>
);
}

export default Checkout;