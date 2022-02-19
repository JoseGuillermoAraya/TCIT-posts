import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter:''
}

const topSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    clearFilter: (state) => {
      state.filter = ''
    }
  },
})
export const {setFilter, clearFilter} = topSlice.actions
export default topSlice.reducer