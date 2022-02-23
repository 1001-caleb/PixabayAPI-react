import { useState } from 'react'
import { Component } from 'react/cjs/react.development'
import './App.css'
import Buscador from './components/Buscador'

class App extends Component {

  state ={
    termino: ""
  }

  consultarApi = () =>{
    const url = `https://pixabay.com/api/?key=25849559-be94efa9db328b81fed769120&q=${this.state.termino}`; 
    console.log(url);
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
        {this.state.termino}
      </div>
      
    )
  }
  }


export default App
