import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import CamisetaRoja from '../../assets/productos/card-season23.png'
import CamisetaNegra from '../../assets/productos/card-season22.png'
import PantalonNegro from '../../assets/productos/pantalon.png'
import PantalonBlanco from '../../assets/productos/pantalon2.png'
import CamisetaAmarilla from '../../assets/productos/card-season24.png'
import PantalonRojo from '../../assets/productos/pantalon3.png'

const productos = [
    {id:1, title:"Camiseta", description:"Camiseta principal de jugador", price:7000, pictureUrl:CamisetaRoja, initial:1, stock:3},
    {id:2, title:"Camiseta portero", description:"Camiseta principal de portero", price:6500, pictureUrl:CamisetaNegra, initial:1, stock:8},
    {id:3, title:"Pantalon negro", description:"Pantalon principal de jugador y portero", price:7000, pictureUrl:PantalonNegro, initial:1, stock:6},
    {id:4, title:"Pantalon blanco", description:"Pantalon principal de jugador y portero", price:6000, pictureUrl:PantalonBlanco, initial:1, stock:10},
    {id:5, title:"Camiseta suplente", description:"Camiseta suplente de jugador", price:6500, pictureUrl:CamisetaAmarilla, initial:1, stock:4},
    {id:6, title:"Pantalon rojo", description:"Pantalon suplente de jugador y portero", price:6000, pictureUrl:PantalonRojo, initial:1, stock:7},
    
  ];

const ItemDetailContainer = () => {
    const [informacion, setInformacion] = useState({});

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
      <ItemDetail key={informacion.id} info={informacion}/>
    );
}

export default ItemDetailContainer;
