import React from 'react'
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const CardComponent = () => {
  const ref = useRef();

  return (
      <div className='flex flex-col items-center justify-center mt-5'>
          <p className='w-fit border-2 -mb-5'>At CROSSOVER Software we go by these values</p>
          <div className='flex flex-row gap-2 justify-center mt-5'>
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
      </div>
  )
}

export default CardComponent