import React from 'react'
import { GoPerson } from 'react-icons/go'

const MobileFooter = () => {
  return (
    <>
        <div className=' text-white mt-30 container mx-auto w-[95%] text-xl'>
            <div>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>HAMDAMOV</h1>
                <p className='mt-2 text-xl '>I am frontend devoloper from Uzbekistan <br /> with 1 years of experience in IT.You <br /> can learn
                more about me on this site. <br /> Welcome!</p>
            </div>
            <div>
                <div className='flex gap-2 mt-10 text-sm'>
                    <div className='rounded-[40px] p-3 bg-gray-800 flex gap-2 items-center outline-none '><GoPerson className='text-2xl' /><input type="email" placeholder='Enter your email' className='outline-none ' /></div>
                    <button className='w-[170px] bg-linear-65 from-purple-800 to-pink-600 px-2 py-1 rounded-[40px] font-outfit cursor-pointer outline-none active:scale-94 transition duration-300 max-lg:px-4 '>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='text-white w-[100%] mx-auto mt-5' />
        {/* <h1 className='text-white text-5xl'>©</h1> */}
        <div className='text-white mt-3  flex container mx-auto w-[90%]'>
                <p className='text-center'>©2025 Hamdamov Zarifjon.All rights reserved.</p>
        </div>
    </>
  )
}

export default MobileFooter