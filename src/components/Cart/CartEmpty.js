import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './Cart.css'

const CartEmpty = () =>{
    return(
        <Container>
    <p>No hay productos en el carrito</p>
    <Link className="pt-1" id="goBuy" to='/'>Ir a comprar</Link>
    </Container>
    );
}

export default CartEmpty;