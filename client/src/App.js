import React from 'react'
import useRoutes from './routes';
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import './App.css'
import Nav from '../src/component/Nav/Nav'


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
        <div className='container'>
          {/* Крайне сомнительное решения */}
          <>
            <Nav />  
          </>
          
          { routes }
        </div>
      </AuthContext.Provider>
  )
}

export default App;
