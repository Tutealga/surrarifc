import {Container} from 'react-bootstrap';
import './Plantilla.css'
import PlayerListContainer from './PlayersListContainer/PlayerListContainer';

const Plantilla = () => {
  return (
    <Container>
        <PlayerListContainer title={'Porteros'} rol={"portero"}/>
        <PlayerListContainer title={'Defensas'} rol={"defensa"}/>
        <PlayerListContainer title={'Centrocampistas'} rol={"mediocampista"}/>
        <PlayerListContainer title={'Delanteros'} rol={"delantero"}/>
    </Container>
  );
}

export default Plantilla;