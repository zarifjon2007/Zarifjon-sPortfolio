import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'
import { TfiEmail } from 'react-icons/tfi'

const MobileContact = () => {
  return (
    <> 
    <h1 id='mcontact' className='text-center text-4xl font-bold text-white mt-5 boder border-l-2 border-r-2  border-purple-500 w-[95%] mx-auto'>Get in touch</h1>
     <div className='flex flex-col gap-5 text-white mt-9 container mx-auto w-[90%] '>
        <div className='flex flex-col gap-4 text-xl'> 
            <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>Let's talk</h1>
            <p>I'm currently available to take on new projects,so feel free to <br />send me o messages about anyting that you want me to work <br /> on.You can contact anytime.</p>
            <div className='flex gap-5 items-center'>
                <TfiEmail className='text-2xl' />
                <p>zarifjonhamdamov3@gmail.com</p>
            </div>
            <div className='flex gap-5 items-center'>
                <PiPhoneCallFill className='text-2xl' />
                <p>+998 507190757</p>
            </div>
            <div className='flex gap-5 items-center'>
                <IoLocationSharp  className='text-2xl'/>
                <p>UZ, Uzbekitan</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-7'>
            <label htmlFor="#" className='font-semibold text-xl'>Your Name</label>
            <input type="name" placeholder='Enter your name' className='h-[50px] p-3 bg-gray-800 boder-none rounded-md outline-none'/>
            <label htmlFor="#" className='font-semibold text-xl'>Your Email</label>
            <input type="email" placeholder='Enter your email' className='h-[50px] p-3 bg-gray-800 boder-none rounded-md outline-none' />
            <label htmlFor="#" className='font-semibold text-xl'>Write your message here</label>
            <textarea
              className="w-full h-40 p-3  bg-gray-800 rounded-md    outline-none " placeholder="Enter your message...">
            </textarea> 
            <button className='w-[230px] text-xl bg-linear-65 from-purple-800 to-pink-600 px-3 py-3 rounded-[40px] font-outfit cursor-pointer  active:scale-94 transition duration-300 max-lg:px-4 '>Submit now</button>
        </div>
     </div>
        
    </>
  )
}

export default MobileContact