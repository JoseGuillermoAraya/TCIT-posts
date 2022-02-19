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
    setDescr: (state, action) => { state.descr = action.payload },
    clearInputs: (state) => {
      state.descr = ''
      state.nombre = ''
    }
  },
})
export const {setName, setDescr, clearInputs} = inputSlice.actions
export default inputSlice.reducer