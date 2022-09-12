import Resultados from './Resultados.js'

const ResultadosList = ({info}) => {
    return(
      info.map(resultados => <Resultados key={resultados.id} info={resultados}/>)
    );
}

export default ResultadosList;