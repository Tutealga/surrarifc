import Container from 'react-bootstrap/Container';
import Delantero from './Delantero/delantero';
import './ItemListContainer.css'
import Mediocampista from './Mediocampista/mediocampista';
import Portero from './Portero/portero';
import Defensa from './Defensa/defensa';

const ItemListContainer = ({}) => {
  return (
    <Container>
        <Portero title={'Porteros'} />
        <Defensa title={'Defensas'}/>
        <Mediocampista title={'Centrocampistas'}/>
        <Delantero title={'Delanteros'}/>
    </Container>
  );
}

export default ItemListContainer;