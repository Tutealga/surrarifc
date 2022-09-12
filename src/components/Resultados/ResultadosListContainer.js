import {Container} from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import ResultadosList from './ResultadosList';
import losrompe from './losrompe.png'
import laresaka from './laresaka.png'
import realplax from './realplax.png'
import sinescudo from './sinescudo.png'

const resultados = [
  {id:4, rival:'TURIN FC', golesAFavor:2,golesEnContra:4, fecha:'DOMINGO 11 DE SEPTIEMBRE 2022',escudoRival:sinescudo},
  {id:3, rival:'REAL PLAX', golesAFavor:1,golesEnContra:3, fecha:'DOMINGO 4 DE SEPTIEMBRE 2022',escudoRival:realplax},
  {id:2, rival:'LA RESAKA FC', golesAFavor:0,golesEnContra:6, fecha:'DOMINGO 28 DE AGOSTO 2022',escudoRival:laresaka},
  {id:1, rival:'LOS ROMPE', golesAFavor:2,golesEnContra:4, fecha:'DOMINGO 21 DE AGOSTO 2022',escudoRival:losrompe}, 
];

const ResultadosListContainer = () => {
const [informacion, setInformacion] = useState([]);

useEffect(() => {
const getInformacion = new Promise(resolve => {
resolve(resultados)
});
  getInformacion.then(res => setInformacion(res));
}, [])

  return (
    <>
    <Container>
        <ResultadosList info={informacion}/>
    </Container>
    </>
  );
}

export default ResultadosListContainer;