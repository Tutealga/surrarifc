import CardJugador from '../CardComponent/CardJugador'

const PlayerList = ({info}) =>{
return (
    info.map(jugadores => <CardJugador key={jugadores.id} info={jugadores}/>)    
 );
}

export default PlayerList;