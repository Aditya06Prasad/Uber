import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import captainLogin from './pages/captainLogin'
import captainSignUp from './pages/captainSignUp'
import UserLogin from './pages/userLogin'
import UserSignUp from './pages/UserSignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={ <Home/>} />
        <Route path='/signup' element ={ <UserSignUp/>} />
        <Route path='/login' element ={ <UserLogin/>} />
        <Route path='/captain-signup' element ={ <captainSignUp/>} />
        <Route path='/captain-login' element ={ <captainLogin/>} />
      </Routes>
    </div>
  )
}

export default App