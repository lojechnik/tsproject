import React, { useRef, useEffect, useState, useMemo, useCallback,useContext, createContext } from 'react'
import {useLocation,Link} from 'react-router-dom'
import {dataArrayType } from './context/data-context'
import { AuthContext, authContextType } from './context/auth-context'
export const Auth = () =>{
  const fioInputRef = useRef<HTMLInputElement>(null);
  const [auth,setAuth] = useState<authContextType>('')
  const [data, setData] = useState<dataArrayType>([])
    const nextAuth = data.map((c, i) => { 
      if (fioInputRef.current)
      if (c.author === fioInputRef.current.value) {
        if (fioInputRef.current)
        return  fioInputRef.current.value

      } else {
        if (fioInputRef.current)
        return fioInputRef.current.value
      }
    });
    
    // setAuth(nextAuth.toString());

  
  const handleLoginClick = () => {
    if (fioInputRef.current){
    if (fioInputRef.current.value != null) {
      console.log('USERNAME',fioInputRef.current.value)
      const nextAuth = fioInputRef.current.value
      console.log('nextAuth',nextAuth)
      setAuth(nextAuth)
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