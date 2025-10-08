import React from 'react'

//https://dribbble.com/shots/23565236-Contact-our-team-Untitled-UI

const ContactUs = () => {
  return (
    <div className='border-2 border-blue-900'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-roboto text-2xl font-semibold mt-5'>Contact Our Team</h1>
            <p1 className = 'font-roboto w-[900px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni vero alias architecto debitis. Nostrum dolorem voluptatem alias rerum suscipit doloribus repudiandae accusamus  magni vero alias  magni vero alias psum dolor sit amet.</p1>
        </div>
        <div className='border-2 w-[60%] h-[500px] mx-auto mb-5 flex flex-row justify-between'>
            <form className='ml-10 mt-5'>
                
                <div className='flex flex-row gap-7'>
                    <div className='flex flex-col'>
                        <label for="firstName" className=''>First Name</label>
                        <input placeholder='John' type='text' id="firstName" className='w-[200px] rounded-sm border border-gray-300'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label for="lastName" className=''>last Name</label>
                        <input placeholder='Smith' type='text' id="lasttName" className='w-[200px] rounded-sm border border-gray-300'></input>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label for="email" className=''>Email</label>
                    <input placeholder='JohnSmith@Example.com' type='text' id="email" className='w-[426px] rounded-sm border border-gray-300'></input>
                </div>

                <div className='flex flex-col items-start'>
                    <label for="message" className=''>Message</label>
                    <textarea placeholder='Have questions? We’d love to hear from you.' type='text' id="message" className='w-[426px] h-[200px] rounded-sm border border-gray-300 px-1'></textarea>
                </div>

                <button className='w-[426px] bg-gradient-to-br from-black/70 to-black/90 mt-3 px-2 py-2 cursor-pointer text-gray-200' type='submit'>Send Message</button>


                
            </form>

            <div className='mr-10 mt-5 w-[300px] border-2'>
                <h1>Chat with us</h1>
                <p>Speak with our friendly team via chat.</p>
            </div>

        </div>
    </div>
  )
}

export default ContactUs