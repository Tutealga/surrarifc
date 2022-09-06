import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import background1 from '../CardComponent/card-season23.png'
import background2 from '../CardComponent/card-season22.png'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const productos = [
  {id:1, title:"Camiseta", category: 'jugador', price:7000, pictureUrl:background1},
  {id:2, title:"Camiseta portero", category: 'portero', price:6500, pictureUrl:background2},
];

const ItemListContainer = ({title}) => {
const [informacion, setInformacion] = useState([]);

const {id} = useParams();

useEffect(() => {
const getInformacion = new Promise(resolve => {
  setTimeout(() =>{
resolve(productos)
  },2000);
});
if (id){
  getInformacion.then(res => setInformacion(res.filter(producto => producto.category === id )));
}else{
  getInformacion.then(res => setInformacion(res));
}

}, [id])

  return (
    <>
    <h1 className="tituloprincipal">{title}</h1>
    <Container className="divProduct">
        <ItemList info={informacion}/>
    </Container>
    </>
    
  );
}

export default ItemListContainer;