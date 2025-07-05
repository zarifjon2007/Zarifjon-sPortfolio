import React from 'react'
import img from '../assets/myimage.jpg'
const MobileHero = () => {
  return (
    <>
      <div className='text-white text-center mt-5'>
        <div className='p-[3px] w-[200px] rounded-full bg-gradient-to-r from-purple-800 to-pink-600 container  mx-auto'>
            <img src={img} alt="img" className='w-[200px] rounded-[50%]'/>
        </div>
        <div className=' container mx-auto leading-tight tracking-wider p-5'>
            <h1 className='text-3xl font-bold boder border-l-1 border-r-1 border--1 border-purple-500 '><span className=' font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>I'm Zarifjon Khamdamov,</span>frontend devoloper based in Uzbekistan.</h1>
            <p className='mt-5 text-1xl'>I am frontend devoloper from Uzbekistan with 1 years of experience in IT.You can learn more about me on this site. Welcome!</p>
        </div>
        <div className='flex grid cols-2 gap-7  justify-center mt-10'>
          <button className='w-[370px]  bg-linear-65 from-purple-800 to-pink-600 px-5 py-3 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-90 transition duration-300 max-lg:px-4 '>Connect with me</button>
          <button className='w-[370px] border border-1 border-white px-5 py-3 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-90 transition duration-300 max-lg:px-4 '>My resume</button>
        </div>
      </div>
    </>
  )
}

export default MobileHero