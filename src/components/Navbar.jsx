import React from 'react'
import { BsHSquare } from "react-icons/bs";

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-around p-5 items-center text-white text-2xl max-md:hidden '>
         
            <BsHSquare className=' text-6xl font-bold itms-center cursor-pointer text-purple-600 ' />
         
         <ul className='flex gap-10  md-flex space-x-6 max-lg:gap-3 '>
            <li className='cursor-pointer hover:text-purple-500'>Home</li>
            <li className='cursor-pointer hover:text-purple-500'>About me</li>
            <li className='cursor-pointer hover:text-purple-500'>Services</li>
            <li className='cursor-pointer hover:text-purple-500'>Portfolio</li>
            <li className='cursor-pointer hover:text-purple-500'>Contact</li>
         </ul>
         {/* <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Salom odamlar</h1>   */}
         <button className='bg-linear-65 from-purple-800 to-pink-600 px-9 py-3 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-90 transition duration-300 max-lg:px-4 '>Connect with me</button>
    </div>
    <div className='container mx-auto hidden max-md:block'>
        <MobileNav/>
    </div>
    </nav>
    
  )
}

export default Navbar