import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import After from './pages/After'
import Credits from './pages/Credits'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/after' element={<After/>}/>
        <Route path='/credits' element={<Credits/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App