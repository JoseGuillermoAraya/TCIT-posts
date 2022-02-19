import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from './topSlice'

const TopBar = (props) => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  console.log("filter: ", filter)
  return <div className='topBar'>
      <input type="text" name="filtroNombre" placeholder='Filtro de Nombre' value={filter} onChange={(e)=>{dispatch(setFilter(e.target.value))}}/>
      <button>Buscar</button>
  </div>
}
export default TopBar