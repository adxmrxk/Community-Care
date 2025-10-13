import React, { useState } from 'react'
import NavBar from '../Components/Landing Page/NavBar'
import WelcomeSection from '../Components/Landing Page/WelcomeSection'
import CardComponent from '../Components/Landing Page/CardComponent'
import ProcessSection from '../Components/Landing Page/ProcessSection'
import AboutUs from '../Components/Landing Page/AboutUs'
import ContactUs from '../Components/Landing Page/ContactUs'
import AuthForm from '../Components/Landing Page/AuthForm'

const LandingPage = () => {

  const [clickSignUp, setClickSignUp] = useState(false);

  return (
    <div className='h-screen w-screen '>
          {clickSignUp ? <AuthForm clickSignUp = {clickSignUp} setClickSignUp = {setClickSignUp}></AuthForm> : null}
          <NavBar clickSignUp = {clickSignUp} setClickSignUp = {setClickSignUp}/>
          <WelcomeSection/>
          <div id = 'about'>
            <AboutUs></AboutUs>
          </div>
          <div id = 'process'>
            <ProcessSection/>
          </div>
          <div id = 'contact'>
            <ContactUs></ContactUs>
        </div>

    </div>
  )
}

export default LandingPage