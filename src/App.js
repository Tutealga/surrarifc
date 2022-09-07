import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Plantilla from './components/Plantilla/Plantilla';

const App = () => {
  return(
   <>
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path='/' element={<ItemListContainer title="Tienda oficial de Surrari F.C"/>}/>
   <Route path='/categoria/:id' element={<ItemListContainer />}/>
   <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
   <Route path='/plantilla' element={<Plantilla />}/> 
   <Route path='*' element={<Navigate to={"/"}/>}/>
   </Routes>
  <Footer />
   </BrowserRouter> 
   </>
  );
}

export default App;