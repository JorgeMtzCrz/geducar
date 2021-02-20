import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import JSON_SERVICE from '../services/jsonPlaceholder'
import handleAsync from '../utils/handleAsync'
export const Posts = (props) => {
  const [posts, setPosts] = useState(null)
  useEffect(()=>{
    getPosts()
  }, [])
  
  const getPosts = async()=>{
    const data = await handleAsync(()=>JSON_SERVICE.POSTS(props.match.params.id))
    console.log(posts)
    setPosts(data)
  }
  if(!posts)return <p>Loading...</p>
  return (
    <div className="container">
    {posts.map(e=>{
      return(
        <div className='card' key={e.id}>
          <p>Title: </p>
          <p>{e.title}</p>
          <p>{e.body}</p>
          <Link to={`/${e.id}/comments`}>See comments</Link>
        </div>
      )
    })}
    </div>
  )
}

