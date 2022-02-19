import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}
const apiPath = 'http://localhost:3001'
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(`${apiPath}/posts`)
  return response.json()
})
export const selectAllPosts = state => state.posts.posts

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
      state.status='loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succedeed'
      state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })
  }
})

export default postSlice.reducer