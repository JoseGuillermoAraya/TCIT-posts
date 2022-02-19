import React from 'react'

const AddBar = (props) => { 
  const handleClick = (e) => {
  }
  return (<div className='AddBar'>
      <input type="text" name="nombreInput" placeholder='Nombre' />
      <input type="text" name="descrInput" placeholder='Descripción' />
      <button onClick={handleClick}>Crear</button>
  </div>)
}
export default AddBar