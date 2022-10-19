import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Order = ({orderId}) => {
    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <h1 class="text-center">¡Gracias por su compra!</h1>
                <p className="px-3">Su número de orden es: <span className='fw-bold text-warning'>{orderId}</span></p>
                <p className="px-3">Estará recibiendo su pedido dentro de los próximos 5 días hábiles.</p>
                <Link id="goBuy" to='/'>Volver al inicio</Link>
            </Container>
        </section>
    );
}

export default Order;