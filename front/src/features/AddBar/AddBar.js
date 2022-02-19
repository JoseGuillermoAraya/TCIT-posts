import React from 'react'

const AddBar = (props) => { 
  return (<div className='AddBar'>
    <form>
      <input type="text" name="nombreInput" placeholder='Nombre' />
      <input type="text" name="descrInput" placeholder='Descripción' />
      <button>Crear</button>
    </form>
  </div>)
}
export default AddBar