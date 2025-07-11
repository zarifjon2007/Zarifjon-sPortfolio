import React from 'react'

const MobileServices = () => {
  return (
    <>
            <div id='mservices' className=' container mx-auto text-white mt-8 w-[95%]'>
                <div className=" ">
                    <h1 className="font-bold text-center text-3xl boder border-l-2 border-r-2  border-purple-500  mx-auto w-[100%]"data-aos="fade-up">My Services</h1>
                    <div className=" w-full  mx-auto h-auto overflow-hidden rounded-xl border border-2 border-purple-600 mt-10 cursor-pointer">
                        <div className=" "></div>
                        <div className=" w-90 p-3 "data-aos="fade-up">
                            <h1 className=" text-3xl font-semibold mb-5 "data-aos="fade-up">🌐 Web Development</h1>
                            <p className="text-xl"data-aos="fade-up">
                              Web development is the process of creating websites and web applications. It has two main parts: frontend and backend. Frontend is what users see, like buttons, text, and layout. Backend is what works behind the scenes, like servers and databases. Web developers use tools like HTML, CSS, JavaScript, React, and Node.js. The goal of web development is to build fast, responsive, and user-friendly websites that work well on all devices.                            </p>
                        </div>
                    </div>
                     <div data-aos="fade-up" className=" w-full  mx-auto h-auto overflow-hidden rounded-xl border border-2 border-purple-600 mt-10 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>
                        <div className="p-3">
                            <h1 className=" text-3xl font-semibold mb-5"data-aos="fade-up">🌐 Frontend Development</h1>
                            <p className="text-xl"data-aos="fade-up">
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