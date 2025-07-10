import React, { useState } from 'react'
import { BsHSquare } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { CgCloseR } from "react-icons/cg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const MobileNav = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const [menu,setMenu]=useState("mhome")
    return (
        <nav className='flex justify-around container mx-auto p-2 text-white'>
            <BsHSquare className=' text-4xl font-bold itms-center text-purple-500 ' />
            <button className='bg-linear-65 from-purple-800 to-pink-600 px-15
             py-1 rounded-[40px] font-outfit outline-none  active:scale-95 transition duration-300  '><AnchorLink className='anchor-link' offset={50} href='#mcontact'><p onClick={()=> setMenu("mcontact")}>Connect with me</p></AnchorLink></button>
            <CiMenuBurger className='text-purple-500 text-4xl  font-bold active:text-purple-900' onClick={toggleMenu} />
            {isOpen && (
                <div className='flex flex-col gap-10  absolute top-0 fixed w-full h-screen bg-black items-center py-8 text-purple-700 text-3xl font-bold  '> 
                    <div>
                        <CgCloseR className='text-3xl ml-70 active:text-purple-800' onClick={toggleMenu} />
                    </div>
                    <ul className='flex flex-col gap-5 ' onClick={toggleMenu} >
                        <AnchorLink className='anchor-link' href='#mhome'><li className='border border-3 rounded-xl  text-center p-3 text-purple-500  active:bg-gray-800 ' onClick={()=> setMenu("mhome")} >Home</li></AnchorLink>
                        <AnchorLink className='anchor-link' offset={50} href='#mabout'><li className='border border-3 rounded-xl  text-center p-3 text-purple-500  active:bg-gray-800' onClick={()=> setMenu("mabout")}>About me</li></AnchorLink>
                        <AnchorLink className='anchor-link' offset={50} href='#mservices'><li className='border border-3 rounded-xl  text-center p-3 text-purple-500  active:bg-gray-800' onClick={()=> setMenu("mservices")}>Services</li></AnchorLink>
                        <AnchorLink className='anchor-link' offset={50} href='#mportfolio'><li className='border border-3 rounded-xl  text-center p-3 text-purple-500  active:bg-gray-800' onClick={()=> setMenu("mportfolio")}>Portfolio</li></AnchorLink>
                        <AnchorLink className='anchor-link' offset={50} href='#mcontact'><li className='border border-3 rounded-xl  text-center p-3 text-purple-500  active:bg-gray-800' onClick={()=> setMenu("mcontact")}>Contact</li></AnchorLink>

                    </ul>
                </div>

            )}
        </nav>

    )
}

export default MobileNav