import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import JSON_SERVICE from '../services/jsonPlaceholder'
import handleAsync from '../utils/handleAsync'
export const Comments = (props) => {
  const [comments, setComments] = useState(null)
  useEffect(()=>{
    getComments()
  }, [])
  
 async function getComments (){
    const data = await handleAsync(()=>JSON_SERVICE.COMMENTS(props.match.params.id))
    setComments(data)
  }
  if(!comments)return <p>Loading...</p>
  return (
    <div className="container">
    {comments.map(e=>{
      return(
        <div className='card' key={e.id}>
          <p>Title: </p>
          <p>{e.name}</p>
          <p>Comment:</p>
          <p>{e.body}</p>
          <p>Author: {e.email}</p>
          <Link to={`/`}>Go Users</Link>
        </div>
      )
    })}
    </div>
  )
}