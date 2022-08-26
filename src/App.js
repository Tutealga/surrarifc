import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends React.Component {
 render(){
  return(
   <div>
    <NavBar />
    <ItemListContainer 
    />
   </div>
  );
 }
}

export default App;