import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/Posts/postSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  },
})