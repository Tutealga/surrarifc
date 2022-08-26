import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';

class App extends React.Component {
 render(){
  return(
   <div>
    <NavBar />
    <ItemListContainer 
    title='Sitio Oficial de Surrari F.C'
    />
   </div>
  );
 }
}

export default App;