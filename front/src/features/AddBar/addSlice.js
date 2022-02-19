import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nombre: '',
  descr: '',
}

const inputSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.nombre = action.payload
    },
    setDescr: (state, action) => { state.descr = action.payload }
  },
})
export const {setName, setDescr} = inputSlice.actions
export default inputSlice.reducer