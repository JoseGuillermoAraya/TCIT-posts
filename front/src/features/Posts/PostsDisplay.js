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
  posts.forEach((p,idx) => {
    grid.push(<div className={`cell row${p.id}`} key={`name${p.id}`}>{p.nombre}</div>)
    grid.push(<div className={`cell row${p.id}`} key={`descr${p.id}`}>{p.descripcion}</div>)
    grid.push(<button className={`eliminarButton row${p.id}`} key={`button${p.id}`}>Eliminar</button>)
  }
)
  return (<div className="postDisplayContainer">
    <div className="nombreTitle">Nombre</div>
    <div className="descrTitle">Descripción</div>
    <div className="accionTitle">Acción</div>
    {grid}
  </div>)
}
export default PostsDisplay