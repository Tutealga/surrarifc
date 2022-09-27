import './App.css';
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Plantilla from './components/Plantilla/Plantilla';
import ResultadosListContainer from './components/Resultados/ResultadosListContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart'

const App = () => {
  return(
   <>
   <BrowserRouter>
    <CartProvider>
     <NavBar />
     <Routes>
      <Route path='/' element={<ItemListContainer clase="d-block d-flex mb-5" title="Tienda oficial de Surrari F.C"/>}/>
      <Route path='/category/:id' element={<ItemListContainer />}/>
      <Route path='/detail/:id' element={<ItemDetailContainer />}/>
      <Route path='/plantilla' element={<Plantilla />}/> 
      <Route path='/resultados' element={<ResultadosListContainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='*' element={<Navigate to={"/"}/>}/>
     </Routes> 
     </CartProvider>
     <Footer />
   </BrowserRouter> 
   </>
  );
}

export default App;