import React from 'react'
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const CardComponent = () => {
  const ref = useRef();

  return (
      <div className='flex flex-row gap-2 justify-center mt-10'>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} style = {{ width: '250px', height: '150px' }}>
                    <FrontSide className = 'flex flex-col justify-center items-center' style = {{ backgroundColor: '#68D391' }}>
                        <h1 className='text-lg text-black font-semibold'>Innovation</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center' style = {{ backgroundColor: '#68D391'}}>
                        <p className='text-lg text-black'>text</p>
                    </BackSide>
                </Flippy>
            </div>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} style = {{ width: '250px', height: '150px' }}>
                    <FrontSide className = 'flex flex-col justify-center items-center' style = {{ backgroundColor: '#68D391' }}>
                        <h1 className='text-lg text-black font-semibold'>Excellence</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center' style = {{ backgroundColor: '#68D391'}}>
                        <p className='text-lg text-black'>text</p>
                    </BackSide>
                </Flippy>
            </div>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} style = {{ width: '250px', height: '150px' }}>
                    <FrontSide className = 'flex flex-col justify-center items-center' style = {{ backgroundColor: '#68D391' }}>
                        <h1 className='text-lg text-black font-semibold'>Community</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center' style = {{ backgroundColor: '#68D391'}}>
                        <p className='text-lg text-black'>text</p>
                    </BackSide>
                </Flippy>
            </div>
          
      </div>
  )
}

export default CardComponent