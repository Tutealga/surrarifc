import surrari from '../../assets/escudos/surrari.png'
import './Results.css'

const Results = ({results}) => {
  return (
      <div className="results">
        <span className="matchDate"><time>{results.date}</time></span>
        <div className="resultDiv">
          <div className="team1">
           <p className="teamName">SURRARI F.C</p>
           <img className="shield" alt="Surrari" src={surrari}></img>
           <p className="goals">{results.goals}</p>
          </div>
          <div className="team2">
          <p className="goalsAgainst">{results.goalsAgainst}</p>
          <img className="shield" alt="Escudo rival" src={results.shieldRival}></img>
            <p className="teamName">{results.rival}</p>
          </div>
        </div>
      </div>
  );
}

export default Results;