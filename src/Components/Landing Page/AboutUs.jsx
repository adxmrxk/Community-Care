import React from 'react'
import CardComponent from './CardComponent'

//https://kinsta.com/blog/about-us-page/

const AboutUs = () => {
  return (
    <div className='border-2 border-red-400 flex flex-col items-center'>
        <div className='border-2 border-purple-400 flex flex-row gap-15'>
            <div className='border-2 border-amber-200'>
                <h1 className='mt-5 text-xl font-light font-roboto'>About Us</h1>
                <p className='text-3xl font-semibold font-roboto w-[400px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, voluptates quasi impedit.</p>
                <button>Sign Up</button>
            </div>
            <div className='bg-gray-200 w-[400px] h-[400px]'></div>
        </div>
        {/*<CardComponent></CardComponent>*/}
    </div>
  )
}

export default AboutUs