import {createContext, useEffect, useState, useContext} from 'react';
import losrompe from '../../assets/escudos/losrompe.png'
import laresaka from '../../assets/escudos/laresaka.png'
import realplax from '../../assets/escudos/realplax.png'
import sinescudo from '../../assets/escudos/sinescudo.png'

export const LastResultContext = createContext([]);

export const useLastResultContext = () => useContext(LastResultContext);

const result = [
    {id:4, rival:'TURIN FC', goals:2, goalsAgainst:4, date:'DOMINGO 11 DE SEPTIEMBRE 2022', shieldRival:sinescudo},
    {id:3, rival:'REAL PLAX', goals:1, goalsAgainst:3, date:'DOMINGO 4 DE SEPTIEMBRE 2022', shieldRival:realplax},
    {id:2, rival:'LA RESAKA FC', goals:0, goalsAgainst:6, date:'DOMINGO 28 DE AGOSTO 2022', shieldRival:laresaka},
    {id:1, rival:'LOS ROMPE', goals:2, goalsAgainst:4, date:'DOMINGO 21 DE AGOSTO 2022', shieldRival:losrompe}, 
  ];

const LastResultProvider = ({ children }) =>{
 const [lastResult, setLastResult] = useState([]);
 const [results, setResults] = useState([]);

 const last = result.reduce((prev, current) => (+prev.id > +current.id) ? prev : current);

useEffect(() => {
  const getResults = new Promise(resolve => {
  resolve(result)
  });
    getResults.then(res => setResults(res.filter(res => res.id !== last.id)));
  }, []);

 useEffect(() => {
    const getLastResult = new Promise(resolve => {
    resolve(result)
    });
      getLastResult.then(res => setLastResult(res.reduce((prev, current) => (+prev.id > +current.id) ? prev : current)));
    }, [])

    return (
<LastResultContext.Provider value={{
      results,
      lastResult,
    }}>
  {children}
</LastResultContext.Provider>
    );
}

export default LastResultProvider;