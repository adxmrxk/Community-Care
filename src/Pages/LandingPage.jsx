import React from 'react'
import NavBar from '../Components/NavBar'
import WelcomeSection from '../Components/WelcomeSection'
import CardComponent from '../Components/CardComponent'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen'>
        <NavBar/>
        <WelcomeSection/>
        <CardComponent/>
    </div>
  )
}

export default LandingPage