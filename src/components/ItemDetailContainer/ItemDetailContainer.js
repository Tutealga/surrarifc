import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import Loader from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
 const querydb = getFirestore();
 const queryDoc = doc(querydb, 'productos', id);
 getDoc(queryDoc)
 .then(res => setItem({ id: res.id, ...res.data() }));
 setIsLoading(false);
}, [])

    return(
    <>
    {isLoading ? <Loader /> : <ItemDetail key={item.id} item={item}/>} 
    </>  
    );
}

export default ItemDetailContainer;
