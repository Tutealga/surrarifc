import { Container } from 'react-bootstrap';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Banner from '../Banner/Banner';
import Loader from '../Spinner/Spinner';

const ItemListContainer = ({clase}) => {
const [products, setProducts] = useState([]);
const {id} = useParams();

const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
const querydb = getFirestore();
const queryCollection = collection(querydb, 'productos');

const set = res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() })));

if (id) {
  const queryFilter = query(queryCollection, where('category', 'array-contains', id))
  getDocs(queryFilter)
  .then(set)
} else{
  getDocs(queryCollection)
  .then(set)
}

setIsLoading(false);

}, [id])

  return (
    <>
    <Banner clase={clase}/>
    <Container id="divProduct" className="divProduct">
       {isLoading ? <Loader /> : <ItemList products={products}/>} 
    </Container>
    </>
  );
}

export default ItemListContainer;