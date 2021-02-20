import React, {createContext, useState,useEffect} from 'react';
import JSON_SERVICE from './services/jsonPlaceholder';
import handleAsync from './utils/handleAsync'; 

export const MyContext = createContext()

export default function ContextProvider(props) {
  const [users, setUsers] = useState(null)

  useEffect(()=>{
    getUsers()
  }, [])
  
  const getUsers = async()=>{
    const data = await handleAsync(JSON_SERVICE.USERS)
    setUsers(data)
  }

  
  return (
    <>
    <MyContext.Provider 
    value={{ users}}>
    {props.children}
    </MyContext.Provider>
    </>
  );
}
