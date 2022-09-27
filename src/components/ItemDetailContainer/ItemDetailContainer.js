import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [info, setInfo] = useState({});
    const {id} = useParams();

useEffect(() => {
 const querydb = getFirestore();
 const queryDoc = doc(querydb, 'productos', id);
 getDoc(queryDoc)
 .then(res => setInfo({ id: res.id, ...res.data() }))
}, [id])

    return(
      <ItemDetail key={info.id} info={info}/>
    );
}

export default ItemDetailContainer;
