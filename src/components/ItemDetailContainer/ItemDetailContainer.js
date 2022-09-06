import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import background1 from '../CardComponent/card-season23.png'
import background2 from '../CardComponent/card-season22.png'

const productos = [
    {id:1, title:"Camiseta", description:"Camiseta principal de jugador", price:7000, pictureUrl:background1, initial:1, stock:3},
    {id:2, title:"Camiseta portero", description:"Camiseta principal de portero", price:6500, pictureUrl:background2, initial:1, stock:8},
  ];

const ItemDetailContainer = () => {
    const [informacion, setInformacion] = useState({});
    console.log(informacion)
    const {id} = useParams();

useEffect(() => {
const getInformacion = new Promise(resolve => {
  setTimeout(() =>{
resolve(productos)
  },2000);
});
  getInformacion.then(res => setInformacion(res.find(producto => producto.id == id)));
}, [])

    return(
      <>
      <ItemDetail key={informacion.id} info={informacion}/>
      </> 
    );
}

export default ItemDetailContainer;
