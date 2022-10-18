import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import banner from '../../assets/asd.jpg'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useLastResultContext } from '../Results/ResultContext';
import Results from '../Results/Results'

const ItemListContainer = ({clase}) => {
const [products, setProducts] = useState([]);
const {id} = useParams();

const {lastResult} = useLastResultContext();

useEffect(() => {
const querydb = getFirestore();
const queryCollection = collection(querydb, 'productos');
if (id) {
  const queryFilter = query(queryCollection, where('category', '==', id))
  getDocs(queryFilter)
  .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
} else{
  getDocs(queryCollection)
  .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
}
}, [id])

  return (
    <>
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
    <Container id="divProduct" className="divProduct">
        <ItemList products={products}/>
    </Container>
    </>
  );
}

export default ItemListContainer;