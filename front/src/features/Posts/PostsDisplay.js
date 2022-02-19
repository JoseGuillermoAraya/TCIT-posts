import React from "react";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, selectAllPosts } from './postSlice';
import './Posts.css';

const PostsDisplay = (props) => {
  const dispatch = useDispatch()
  const postStatus = useSelector(state => state.posts.status)
  const posts = useSelector(selectAllPosts)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  },[dispatch, postStatus])
  console.log(posts)
  const grid = []
  posts.forEach(p => {
    grid.push(<div className={`cell cell${p.id}`} key={`nom${p.id}`}>{p.nombre}</div>)
    grid.push(<div className={`cell cell${p.id}`} key={`descr${p.id}`}>{p.descripcion}</div>)
  }
)
  return (<div className="postDisplayContainer">
    {grid}
  </div>)
}
export default PostsDisplay