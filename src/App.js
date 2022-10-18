import './App.css';
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Team from './components/Team/Team';
import ResultsListContainer from './components/Results/ResultsListContainer';
import CartProvider from './context/CartContext';
import LastResultProvider from './components/Results/ResultContext';
import Cart from './components/Cart/Cart';

const App = () => {
  return(
   <>
   <BrowserRouter>
    <CartProvider>
     <NavBar />
     <LastResultProvider>
     <Routes>
      <Route path='/' element={<ItemListContainer clase="d-block d-flex mb-5" />}/>
      <Route path='/category/:id' element={<ItemListContainer />}/>
      <Route path='/detail/:id' element={<ItemDetailContainer />}/>
      <Route path='/team' element={<Team />}/> 
      <Route path='/results' element={<ResultsListContainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='*' element={<Navigate to={"/"}/>}/>
     </Routes> 
     </LastResultProvider>
     </CartProvider>
     <Footer />
   </BrowserRouter> 
   </>
  );
}

export default App;