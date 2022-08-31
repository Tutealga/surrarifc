import {Container} from 'react-bootstrap';
import Delantero from './Delantero/delantero';
import './Plantilla.css'
import Mediocampista from './Mediocampista/mediocampista';
import Portero from './Portero/portero';
import Defensa from './Defensa/defensa';

const Plantilla = ({}) => {
  return (
    <Container>
        <Portero title={'Porteros'} />
        <Defensa title={'Defensas'}/>
        <Mediocampista title={'Centrocampistas'}/>
        <Delantero title={'Delanteros'}/>
    </Container>
  );
}

export default Plantilla;