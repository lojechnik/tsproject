import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext,authContextType } from './context/auth-context'
import { dataArrayType, historyContextType, historyObjectType } from './context/data-context'
const History = () =>{
     // console.log(props)
 const { state } = useLocation()
 console.log('KONO STATE', state)
 const auth = useContext(AuthContext)
    // console.log('item1',item1)
console.log('statexxx',state)
return (
    <div>
      {
      state.todo.history.map((c:historyObjectType) => {
        if (c.author === auth)
        return(
            <>
              {
              <>      
                <div>{c.author}</div>
                <div>{c.date}</div>
                <div>{c.task}</div>
              </>
              }
          </>
          )
        })
      }
   </div>
 )
}   
export default History