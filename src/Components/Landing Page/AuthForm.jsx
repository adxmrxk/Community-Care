import React from 'react'
import { useState } from 'react';
import { stringify } from 'postcss';
import { AiOutlineClose } from "react-icons/ai";

const AuthForm = ({clickSignUp, setClickSignUp}) => {

  const [isLoginMode, setIsLogInMode] = useState(false);

  const handleClick = () => {
    setClickSignUp(!clickSignUp);
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div>
            <div className="w-[500px] bg-gradient-to-br from-[#cbd0d8] to-[#9a9a9e] p-8 rounded-2xl shadow-lg border-1 border-gray-500 ">
          <AiOutlineClose className='text-gray-400 w-[22px] h-[22px] hover:text-white transition-all duration-200 rounded-sm cursor-pointer absolute ml-90 -translate-y-4' onClick={handleClick}/>
          {/* Header Titles */}
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
          </div>
        
          {/* Form Section */}
          <form className="space-y-6">
            {/* Signup Fields */}
            <div className='flex flex-row justify-between'>
                {!isLoginMode && ( <input type="text" placeholder="First Name" required className="w-fit p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"/>)}
                {!isLoginMode && ( <input type="text" placeholder="Last Name" required className="w-fit p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"/>)}
            </div>
            <input type="email" placeholder="Email Address" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-600"/>
            <input type="text" placeholder="Username" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-600"/>
            
            <input type="password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-600"/>
            {/* Submit Button */}
            <button type = "submit" className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default AuthForm