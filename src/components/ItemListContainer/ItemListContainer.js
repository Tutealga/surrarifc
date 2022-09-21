import {Container} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import CamisetaRoja from '../../assets/productos/card-season23.png'
import CamisetaNegra from '../../assets/productos/card-season22.png'
import PantalonNegro from '../../assets/productos/pantalon.png'
import PantalonBlanco from '../../assets/productos/pantalon2.png'
import CamisetaAmarilla from '../../assets/productos/card-season24.png'
import PantalonRojo from '../../assets/productos/pantalon3.png'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import banner from '../../assets/asd.jpg'

const productos = [
  {id:1, title:"Camiseta", category: 'camiseta', price:7000, pictureUrl:CamisetaRoja},
  {id:2, title:"Camiseta portero", category: 'camiseta', price:6500, pictureUrl:CamisetaNegra},
  {id:3, title:"Pantalon negro", category: 'pantalon', price:7000, pictureUrl:PantalonNegro},
  {id:4, title:"Pantalon blanco", category: 'pantalon', price:6000, pictureUrl:PantalonBlanco},
  {id:5, title:"Camiseta suplente", category: 'camiseta', price:6500, pictureUrl:CamisetaAmarilla},
  {id:6, title:"Pantalon rojo", category: 'pantalon', price:6000, pictureUrl:PantalonRojo},
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