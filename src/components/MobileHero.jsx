import React from 'react'
import img from '../assets/myimage.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const MobileHero = () => {
  return (
    <>
      <div id='mhome' className='text-white text-center mt-5 w-[95%] flex flex-col container mx-auto'>
        <div className='p-[3px] w-[200px] rounded-full bg-gradient-to-r from-purple-800 to-pink-600 container  mx-auto'data-aos="zoom-in">
            <img src={img} alt="img" className='w-[200px] rounded-[50%]'/>
        </div>
        <div className=' container mx-auto leading-tight tracking-wider'>
            <h1 className='text-3xl font-bold boder border-l-2 border-r-2 border-purple-500 'data-aos="fade-left"><span className=' font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>I'm Zarifjon Khamdamov,</span>frontend devoloper based in Uzbekistan.</h1>
            <p className='mt-5 'data-aos="fade-left">I am frontend devoloper from Uzbekistan with 1 years of experience in IT.You can learn more about me on this site. Welcome!</p>
        </div>
        <div className='flex grid cols-2 gap-7  justify-center mt-10'>
          <button data-aos="fade-up" className='w-[370px] text-xl bg-linear-65 from-purple-800 to-pink-600 px-5 py-3 rounded-[40px] font-outfit outline-none  active:scale-90 transition duration-300 max-lg:px-4 '><AnchorLink className='anchor-link' offset={50} href='#mcontact'><p onClick={()=> setMenu("mcontact")}>Connect with me</p></AnchorLink></button>
          <button data-aos="fade-up" className='w-[370px] text-xl border border-1 border-white px-5 py-3 rounded-[40px] font-outfit outline-none  active:scale-90 transition duration-300 max-lg:px-4 '>My resume</button>
        </div>
      </div>
    </>
  )
}

export default MobileHero