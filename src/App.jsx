import { useState } from 'react'
import { Component } from 'react/cjs/react.development'
import './App.css'
import Buscador from './components/Buscador'
import Result  from './components/Result'

class App extends Component {

  state ={
    termino: "",
    imagenes: [],
    pagina: ""
  }

  paginaAnterior = ()=>{
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina-= 1;

    this.setState({
      pagina
    }, 
    () => {this.consultarApi();}
    );
    
  }
  paginaSiguiente = ()=>{
    //leer el state de la pag actual y sumar y agregar el cambio al state
    let pagina = this.state.pagina;
    pagina+= 1;

    this.setState({
      pagina
    }, 
    () => {this.consultarApi();}
    );
    
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=25849559-be94efa9db328b81fed769120&q=${termino}&per_page=30&page=${pagina}`; 

    // console.log(url);

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino)=>{
    this.setState({
      termino: termino,
      pagina: 1
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
        <div className="row justify-content-center">
        <Result 
          imagenes ={this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}
        />
        </div>

      </div>
      
    )
  }
  }


export default App
