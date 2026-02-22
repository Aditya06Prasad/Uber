import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import CaptainLogin from './pages/captainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'

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

        <Route path="/logout" element={<UserLogout />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />
      </Routes>
    </div>
  )
}


export default App