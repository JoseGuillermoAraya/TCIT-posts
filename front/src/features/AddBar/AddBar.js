import React from 'react'

const AddBar = (props) => { 
  return (<div className='AddBar'>
    <form>
      <input type="text" name="nombreInput" />
      <input type="text" name="descrInput" />
      <button>Crear</button>
    </form>
  </div>)
}
export default AddBar