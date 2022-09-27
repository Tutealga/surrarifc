import '../Plantilla.css'
import React, {useState, useEffect} from 'react'
import PlayerList from '../PlayerList/PlayerList'
import { Container } from 'react-bootstrap';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


const PlayerListContainer = ({rol, title}) => {
const [info, setInfo] = useState([]);

useEffect(() => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'jugadores');
  const queryFilter = query(queryCollection, where('rol', '==', rol))
  getDocs(queryFilter)
  .then(res => setInfo(res.docs.map(player => ({id: player.id, ...player.data() }))))
  }, [])

  return (
    <>
    <h2 className="titlePosicion">{title}</h2>
    <Container className="divProduct">
    <PlayerList info={info}/>
   </Container>
    </>
  );
}

export default PlayerListContainer;