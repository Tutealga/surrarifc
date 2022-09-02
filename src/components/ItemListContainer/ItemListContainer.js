import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import background1 from '../CardComponent/card-season23.png'
import background2 from '../CardComponent/card-season22.png'
import React, {useState, useEffect} from 'react'

const productos = [
  {id:1, title:"Camiseta", description:"Camiseta principal de jugador", price:7500, pictureUrl:background1, initial:1, stock:0},
  {id:1, title:"Camiseta portero", description:"Camiseta principal de portero", price:6500, pictureUrl:background2, initial:1, stock:8},
];

const ItemListContainer = () => {
const [informacion, setInformacion] = useState([]);

useEffect(() => {
const getInformacion = new Promise(resolve => {
  setTimeout(() =>{
resolve(productos)
  },2000);
});
getInformacion.then(res => setInformacion(res));
}, [])

  return (
    <Container className="divProduct">
        <ItemList info={informacion}/>
    </Container>
  );
}

export default ItemListContainer;