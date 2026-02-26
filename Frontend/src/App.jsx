import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignUp'
import CaptainHome from './pages/CaptainHome'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <Routes>
        <Route path='/' element ={ <Start/>} />
        <Route path='/home' element ={ <Home/>} />
        <Route path='/signup' element ={ <UserSignUp/>} />
        <Route path='/login' element ={ <UserLogin/>} />
        <Route path='/riding' element= { <Riding/> } />
        <Route path='/captain-signup' element ={ <CaptainSignup/>} />
        <Route path='/captain-login' element ={ <CaptainLogin/>} />
        <Route path='/captain-home' element ={ <CaptainHome/>} />
        <Route path='/captain-riding' element ={ <CaptainRiding/>} />

        <Route path="/logout" element={<UserLogout />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />
      </Routes>
  )
}


export default App

// npm i @react-google-maps/api
