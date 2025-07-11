import React from 'react'
import { GoPerson } from "react-icons/go";
import MobileFooter from './MobileFooter';

const Footer = () => {
    return (
    <>
        <div className='flex text-white mt-30 justify-between container mx-auto w-[70%] max-md:hidden'data-aos="fade-up">
            <div>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>HAMDAMOV</h1>
                <p className='mt-2 text-xl'>I am frontend devoloper from Uzbekistan <br /> with 1 years of experience in IT.You <br /> can learn
                more about me on this site. <br /> Welcome!</p>
            </div>
            <div>
                <div className='flex gap-5 mt-10'>
                    <div className='rounded-[40px] p-3 bg-gray-800 flex gap-2 items-center outline-none '><GoPerson className='text-2xl' /><input type="email" placeholder='Enter your email' className='outline-none ' /></div>
                    <button className='w-[170px] bg-linear-65 from-purple-800 to-pink-600 px-2 py-1 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-94 transition duration-300 max-lg:px-4 '>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='text-white w-[100%] mx-auto mt-7 max-md:hidden' />
        <div className='text-white mt-5 p-3 flex justify-between container mx-auto w-[70%] max-md:hidden'>
            <div>©2025 Hamdamov Zarifjon.All rights reserved.</div>
            <div className='flex gap-10'>
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
        <div className='container mx-auto hidden max-md:block'>
             <MobileFooter/>
        </div>
    </>
    )
}

export default Footer