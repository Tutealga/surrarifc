import '../Plantilla.css'
import React, {useState, useEffect} from 'react'
import CamisetaRoja from '../../../assets/productos/card-season23.png'
import CamisetaNegra from '../../../assets/productos/card-season22.png'
import PlayerList from '../PlayerList/PlayerList'
import { Container } from 'react-bootstrap';

const jugadores = [
  {id:1,rol:"portero",number:23, name:"Ignacio Terra Brandes", position:"PORTERO", img:(CamisetaNegra)},
  {id:2,rol:"defensa",number:11, name:"Santiago Locatelli", position:"DEFENSA", img:(CamisetaRoja)},
  {id:3,rol:"defensa",number:4, name:"Mateo Fraga", position:"DEFENSA CENTRAL", img:(CamisetaRoja)},
  {id:4,rol:"defensa",number:27, name:"Iñaki Mena", position:"DEFENSA", img:(CamisetaRoja)},
  {id:5,rol:"defensa",number:17, name:"Santiago Fraga", position:"DEFENSA", img:(CamisetaRoja)},
  {id:5,rol:"defensa",number:14, name:"Federico Balduino", position:"DEFENSA CENTRAL", img:(CamisetaRoja)},
  {id:6,rol:"mediocampista",number:19, name:"Ignacio Mieres", position:"MEDIAPUNTA", img:(CamisetaRoja)},
  {id:7,rol:"mediocampista",number:12, name:"Nicolas Ortiz", position:"CENTROCAMPISTA", img:(CamisetaRoja)},
  {id:8,rol:"mediocampista",number:5, name:"Joaquin Mieres", position:"MEDIOCENTRO DEFENSIVO", img:(CamisetaRoja)},
  {id:9,rol:"mediocampista",number:8, name:"Gonzalo Cafiero", position:"MEDIAPUNTA", img:(CamisetaRoja)},
  {id:10,rol:"mediocampista",number:80, name:"Augusto Lopez", position:"CENTROCAMPISTA", img:(CamisetaRoja)},
  {id:11,rol:"delantero",number:21, name:"Mateo Algañaras", position:"DELANTERO", img:(CamisetaRoja)},
  {id:12,rol:"delantero",number:9, name:"Sergio Jerez", position:"DELANTERO CENTRO", img:(CamisetaRoja)},
  {id:13,rol:"delantero",number:10, name:"Francisco Mediavilla", position:"DELANTERO CENTRO", img:(CamisetaRoja)},
];

const PlayerListContainer = ({rol, title}) => {
const [informacion, setInformacion] = useState([]);

useEffect(() => {
const getInformacion = new Promise(resolve => {
resolve(jugadores)
});
  getInformacion.then(res => setInformacion(res.filter(jugador => jugador.rol === rol )));
}, [])

  return (
    <>
    <h2 className="titlePosicion">{title}</h2>
    <Container className="divProduct">
    <PlayerList info={informacion}/>
   </Container>
    </>
  );
}

export default PlayerListContainer;