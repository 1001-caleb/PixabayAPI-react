import { useState } from 'react'
import './App.css'
import Buscador from './components/Buscador'

function App() {
  return (
    <div className="container">
      <h1 className='text-center'>Pixabay API</h1>
      <div className="jumbotron">
       <p className="lead text-center">Buscador de imagenes</p>
      </div>

      <Buscador />
    </div>
  )
}

export default App
