import CardJugador from '../CardComponent/CardJugador'

const PlayerList = ({info}) =>{
return (
    info.map(player => <CardJugador key={player.id} info={player}/>)    
 );
}

export default PlayerList;