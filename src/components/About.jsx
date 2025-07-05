import React from 'react'
import img from '../assets/myimage.jpg'
import MobileAbout from './MobileAbout'


const About = () => {
    return (
        <>
            <div className="flex flex-col text-white mt-40 container mx-auto max-md:hidden">
                <h1 className="text-6xl font-semibold text-center">About me</h1>

                <div className='flex gap-10 mt-15   '>
                    <img src={img} alt="img" className="w-120 h-[100] mt-8 rounded-xl " />

                    <div className="  mt-8 text-2xl">
                        <div className="flex flex-col flex-1 gap-10">
                            <p>
                                I am an experienced Frontend Developer with over a decade of professional expertise in the field.  Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                            </p>
                            <p>
                                My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                            </p>
                         <div className="flex-1 space-y-2 w-[1000px] mt-15 ">
                            <div className='flex whitespace-nowrap items-center gap-15  hover:scale-105 transition duration-300 cursor-pointer '><p >HTML & CSS</p><div className='flex w-[55%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md'></div></div>
                            <div className='flex whitespace-nowrap items-center gap-16 mt-3 hover:scale-105 transition duration-300 cursor-pointer '><p>Tailwind CSS</p><div className='flex w-[80%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md'></div></div>
                            <div className='flex whitespace-nowrap items-center gap-23 mt-3 hover:scale-105 transition duration-300 cursor-pointer '><p>JavaScript</p><div className='flex w-[70%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md'></div></div>
                            <div className='flex whitespace-nowra items-center gap-28 mt-3 hover:scale-105 transition duration-300 cursor-pointer '><p>React JS</p><div className='flex w-[65%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md'></div></div>
                        </div>   
                    </div>

                        
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center mt-25">
                    <div className='hover:scale-105 transition duration-300 cursor-pointer '>
                        <h1 className='font-bold text-5xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>1+</h1>
                        <p className='font-semibold mt-3'>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className='boder border-l-1 border-r-1 hover:scale-105 transition duration-300 cursor-pointer '>
                        <h1 className='font-bold text-5xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>10+</h1>
                        <p className='font-semibold mt-3'>PROJECTS COMPLETED</p>
                    </div>
                    <div className='hover:scale-105 transition duration-300 cursor-pointer'>
                        <h1 className='font-bold text-5xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>5+</h1>
                        <p className='font-semibold mt-3'>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto hidden max-md:block'>
                 <MobileAbout/>
            </div>

        </>
    )
}

export default About