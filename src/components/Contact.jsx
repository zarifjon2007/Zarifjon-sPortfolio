import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import MobileContact from "./MobileContact";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Web3Forms access key
    formData.append("access_key", "53413d20-3fb8-4700-a079-0edc9e884551");

    // Convert to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success:", result);
        alert("Message sent successfully!");
        form.reset(); // 🔁 Formani tozalash
      } else {
        alert("Something went wrong!");
        console.error(result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error!");
    }
  };

  return (
    <>
      <h1
        id="contact"
        className="text-center text-6xl font-bold text-white mt-45 max-md:hidden"data-aos="fade-up"
      >
        Get in touch
      </h1>

      <div className="grid grid-cols-2 text-white mt-15 container mx-auto w-[70%] max-md:hidden">
        {/* Chap tomoni */}
        <div className="flex flex-col gap-7 text-xl"data-aos="fade-right">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
            Let's talk
          </h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex gap-5 items-center">
            <TfiEmail className="text-2xl" />
            <p>zarifjonhamdamov3@gmail.com</p>
          </div>
          <div className="flex gap-5 items-center">
            <PiPhoneCallFill className="text-2xl" />
            <p>+998 50 719 07 57</p>
          </div>
          <div className="flex gap-5 items-center">
            <IoLocationSharp className="text-2xl" />
            <p>UZ, Uzbekistan</p>
          </div>
        </div>

        {/* Forma */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 text-xl"data-aos="fade-left"
        >
          <label className="font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="h-[50px] p-3 bg-gray-800 border-none rounded-md outline-none"
          />

          <label className="font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="h-[50px] p-3 bg-gray-800 border-none rounded-md outline-none"
          />

          <label className="font-semibold">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message..."
            required
            className="w-full h-40 p-3 bg-gray-800 rounded-md border-none outline-none"
          />

          <button
            type="submit" data-aos="fade-left"
            className="w-[230px] bg-gradient-to-r from-purple-800 to-pink-600 px-4 py-3 rounded-[40px] font-outfit cursor-pointer outline-none hover:scale-94 transition duration-300 max-lg:px-4"
          >
            Submit now
          </button>
        </form>
      </div>
      <div className='container mx-auto hidden max-md:block'>
        <MobileContact />
      </div>
    </>
  );
};

export default Contact;
