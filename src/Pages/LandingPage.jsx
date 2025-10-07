import React from 'react'
import NavBar from '../Components/Landing Page/NavBar'
import WelcomeSection from '../Components/Landing Page/WelcomeSection'
import CardComponent from '../Components/Landing Page/CardComponent'
import ProcessSection from '../Components/Landing Page/ProcessSection'
import AboutUs from '../Components/Landing Page/AboutUs'
import ContactUs from '../Components/Landing Page/ContactUs'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen'>
        <NavBar/>
        <WelcomeSection/>
        <AboutUs></AboutUs>
        <ProcessSection/>
        <ContactUs></ContactUs>
    </div>
  )
}

export default LandingPage