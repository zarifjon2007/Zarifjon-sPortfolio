import React from 'react'
import img from '../assets/myimage.jpg'


const MobileAbout = () => {
  return (
    <>
    <div className="flex flex-col text-white mt-15 container mx-auto">
  <h1 className="text-3xl font-semibold text-center  boder border-l-1 border-r-1  border-purple-500 w-[90%] mx-auto">About me</h1>

  <div className="flex flex-col items-center mt-20 gap-10">
    
    <img src={img} alt="img" className="w-80 rounded-xl" />

    <div className="text-1xl w-full flex text-center">
      <div className="flex flex-col gap-5 max-w-4xl p-4">
        <p>
          I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
        </p>
        <p>
          My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
        </p>

        <div className="space-y-4 mt-7 text-start p-5">
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 cursor-pointer">
            <p className="w-[150px]">HTML & CSS</p>
            <div className="w-[55%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 cursor-pointer">
            <p className="w-[150px]">Tailwind CSS</p>
            <div className="w-[60%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 cursor-pointer">
            <p className="w-[150px]">JavaScript</p>
            <div className="w-[70%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 cursor-pointer">
            <p className="w-[150px]">React JS</p>
            <div className="w-[65%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 text-center mt-18">
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[330px] rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">1+</h1>
      <p className="font-semibold mt-3 text-1xl">YEARS OF EXPERIENCE</p>
    </div>
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[330px] rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">10+</h1>
      <p className="font-semibold mt-3">PROJECTS COMPLETED</p>
    </div>
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[330px] rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">5+</h1>
      <p className="font-semibold mt-3">HAPPY CLIENTS</p>
    </div>
  </div>
</div>

    </>
  )
}

export default MobileAbout
