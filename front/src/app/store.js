import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/Posts/postSlice'
import inputReducer from '../features/AddBar/addSlice'
import filterReducer from '../features/TopBar/topSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    inputs: inputReducer,
    filter: filterReducer,
  },
})