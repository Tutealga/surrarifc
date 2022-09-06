import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import Plantilla from './components/Plantilla/Plantilla'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return(
   <>
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path='/' element={<ItemListContainer title="Tienda oficial de Surrari F.C"/>}/>
   <Route path='/category/:id' element={<ItemListContainer />}/>
   <Route path='/detail/:id' element={<ItemDetailContainer />}/>
   <Route path='/plantilla' element={<Plantilla />}/> 
   </Routes>
  <Footer />
   </BrowserRouter> 
   </>
  );
}

export default App;