import React from 'react'

const TopBar = (props) => {
  return <div className='topBar'>
    <form>
      <input type="text" name="filtroNombre" />
      <button>Buscar</button>
    </form>
  </div>
}
export default TopBar