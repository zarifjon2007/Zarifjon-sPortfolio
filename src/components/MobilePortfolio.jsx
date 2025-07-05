import React from 'react'
import Card from './Card'

const MobilePortfolio = () => {
    return (
      <>  
      <h1 className='text-white text-center text-3xl font-bold boder border-l-1 border-r-1  border-purple-500 w-[90%] mx-auto mt-10'>My Projects</h1>
        <div className='flex flex-wrap justify-center gap-5 mt-10'>
  <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer">
    <div className="relative group w-[340px] h-40 overflow-hidden rounded-xl cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
      <div className="relative z-10 p-2 text-white">
        <h2 className="text-xl font-bold">Project 1</h2>
        <p className="text-sm">Description</p>
      </div>
    </div>
  </a>

  <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer">
    <div className="relative group w-[340px] h-40 overflow-hidden rounded-xl cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
      <div className="relative z-10 p-2 text-white">
        <h2 className="text-xl font-bold">Project 2</h2>
        <p className="text-sm">Description</p>
      </div>
    </div>
  </a>

  <a href="https://github.com/zarifjon2007" target="_blank" rel="noopener noreferrer">
    <div className="relative group w-[340px] h-40 overflow-hidden rounded-xl cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 border border-none">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
      <div className="relative z-10 p-2 text-white">
        <h2 className="text-xl font-bold">Project 3</h2>
        <p className="text-sm">Description</p>
      </div>
    </div>
  </a>
</div>
</>

    )
}

export default MobilePortfolio