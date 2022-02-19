import React from 'react'

const TopBar = (props) => {
  return <div className='topBar'>
    <form>
      <input type="text" name="filtroNombre" placeholder='Filtro de Nombre'/>
      <button>Buscar</button>
    </form>
  </div>
}
export default TopBar