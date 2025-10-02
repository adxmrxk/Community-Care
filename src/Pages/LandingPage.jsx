import React from 'react'
import NavBar from '../Components/Landing Page/NavBar'
import WelcomeSection from '../Components/Landing Page/WelcomeSection'
import CardComponent from '../Components/Landing Page/CardComponent'
import ProcessSection from '../Components/Landing Page/ProcessSection'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen'>
        <NavBar/>
        <WelcomeSection/>
        <CardComponent/>
        <ProcessSection/>
    </div>
  )
}

export default LandingPage