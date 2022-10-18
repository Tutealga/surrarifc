import { Container } from 'react-bootstrap';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Banner from '../Banner/Banner';

const ItemListContainer = ({clase}) => {
const [products, setProducts] = useState([]);
const {id} = useParams();

useEffect(() => {
const querydb = getFirestore();
const queryCollection = collection(querydb, 'productos');
if (id) {
  const queryFilter = query(queryCollection, where('category', 'array-contains', id))
  getDocs(queryFilter)
  .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
} else{
  getDocs(queryCollection)
  .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
}
}, [id])

  return (
    <>
    <Banner clase={clase}/>
    <Container id="divProduct" className="divProduct">
        <ItemList products={products}/>
    </Container>
    </>
  );
}

export default ItemListContainer;