import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { DataContext,dataContextType } from './componentsTEST/context/data-context';
import { Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import { Auth } from './componentsTEST/auth'
import History from './componentsTEST/history';
import { Home } from './componentsTEST/home-page';
import { authContextType, AuthContext } from './componentsTEST/context/auth-context'
const App = () => {
  const localStorageData = JSON.parse(localStorage.getItem("todoData") || '')
  const [auth] = useState<authContextType>('')
  const [data] = useState<dataContextType>([])
  return (
    <AuthContext.Provider value={
    auth
    }>
      <DataContext.Provider value={
      data
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
      </DataContext.Provider>
    </AuthContext.Provider>
  )
}

export default App