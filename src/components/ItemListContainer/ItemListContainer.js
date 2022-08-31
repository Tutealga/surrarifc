import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import CardProduct from '../CardComponent/CardProduct';
import background1 from '../CardComponent/card-season23.png'
import background2 from '../CardComponent/card-season22.png'

const ItemListContainer = () => {
  return (
    <Container className="divProduct">
        <CardProduct initial={1} stock={0} img={background1} price={7500} nombre="Camiseta"/>
        <CardProduct initial={1} stock={9} img={background2} price={6500} nombre="Camiseta portero"/>
    </Container>
  );
}

export default ItemListContainer;