import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}
const apiPath = 'http://localhost:3001/posts'
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(apiPath)
  return response.json()
})
export const createPost = createAsyncThunk('posts/createPost', async (body) => {
  const response = await fetch(apiPath, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(body) })
  return response.json();
})
export const deletePost = createAsyncThunk('posts/deletePost', async (body) => {
  const response = await fetch(apiPath, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(body) })
  return response.json();
})
export const selectAllPosts = state => state.posts.posts

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
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
      .addCase(createPost.fulfilled, (state, action) => {
        state.status='idle'
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status='idle'
      })
  }
})
export default postSlice.reducer