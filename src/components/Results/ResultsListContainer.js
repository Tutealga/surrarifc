import {Container} from 'react-bootstrap';
import ResultsList from './ResultsList';
import { useLastResultContext } from '../Results/ResultContext';
import Results from './Results';

const ResultsListContainer = () => {
const {lastResult, results} = useLastResultContext();

  return (
    <>
    <Container>
       <h6>ÚTIMO PARTIDO</h6>
       <Results results={lastResult} />
       <h6>RESULTADOS</h6>
       <ResultsList results={results} />
    </Container>
    </>
  );
}

export default ResultsListContainer;