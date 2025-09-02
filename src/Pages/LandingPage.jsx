import React from 'react'
import NavBar from '../Components/NavBar'

const LandingPage = () => {
  return (
    <div className='h-screen border-2'>
        <NavBar/>
        <div className='h-[600px] bg-gray-200'>
          <h1>Welcome Section</h1>
        </div>
    </div>
  )
}

export default LandingPage