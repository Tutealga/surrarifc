import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'

class App extends React.Component {
 render(){
  return(
   <div>
    <NavBar />
    <ItemListContainer />
  <Footer />
   </div>
  );
 }
}

export default App;