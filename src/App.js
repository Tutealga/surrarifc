import './App.css';
import NavBar from './components/Header/NavBar';
import React from 'react'
import CardComponent from './components/CardComponent/CardComponent';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
 render(){
  return(
   <div>
    <NavBar />
    <h1>Surrari F.C</h1>
    <Container style={{display:'flex'}}>
      <CardComponent 
      posicion='Portero'
      nombre='Ignacio Terra Brandes'
      numero='23'
      img='./components/CardComponent/card-season23.png'
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Mateo Algañaras'
      numero='21'
      img=''
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Sergio Jerez'
      numero='9'
      img=''
      />
      <CardComponent 
      posicion='Delantero'
      nombre='Francisco Mediavilla'
      numero='10'
      img=''
      />
    </Container>
   </div>
  );
 }
}

export default App;