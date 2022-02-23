import { useState } from 'react'
import { Component } from 'react/cjs/react.development'
import './App.css'
import Buscador from './components/Buscador'

class App extends Component {

  datosBusqueda = (termino)=>{
    console.log(termino);
  }

  render(){
    return (
      <div className="container">
        <h1 className='text-center'>Pixabay API</h1>
        <div className="jumbotron">
         <p className="lead text-center">Buscador de imagenes</p>
        </div>
  
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
      </div>
    )
  }
  }


export default App
