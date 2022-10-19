import { Container} from 'react-bootstrap';
import ItemCart from '../ItemCart/ItemCart';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const CartDetail = () =>{
    const {cart, totalPrice} = useCartContext();

    return(
        <Container class="align-items-center">
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p id="total" className="text-center">
      Total: ${totalPrice()}
    </p>
    <Link id="goBuy" to='/checkout'>Finalizar compra</Link>
    </Container>
    );
}

export default CartDetail;
