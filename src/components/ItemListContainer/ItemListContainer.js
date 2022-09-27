import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import banner from '../../assets/asd.jpg'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ({title, clase}) => {
const [info, setInfo] = useState([]);
const {id} = useParams();

useEffect(() => {
const querydb = getFirestore();
const queryCollection = collection(querydb, 'productos');
if (id) {
  const queryFilter = query(queryCollection, where('category', '==', id))
  getDocs(queryFilter)
  .then(res => setInfo(res.docs.map(product => ({id: product.id, ...product.data() }))))
} else{
  getDocs(queryCollection)
  .then(res => setInfo(res.docs.map(product => ({ id: product.id, ...product.data() }))))
}
}, [id])

  return (
    <>
    <div className={clase} style={{ display:"none"}}>
      <div className="banner">
        <img src={banner}></img>
      </div>
      <div className="banner2">
      <h1 className="titlePrincipal">{title}</h1>
      </div>
    </div>
    <Container id="divProduct" className="divProduct">
        <ItemList info={info}/>
    </Container>
    </>
  );
}

export default ItemListContainer;