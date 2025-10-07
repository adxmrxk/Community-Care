import React from 'react'

//https://dribbble.com/shots/23565236-Contact-our-team-Untitled-UI

const ContactUs = () => {
  return (
    <div className='border-2 border-blue-900'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-roboto text-2xl font-semibold mt-5'>Contact Our Team</h1>
            <p1 className = 'font-roboto w-[1000px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni vero alias architecto debitis. Nostrum dolorem voluptatem alias rerum suscipit doloribus repudiandae accusamus  magni vero alias  magni vero alias psum dolor sit amet.</p1>
        </div>
        <div className='border-2 w-[60%] h-[400px] mx-auto mb-5'>
            <form>
                <div className='flex flex-col'>
                    <label for="firstName">First Name</label>
                    <input placeholder='test' type='text' id="firstName" className='w-fit'></input>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactUs