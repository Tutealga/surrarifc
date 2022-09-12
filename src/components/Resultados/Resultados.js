import surrari from './surrari.png'
import './Resultados.css'

const Resultados = ({info}) => {
  return (
      <div className="resultados">
        <span className="fechaPartido"><time>{info.fecha}</time></span>
        <div className="resultadoDiv">
          <div className="equipo1">
           <p className="nombreEquipo">SURRARI F.C</p>
           <img className="escudo" src={surrari}></img>
           <p className="golesAFavor">{info.golesAFavor}</p>
          </div>
          <div className="equipo2">
          <p className="golesEnContra">{info.golesEnContra}</p>
          <img className="escudo" src={info.escudoRival}></img>
            <p className="nombreEquipo">{info.rival}</p>
          </div>
        </div>
      </div>
  );
}

export default Resultados;