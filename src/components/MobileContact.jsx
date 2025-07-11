import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { PiPhoneCallFill } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';

const MobileContact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "53413d20-3fb8-4700-a079-0edc9e884551");

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
        alert("✅ Message sent successfully!");
        form.reset(); // Formani tozalash
      } else {
        alert("❌ Message failed to send. Please try again.");
        console.error(result);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("❌ Network error. Try again later.");
    }
  };

  return (
    <>
      <h1
        id="mcontact"data-aos="fade-up"
        className="text-center text-4xl font-bold text-white mt-5  border-l-2 border-r-2 border-purple-500 w-[95%] mx-auto"
      >
        Get in touch
      </h1>

      <div className="flex flex-col gap-5 text-white mt-9 container mx-auto w-[90%]">
        <div className="flex flex-col gap-4 text-xl">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent"data-aos="fade-up">
            Let's talk
          </h1>
          <p data-aos="fade-up">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on. You can
            contact anytime.
          </p>
          <div className="flex gap-5 items-center"data-aos="fade-up">
            <TfiEmail className="text-2xl" />
            <p>zarifjonhamdamov3@gmail.com</p>
          </div>
          <div className="flex gap-5 items-center"data-aos="fade-up">
            <PiPhoneCallFill className="text-2xl" />
            <p>+998 50 719 07 57</p>
          </div>
          <div className="flex gap-5 items-center"data-aos="fade-up">
            <IoLocationSharp className="text-2xl" />
            <p>UZ, Uzbekistan</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-7 text-xl">
          <label className="font-semibold"data-aos="fade-up">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="h-[50px] p-3 bg-gray-800 border-none rounded-md outline-none"data-aos="fade-up"
          />

          <label className="font-semibold"data-aos="fade-up">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="h-[50px] p-3 bg-gray-800 border-none rounded-md outline-none"data-aos="fade-up"
          />

          <label className="font-semibold"data-aos="fade-up">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message..."
            required
            className="w-full h-40 p-3 bg-gray-800 rounded-md border-none outline-none"data-aos="fade-up"
          ></textarea>

          <button
            type="submit"data-aos="fade-up"
            className="w-[230px] bg-gradient-to-r from-purple-800 to-pink-600 px-3 py-3 rounded-[40px] font-outfit cursor-pointer active:scale-94 transition duration-300"
          >
            Submit now
          </button>
        </form>
      </div>
    </>
  );
};

export default MobileContact;
