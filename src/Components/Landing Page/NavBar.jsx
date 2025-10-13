import React from 'react'

function NavBar({clickSignUp, setClickSignUp}) {
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleClick = () => {
    setClickSignUp(!clickSignUp)
  }

  return (
    <div className='border-b-2 sticky top-0'>
        <div className='h-[75px] flex items-center justify-between'>
            <div className='pl-10 flex flex-row gap-3'>
                <h1>Logo Picture</h1>
                <h1>Name of Company/Service</h1>
            </div>
            <nav className='mr-12'>
                <ul className='flex flex-row gap-8'>
                    <li className='px-5 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer' onClick={() => handleScroll('about')}>About</li>
                    <li className='px-5 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer' onClick={() => handleScroll('process')}>Process</li>
                    <li className='px-5 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer' onClick={() => handleScroll('contact')}>Contact</li>
                    <li className='px-5 py-1 hover:bg-gray-200 hover:rounded-xs transition-all duration-300 ease-in-out cursor-pointer' onClick={handleClick}>Sign Up</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavBar