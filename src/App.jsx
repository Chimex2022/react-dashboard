import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app'>
      <div className="app__body">
        <Sidebar />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default App