import Results from './Results.js'

const ResultsList = ({results}) => {
    return(
      results.map(results => <Results key={results.id} results={results}/>)
    );
}

export default ResultsList;