import React from 'react'

const ProcessSection = () => {
  //https://dribbble.com/shots/25446139-Process-Section-Bento-Grid-UI
  //https://dribbble.com/shots/26122958-Process-Section-Design
  //https://dribbble.com/shots/26101553-UnifiedUI-Step-by-Step-Process-Section-Design

  return (
    <div className='flex flex-row h-[900px]'>

        <div className='flex flex-col justify-center items-center w-full my-5 '>

          <div className='bg-black rounded-full w-[25px] h-[25px] translate-y-57'></div>
          <div className='bg-black rounded-full w-[25px] h-[25px]'></div>
          <div className='border-1 border-black h-4/5'></div>
          <div className=' bg-black rounded-full w-[25px] h-[25px]'></div>
          <div className=' bg-black rounded-full w-[25px] h-[25px] -translate-y-57'></div>



        </div>

        <div className='absolute mt-20 translate-x-100'>
          <h1 className='rounded-md bg-lime-300 px-3 py-1 w-fit mb-2'>Step 1</h1>
          <div className='bg-gray-200 p-3 py-6 rounded-lg h-fit'>
            <h1 className='text-left'>Register An Account</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia.</p>
            <button>Create An Account</button>
          </div>
        </div>

    </div>
  )
}

export default ProcessSection