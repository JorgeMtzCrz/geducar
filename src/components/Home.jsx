import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {MyContext} from '../contextData'

export const Home = () => {
  const context = useContext(MyContext)
  const {users} = context
  if(!users)return <p>Loading...</p>
  return (
    <div className="container">
    {users.map(e=>{
      return(
        <div className='card' key={e.id}>
          <p>Name: {e.name}</p>
          <p>Username: {e.username}</p>
          <p>Email: {e.email}</p>
          <p>Company: {e.company.name}</p>
          <Link to={`/${e.id}/posts`}>See post</Link>
        </div>
      )
    })}
    </div>
  )
}

