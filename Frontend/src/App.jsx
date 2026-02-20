import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Start'
import CaptainLogin from './pages/captainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserLogin from './pages/userLogin'
import UserSignUp from './pages/UserSignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={ <Start/>} />
        <Route path='/home' element ={ <Home/>} />
        <Route path='/signup' element ={ <UserSignUp/>} />
        <Route path='/login' element ={ <UserLogin/>} />
        <Route path='/captain-signup' element ={ <CaptainSignUp/>} />
        <Route path='/captain-login' element ={ <CaptainLogin/>} />
      </Routes>
    </div>
  )
}

export default App