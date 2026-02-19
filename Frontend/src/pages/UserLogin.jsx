import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        console.log(userData);
        setEmail('')
        setPassword('')
        // prasadaditya143@gmail.com
    }
  return (
    <div className="h-screen w-full bg-white flex flex-col px-6 pt-6">
      
      <img
        className="w-20 mb-4"
        src="/images/Uber-Transparent-Background.png"
        alt="Uber"
      />

      <div className="w-full max-w-sm">
        <form onSubmit={(e)=> {submitHandler(e)}} className="flex flex-col">
          <h3 className="text-xl mb-2 font-medium">
            What's your email
          </h3>
          <input
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            placeholder="User@gmail.com"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-4 outline-none"
          />

          <h3 className="text-xl mb-2 font-medium">
            Enter Password
          </h3>
          <input
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-6 outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold rounded px-3 py-3 w-full text-lg"
          >
            Login
          </button>

          <p className="text-center font-semibold py-3 text-m">
            New here?{" "}
            <Link to="/signup" className="text-blue-500">
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div className="flex-grow"></div>

      <Link
        to="/captain-login"
        className="flex items-center justify-center w-full bg-green-500 text-white py-3 rounded text-lg font-medium mb-6"
      >
        Sign in as Captain
      </Link>

    </div>
  )
}

export default UserLogin
