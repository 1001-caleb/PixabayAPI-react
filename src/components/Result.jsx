import React, { Component } from 'react'
import Images from './Images'
import Pagination from './Pagination';
class Result extends Component{
    
    mostrarImagenes = ()=>{
        const imagenes = this.props.imagenes;
       
        if(imagenes.length === 0) return null;
        console.log(imagenes);

        return(
            <React.Fragment>
            <Pagination 
            paginaAnterior = {this.props.paginaAnterior}
            paginaSiguiente = {this.props.paginaSiguiente}
            />
             <div className="col-12 p-5 row">
                {imagenes.map(imagen =>(
                    <Images
                        key={imagen.id}
                        images = {imagen}
                    />
                ))}
             </div>

            </React.Fragment>
        )
    }

    render(){
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>

        );

    }
}

export default Result;