import React from 'react'
import Card from './Card'

const MobilePortfolio = () => {
  return (
    <>
      <h1 id='mportfolio' className='text-white text-center text-3xl font-bold  border-l-2 border-r-2  border-purple-500 w-[95%] mx-auto mt-10' data-aos="fade-up">My Projects</h1>
      <div className='flex flex-wrap justify-center gap-5 mt-10'>
        <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"data-aos="fade-up">
          <div className=" w-[370px] h-40 overflow-hidden rounded-xl  bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
            <div className=" bg-gradient-to-r from-purple-600 to-pink-600 o"></div>
            <div className=" p-2 text-white">
              <h2 className="text-xl font-bold">01</h2>
              <p className="">Project</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"data-aos="fade-up">
          <div className=" w-[370px] h-40 overflow-hidden rounded-xl  bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
            <div className=" bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
            <div className="  p-2 text-white">
              <h2 className="text-xl font-bold">02</h2>
              <p className="">Project</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer"data-aos="fade-up"
        >
          <div className=" w-[370px] h-40 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
            <div className=" p-2 text-white">
              <h2 className="text-xl font-bold">03</h2>
              <p className="">Project</p>
            </div>
          </div>
        </a>
      </div>
    </>

  )
}

export default MobilePortfolio