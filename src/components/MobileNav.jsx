import React from 'react'
import { BsHSquare } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { CgCloseR } from "react-icons/cg";


const MobileNav = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='flex justify-around container mx-auto p-2 text-white'>
            <BsHSquare className=' text-4xl font-bold itms-center cursor-pointer text-purple-500 ' />
            <button className='bg-linear-65 from-purple-800 to-pink-600 px-12
             py-1 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-95 transition duration-300  '>Connect with me</button>
            <CiMenuBurger className='text-purple-500 text-4xl hover:text-purple-700 cursor-pointer font-bold' onClick={toggleMenu} />
            {isOpen && (
                <div className='flex flex-col gap-10  absolute top-0 w-full h-screen bg-white/70 items-center py-8 text-purple-700 text-xl font-bold  '> 
                    <div>
                        <CgCloseR className='text-2xl ml-50 hover:text-red-500 cursor-pointer' onClick={toggleMenu} />
                    </div>
                    <ul className='flex flex-col gap-5'>
                        <li className='hover:text-purple-500 cursor-pointer'>Home</li>
                        <li className='hover:text-purple-500 cursor-pointer'>About me</li>
                        <li className='hover:text-purple-500 cursor-pointer'>Services</li>
                        <li className='hover:text-purple-500 cursor-pointer'>Portfolio</li>
                        <li className='hover:text-purple-500 cursor-pointer'>Contact</li>

                    </ul>
                </div>

            )}
        </nav>

    )
}

export default MobileNav