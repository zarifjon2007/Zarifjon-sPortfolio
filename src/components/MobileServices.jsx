import React from 'react'

const MobileServices = () => {
  return (
    <>
            <div className='relative container mx-auto text-white mt-5'>
                <div className="p-5 ">
                    <h1 className="font-bold text-center text-3xl boder border-l-1 border-r-1  border-purple-500  mx-auto">My Services</h1>
                    <div className="relative  group w-full  mx-auto h-[300px] overflow-hidden rounded-xl border border-2 border-purple-600 mt-10 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>
                        <div className=" w-90 h-80 relative z-10 p-5 text-white overflow-auto">
                            <h1 className="text-center text-3xl font-semibold p-4 ">🌐 Web Development</h1>
                            <p className="text-1xl text-center">
                              Web development is the process of creating websites and web applications. It has two main parts: frontend and backend. Frontend is what users see, like buttons, text, and layout. Backend is what works behind the scenes, like servers and databases. Web developers use tools like HTML, CSS, JavaScript, React, and Node.js. The goal of web development is to build fast, responsive, and user-friendly websites that work well on all devices.                            </p>
                        </div>
                    </div>
                     <div className="relative group w-full  mx-auto h-[300px] overflow-hidden rounded-xl border border-2 border-purple-600 mt-10 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>
                        <div className="w-95 h-80 relative z-10 p-10 text-white  overflow-auto">
                            <h1 className="text-center text-3xl font-semibold pb-5">🌐 Frontend Development</h1>
                            <p className="text-1xl text-center">
                                Frontend development is the part of web development that deals with everything users see on a website. A frontend developer builds the layout, colors, buttons, text, images, and all the things users interact with. They use HTML for structure, CSS for style, and JavaScript for interaction. Frontend developers often use tools like React, Tailwind CSS, and Figma to make modern and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}

export default MobileServices