import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Uber-homepage.png')" }}>
      <div className="pt-8 px-6">
        <img
          className="w-20" 
          src="/images/Uber-Transparent-Background.png" 
          alt="Uber" 
        />
      </div>
      <div className="bg-white px-6 py-6 rounded-t-3xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900">
          Get Started with Uber
        </h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4 text-lg font-medium">Continue</Link>
      </div>
    </div>
  )
}
export default Start
