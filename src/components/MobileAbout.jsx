import React from 'react'
import img from '../assets/myimage.jpg'


const MobileAbout = () => {
  return (
    <>
    <div id='mabout' className="flex flex-col text-white mt-15 container mx-auto ">
  <h1 className="text-3xl font-semibold text-center  boder border-l-2 border-r-2  border-purple-500 w-[95%] mx-auto"data-aos="fade-up">About me</h1>

  <div className="flex flex-col items-center mt-20 gap-10">
    
    <img src={img} alt="img" className="w-93 rounded-xl" data-aos="zoom-in" />

    <div className="text-xl w-full flex text-center">
      <div className="flex flex-col gap-5 max-w-4xl p-4">
        <p data-aos="fade-up">
          I am a passionate and dedicated Frontend Developer currently building my skills and experience in modern web development. I enjoy creating responsive, user-friendly websites using technologies like HTML, CSS, Tailwind CSS, and JavaScript.
        </p>
        <p data-aos="fade-up">
          I'm constantly learning and improving through hands-on projects, and I’m excited to grow by working on real-world challenges. My goal is to deliver clean, efficient, and visually appealing web interfaces that offer great user experiences.
        </p>

        <div className="space-y-5 mt-7 text-start text-2xl w-[95%]">
          <div className="flex items-center gap-6 hover:scale-105 transition duration-300 "data-aos="fade-up">
            <p className="w-[150px]">HTML & CSS</p>
            <div className="w-[55%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 "data-aos="fade-up">
            <p className="w-[160px]">Tailwind CSS</p>
            <div className="w-[60%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 "data-aos="fade-up">
            <p className="w-[150px]">JavaScript</p>
            <div className="w-[70%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition duration-300 "data-aos="fade-up">
            <p className="w-[150px]">React JS</p>
            <div className="w-[65%] h-[5px] bg-gradient-to-r from-purple-800 to-pink-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 text-center mt-18 w-[95%] container mx-auto ">
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[100%] rounded-xl active:bg-gray-800 "data-aos="fade-up">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">1+</h1>
      <p className="font-semibold mt-3 text-xl">YEARS OF EXPERIENCE</p>
    </div>
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[100%] rounded-xl active:bg-gray-800"data-aos="fade-up">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">10+</h1>
      <p className="font-semibold mt-3 text-xl">PROJECTS COMPLETED</p>
    </div>
    <div className="border border-2 border-purple-600 container mx-auto p-14 w-[100%] rounded-xl active:bg-gray-800"data-aos="fade-up">
      <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">5+</h1>
      <p className="font-semibold mt-3 text-xl">HAPPY CLIENTS</p>
    </div>
  </div>
</div>

    </>
  )
}

export default MobileAbout
