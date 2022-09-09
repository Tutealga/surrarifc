import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import background1 from '../Plantilla/CardComponent/card-season23.png'
import background2 from '../Plantilla/CardComponent/card-season22.png'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import banner from '../asd.jpg'

const productos = [
  {id:1, title:"Camiseta", category: 'jugador', price:7000, pictureUrl:background1},
  {id:2, title:"Camiseta portero", category: 'portero', price:6500, pictureUrl:background2},
];

const ItemListContainer = ({title, clase}) => {
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
    <div className={clase} style={{ display:"none"}}>
      <div className="banner">
        <img src={banner}></img>
      </div>
      <div className="banner2">
      <h1 className="titlePrincipal">{title}</h1>
      </div>
    </div>
    <Container className="divProduct">
        <ItemList info={informacion}/>
    </Container>
    </>
  );
}

export default ItemListContainer;