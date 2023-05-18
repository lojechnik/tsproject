import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { dataArrayType } from './componentsTEST/context/data-context';
import { Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import { Auth } from './componentsTEST/auth'
import History from './componentsTEST/history';
import { Home } from './componentsTEST/home-page';
import { authContextType, AuthContext } from './componentsTEST/context/auth-context'
const App = () => {
  const [auth] = useState<authContextType>('')
  return (
    <AuthContext.Provider value={
    auth
    }>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Auth/>}>
            </Route>
            <Route path="/home" element = {<Home/>}> 
            </Route>
            <Route path="/task/:id"element = {<History/>} >
            </Route>
          </Routes>
        </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App