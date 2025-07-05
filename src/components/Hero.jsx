import React from 'react'
import img from '../assets/myimage.jpg'
import MobileHero from './MobileHero'
const Hero = () => {
  return (
    <>
      <div className='text-white text-center mt-12 max-md:hidden'>
        <div className='p-[5px] w-[300px] rounded-full bg-gradient-to-r from-purple-800 to-pink-600 container  mx-auto'>
            <img src={img} alt="img" className='w-[300px] rounded-[50%] shadow-xl'/>
        </div>
        <div className='leading-tight tracking-wider'>
            <h1 className='text-7xl font-bold leading-tight tracking-wider'><span className=' font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>I'm Zarifjon Khamdamov,</span>frontend <br /> devoloper based in Uzbekistan.</h1>
            <p className='mt-3 text-2xl'>I am frontend devoloper from Uzbekistan with 1 years of experience in IT.You can learn <br />more about me on this site. Welcome!</p>
        </div>
        <div className='flex gap-10 justify-center mt-15'>
          <button className='w-[230px] bg-linear-65 from-purple-800 to-pink-600 px-5 py-4 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-90 transition duration-300 max-lg:px-4 '>Connect with me</button>
          <button className='w-[230px] border border-1 border-white px-5 py-4  rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-90 transition duration-300 max-lg:px-4 '>My resume</button>
        </div>
        
      </div>
      <div className='container mx-auto hidden max-md:block'>
            <MobileHero/>
      </div>
    </>
  )
}

export default Hero