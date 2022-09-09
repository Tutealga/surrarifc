import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import background1 from '../Plantilla/CardComponent/card-season23.png'
import background2 from '../Plantilla/CardComponent/card-season22.png'
import background3 from '../Plantilla/CardComponent/pantalon.png'
import background4 from '../Plantilla/CardComponent/pantalon2.png'
import background5 from '../Plantilla/CardComponent/card-season24.png'
import background6 from '../Plantilla/CardComponent/pantalon3.png'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import banner from '../asd.jpg'

const productos = [
  {id:1, title:"Camiseta", category: 'camiseta', price:7000, pictureUrl:background1},
  {id:2, title:"Camiseta portero", category: 'camiseta', price:6500, pictureUrl:background2},
  {id:3, title:"Pantalon negro", category: 'pantalon', price:7000, pictureUrl:background3},
  {id:4, title:"Pantalon blanco", category: 'pantalon', price:6000, pictureUrl:background4},
  {id:5, title:"Camiseta suplente", category: 'camiseta', price:6500, pictureUrl:background5},
  {id:6, title:"Pantalon rojo", category: 'pantalon', price:6000, pictureUrl:background6},
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
    <Container id="divProduct" className="divProduct">
        <ItemList info={informacion}/>
    </Container>
    </>
  );
}

export default ItemListContainer;