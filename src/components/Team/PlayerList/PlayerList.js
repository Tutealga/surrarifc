import PlayerCard from '../PlayerCard/PlayerCard'

const PlayerList = ({player}) =>{
return (
    player.map(player => <PlayerCard key={player.id} player={player}/>)    
 );
}

export default PlayerList;