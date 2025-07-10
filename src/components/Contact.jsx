import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import MobileContact from './MobileContact';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53413d20-3fb8-4700-a079-0edc9e884551");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (

    <>
      <h1 id='contact' className='text-center text-6xl font-bold text-white mt-45 max-md:hidden'>Get in touch</h1>
      <div className='grid grid-cols-2 text-white mt-15 container mx-auto w-[70%] max-md:hidden'>
        <div className='flex flex-col gap-7 text-xl'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>Let's talk</h1>
          <p className=''>I'm currently available to take on new projects,so feel free to <br />send me o messages about anyting that you want me to work <br /> on.You can contact anytime.</p>
          <div className='flex gap-5 items-center'>
            <TfiEmail className='text-2xl' />
            <p>zarifjonhamdamov3@gmail.com</p>
          </div>
          <div className='flex gap-5 items-center'>
            <PiPhoneCallFill className='text-2xl' />
            <p>+998 507190757</p>
          </div>
          <div className='flex gap-5 items-center'>
            <IoLocationSharp className='text-2xl' />
            <p>UZ, Uzbekitan</p>
          </div>
        </div>
        <form className='flex flex-col gap-4 text-xl' onSubmit={onSubmit}>
          <label className='font-semibold'>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            className='h-[50px] p-3 bg-gray-800 boder-none rounded-md outline-none'
          />
          <label className='font-semibold'>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            className='h-[50px] p-3 bg-gray-800 boder-none rounded-md outline-none'
          />
          <label className='font-semibold'>Write your message here</label>
          <textarea
            name="message"
            className="w-full h-40 p-3 border bg-gray-800 rounded-md border-none  outline-none"
            placeholder="Enter your message..."
          />
          <button
            type='submit'
            className='w-[230px] bg-linear-65 from-purple-800 to-pink-600 px-4 py-3 rounded-[40px] font-outfit cursor-pointer outline-none  hover:scale-94 transition duration-300 max-lg:px-4 '
          >
            Submit now
          </button>
        </form>

      </div>
      <div className='container mx-auto hidden max-md:block'>
        <MobileContact />
      </div>

    </>
  )
}

export default Contact