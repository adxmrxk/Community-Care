import React, { useState } from 'react'

const ProcessSection = () => {
  const [requester, setRequester] = useState(true)

  //https://dribbble.com/shots/25446139-Process-Section-Bento-Grid-UI
  //https://dribbble.com/shots/26122958-Process-Section-Design
  //https://dribbble.com/shots/26101553-UnifiedUI-Step-by-Step-Process-Section-Design

  return (
    <div className='flex flex-row h-[900px] bg-gradient-to-br from-gray-100 via-lime-50 to-green-100'>
        
        <div className='flex flex-col justify-center items-center w-full my-5'>

          <button className='text-md'>{requester ? 'Requester' : 'Volunteer'}</button>
          <h1 className='text-3xl font-semibold mb-15'>Get Started In Four Basic Steps</h1>

          <div className='bg-emerald-900 rounded-full w-[25px] h-[25px] translate-y-62'></div>
          <div className='bg-emerald-900 rounded-full w-[25px] h-[25px]'></div>
          <div className='border-1 border-emerald-900 h-4/5'></div>
          <div className=' bg-emerald-900 rounded-full w-[25px] h-[25px]'></div>
          <div className=' bg-emerald-900 rounded-full w-[25px] h-[25px] -translate-y-62'></div>

        </div>

        <div className='absolute mt-40 translate-x-100'>
          <h1 className='rounded-md bg-gray-100/20 px-4 py-1 w-fit mb-2 text-green-700 font-bold text-sm'>Step 1</h1>
          <div className='bg-gradient-to-br from-lime-50  to-lime-100  p-3 py-6 rounded-lg h-fit'>
            <h1 className='text-left font-semibold'>Register An Account</h1>
            <p className='w-[440px] leading-tight mt-2 text-sm'>Register your account as a requester, join the community - it only takes a minute.</p>
          </div>
        </div>

        <div className='absolute mt-98 translate-x-265'>
          <h1 className='rounded-md bg-gray-100/20 px-4 py-1 w-fit mb-2 text-green-700 font-bold text-sm'>Step 2</h1>
          <div className='bg-gradient-to-br from-lime-50 to-lime-100  p-3 py-6 rounded-lg h-fit'>
            <h1 className='text-left font-semibold'>Post A Task</h1>
            <p className='w-[440px] leading-tight mt-2 text-sm'>Register your account as a requester, join the community - it only takes a minute.</p>
          </div>
        </div>

        <div className='absolute mt-155 translate-x-100'>
          <h1 className='rounded-md bg-gray-100/20 px-4 py-1 w-fit mb-2 text-green-700 font-bold text-sm'>Step 3</h1>
          <div className='bg-gradient-to-br from-lime-50  to-lime-100  p-3 py-6 rounded-lg h-fit'>
            <h1 className='text-left font-semibold'>Register An Account</h1>
            <p className='w-[440px] leading-tight mt-2 text-sm'>Register your account as a requester, join the community - it only takes a minute.</p>
          </div>
        </div>

    </div>
  )
}

export default ProcessSection