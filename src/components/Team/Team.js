import { Container } from 'react-bootstrap';
import './Team.css'
import PlayerListContainer from './PlayersListContainer/PlayerListContainer';

const Team = () => {
  return (
    <Container>
        <PlayerListContainer title={'Porteros'} rol={"portero"}/>
        <PlayerListContainer title={'Defensas'} rol={"defensa"}/>
        <PlayerListContainer title={'Centrocampistas'} rol={"mediocampista"}/>
        <PlayerListContainer title={'Delanteros'} rol={"delantero"}/>
    </Container>
  );
}

export default Team;