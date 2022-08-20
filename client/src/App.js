import React from 'react'
import useRoutes from './routes';


function App() {
  const routes = useRoutes(false)
  return (
    <div className='contai'>
       { routes }
    </div>
  )
}

export default App;
