import React from 'react'
import MobileServices from './MobileServices'

const Services = () => {
    return (
        <>
            <div id='services' className='relative container mx-auto text-white mt-25 max-md:hidden'>
                <div className="p-10 ">
                    <h1 className="font-bold text-center text-6xl p-5">My Services</h1>
                    <div className="relative  group w-full  mx-auto h-[300px] overflow-hidden rounded-xl border border-2 border-purple-600 mt-20 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>
                        <div className="relative z-10 p-10 text-white">
                            <h1 className="text-center text-4xl font-semibold pb-5">🌐 Web Development</h1>
                            <p className="text-2xl">
                              Web development is the process of creating websites and web applications. It has two main parts: frontend and backend. Frontend is what users see, like buttons, text, and layout. Backend is what works behind the scenes, like servers and databases. Web developers use tools like HTML, CSS, JavaScript, React, and Node.js. The goal of web development is to build fast, responsive, and user-friendly websites that work well on all devices.                            </p>
                        </div>
                    </div>
                     <div className="relative group w-full  mx-auto h-[300px] overflow-hidden rounded-xl border border-2 border-purple-600 mt-15 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>
                        <div className="relative z-10 p-10 text-white">
                            <h1 className="text-center text-4xl font-semibold pb-5">🌐 Frontend Development</h1>
                            <p className="text-2xl">
                                Frontend development is the part of web development that deals with everything users see on a website. A frontend developer builds the layout, colors, buttons, text, images, and all the things users interact with. They use HTML for structure, CSS for style, and JavaScript for interaction. Frontend developers often use tools like React, Tailwind CSS, and Figma to make modern and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mx-auto hidden max-md:block'>
                <MobileServices/>
            </div>
        </>
    )
}

export default Services