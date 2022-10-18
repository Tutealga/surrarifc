import '../Team.css'
import {useState, useEffect} from 'react'
import PlayerList from '../PlayerList/PlayerList'
import { Container } from 'react-bootstrap';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const PlayerListContainer = ({rol, title}) => {
const [player, setPlayer] = useState([]);

useEffect(() => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'jugadores');
  const queryFilter = query(queryCollection, where('rol', '==', rol))
  getDocs(queryFilter)
  .then(res => setPlayer(res.docs.map(player => ({id: player.id, ...player.data() }))))
  }, [])

  return (
    <>
    <h2 className="titlePosition">{title}</h2>
    <Container className="divProduct">
    <PlayerList player={player}/>
   </Container>
    </>
  );
}

export default PlayerListContainer;