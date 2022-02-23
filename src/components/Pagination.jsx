import React from 'react'

const Pagination = props =>{
    return(
        <div className="py-3">
        <ul className="pagination pagination-lg">
    <li className="page-item">
      <button onClick={props.paginaAnterior} className="page-link" href="#">&laquo; Anterior</button>
    </li>
    <li className="page-item">
      <button onClick={props.paginaSiguiente} className="page-link" href="#">&raquo; Siguiente</button>
    </li>
  </ul>
</div>
       
  
        
    )
}

export default Pagination