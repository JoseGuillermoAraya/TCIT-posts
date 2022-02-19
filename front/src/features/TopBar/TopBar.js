import React from 'react'

const TopBar = (props) => {
  return <div className='topBar'>
      <input type="text" name="filtroNombre" placeholder='Filtro de Nombre'/>
      <button>Buscar</button>
  </div>
}
export default TopBar