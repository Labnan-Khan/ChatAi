import React from 'react'
import Sidebar from './Component/SideBar/Sidebar'
import Main from './Component/Main/Main'
import './app.css'
import ContextProvider from './Context/Context1'
function App() {
  return (
    <ContextProvider>
    <div className='appclass'>
      <Sidebar/>
      <Main/>
    </div>
    </ContextProvider>
  )
}

export default App