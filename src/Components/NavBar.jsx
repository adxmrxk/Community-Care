import React from 'react'

function NavBar() {
  return (
    <div className='border-b'>
        <div className='h-[75px] flex items-center justify-between'>
            <div className='pl-10 flex flex-row gap-3'>
                <h1>Logo Picture</h1>
                <h1>Name of Company/Service</h1>
            </div>
            <nav className='mr-12'>
                <ul className='flex flex-row gap-8'>
                    <li className='px-3 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer'>About</li>
                    <li className='px-3 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer'>Contact</li>
                    <li className='px-3 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer'>Process</li>
                    <li className='px-3 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer'>Sign Up</li>
                    <li className='px-3 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer'>Log In</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavBar