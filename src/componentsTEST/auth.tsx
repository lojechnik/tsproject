import React, { useRef, useEffect, useState, useMemo, useCallback,useContext, createContext } from 'react'
import {useLocation,Link} from 'react-router-dom'
import {dataArrayType } from './context/data-context'
import { AuthContext, authContextType } from './context/auth-context'
export const Auth = () =>{
  const fioInputRef = useRef<HTMLInputElement>(null);
  const {auth,setAuth} = useContext(AuthContext)
  const [data] = useState<dataArrayType>([])
    
    

  
  const handleLoginClick = () => {
    if (fioInputRef.current){
    if (fioInputRef.current.value != null) {
      console.log('USERNAME',fioInputRef.current.value)
      const nextAuth = fioInputRef.current.value
      console.log('nextAuth',nextAuth)
      console.log('beforechange',auth)
      setAuth(nextAuth)
      console.log('afterchange',auth)
    }
  }
  }
  return (
 <>
  <input ref = {fioInputRef}></input>
  <Link to={{
    pathname: "/home",
    
    }}>
  <button onClick = {handleLoginClick}>LOGIN</button>
  </Link>
 </>
  ) 
}   