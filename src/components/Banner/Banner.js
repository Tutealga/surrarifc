import banner from '../../assets/asd.jpg';
import Results from '../Results/Results';
import './Banner.css';
import { useLastResultContext } from '../Results/ResultContext';

const Banner = ({clase}) => {

    const {lastResult} = useLastResultContext();

    return (
        <div className={clase} style={{ display:"none"}}>
      <div className="banner">
        <img src={banner}></img>
      </div>
      <div className="banner2">
      <h1 className="titlePrincipal">Tienda oficial de Surrari F.C</h1>
      <div className="banner3">
      <Results results={lastResult} />
      </div>
      </div>
    </div>
    );
}

export default Banner;