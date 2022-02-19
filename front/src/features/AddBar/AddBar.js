import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../Posts/postSlice'
import { clearInputs, setDescr, setName } from './addSlice'
const AddBar = (props) => { 
  const dispatch = useDispatch()
  const nombre = useSelector(state => state.inputs.nombre)
  const descr = useSelector(state => state.inputs.descr)
  const newPost = useSelector(state => state.posts.newPost)
  
  const handleClick = (nombre, descr) => {
    dispatch(createPost({ nombre: nombre, descripcion: descr }))
    dispatch(clearInputs())
  }
  console.log(newPost)
  return (<div className='AddBar'>
      <input type="text" name="nombreInput" placeholder='Nombre' value={nombre} onChange={(e)=>{dispatch(setName(e.target.value))}} />
      <input type="text" name="descrInput" placeholder='Descripción' value={descr} onChange={(e)=>{dispatch(setDescr(e.target.value))}}/>
      <button onClick={()=>handleClick(nombre, descr)}>Crear</button>
  </div>)
}
export default AddBar