import { useState } from 'react'
import { Component } from 'react/cjs/react.development'
import './App.css'
import Buscador from './components/Buscador'
import Result  from './components/result'

class App extends Component {

  state ={
    termino: "",
    imagenes: []
  }

  consultarApi = () =>{
    const termino = this.state.termino
    const url = `https://pixabay.com/api/?key=25849559-be94efa9db328b81fed769120&q=${termino}&per_page=30`; 

    // console.log(url);

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino)=>{
    this.setState({
      termino
    }, ()=>{
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="container">
        <h1 className='text-center'>Pixabay API</h1>
        <div className="jumbotron">
         <p className="lead text-center">Buscador de imagenes</p>

         <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
        </div>
        <Result 
          imagenes ={this.state.imagenes}
        />
      </div>
      
    )
  }
  }


export default App
