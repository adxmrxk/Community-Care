import React from 'react'
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const CardComponent = () => {
  const ref = useRef();

  return (
      <div className='flex flex-row gap-2 justify-center mt-10 border-2'>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} className = 'w-[225px] h-[195px] mb-5'>
                    <FrontSide className = 'flex flex-col justify-center items-center w-[200px]'>
                        <h1 className='text-xl text-black font-semibold'>Innovation</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center'>
                        <p className='text-lg text-black'>text</p>
                    </BackSide>
                </Flippy>
            </div>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} className = 'w-[225px] h-[195px] mb-5'>
                    <FrontSide className = 'flex flex-col justify-center items-center'>
                        <h1 className='text-xl text-black font-semibold'>Excellence</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center'>
                        <p className='text-xl text-black'>text</p>
                        <p></p>
                    </BackSide>
                </Flippy>
            </div>
          <div className='flex justify-center mt-5'>
                <Flippy flipOnHover = {true} flipOnClick = {false} flipDirection="horizontal" ref = {ref} className = 'w-[225px] h-[195px] mb-5'>
                    <FrontSide className = 'flex flex-col justify-center items-center'>
                        <h1 className='text-xl text-black font-semibold'>Community</h1>
                    </FrontSide>
                    <BackSide className = 'flex justify-center items-center'>
                        <p className='text-xl text-black'>text</p>
                    </BackSide>
                </Flippy>
            </div>
          
      </div>
  )
}

export default CardComponent