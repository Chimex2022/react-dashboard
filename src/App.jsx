import React from 'react'
import './App.css'
import MainPage from './components/MainPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app'>
      <div className="app__body">
        <Sidebar />
        <MainPage />
        <div></div>
      </div>
    </div>
  )
}

export default App