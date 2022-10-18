import { Card } from 'react-bootstrap';
import './PlayerCard.css'

const PlayerCard = ({ player }) => {
  return (
    <Card id="card" style={{ backgroundImage: `url(${player.img})`}}>
      <Card.Body>
      <Card.Text className="number textColorWhite">{player.number}</Card.Text>
      <Card.Text className="playerPosition">{player.position}</Card.Text>
        <Card.Title className="playerName textColorWhite">{player.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;