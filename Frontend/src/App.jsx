import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CaptainLogin from './pages/captainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserLogin from './pages/userLogin'
import UserSignUp from './pages/UserSignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={ <Home/>} />
        <Route path='/signup' element ={ <UserSignUp/>} />
        <Route path='/login' element ={ <UserLogin/>} />
        <Route path='/captain-signup' element ={ <CaptainSignUp/>} />
        <Route path='/captain-login' element ={ <CaptainLogin/>} />
      </Routes>
    </div>
  )
}

export default App