import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Footer() {
  const footerLink = ["HOME", "ABOUT  US", "CONTACT", "BLOG"];
  return (
    <div className=" relative w-full px-4 bg-[#f4f1f1] py-10">
      <div className=" z-20 w-full sm:w-9/12 lg:w-7/12 mx-auto shadow bg-[#fffbfa] px-5 py-16 relative">
        <p className=" text-[#282525] text-2xl md:text-4xl font-urbanist w-9/12 mx-auto text-center">
          Register Now and Enjoy a 20% Discount on Your Initial Order!
        </p>
        <div className=" flex items-center font-urbanist mt-10 sm:w-10/12 border border-black  mx-auto">
          <input
            type="text"
            placeholder="Your Email"
            className=" px-3 py-3 w-6/12 sm:w-8/12 outline-none "
            name=""
            id=""
          />
          <p className=" md:text-lg hover:border-[#282525] hover:text-white font-medium py-3 px-3 w-6/12 sm:w-4/12 text-center cursor-pointer hover:bg-[#282525] duration-300 border border-l-black">
            Subscribe
          </p>
        </div>
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/envelope.png"
          className=" absolute -top-16 left-60 scale-75 sm:scale-90 lg:scale-100 sm:left-[88%]"
          alt=""
        />
      </div>
      <div className=" w-full mt-10 font-urbanist font-medium">
        <div className=" text-lg sm:flex items-center justify-center gap-4 ">
          <div className="   flex items-center justify-center gap-4 ">
            <p className=" hover:text-[#4f7942] duration-200 cursor-pointer">
              HOME
            </p>
            <p className=" hover:text-[#4f7942] duration-200 cursor-pointer">
              ABOUT US
            </p>
          </div>
          <div className="  flex items-center justify-center gap-4 mt-1 sm:mt-0 ">
            <p className=" hover:text-[#4f7942] duration-200 cursor-pointer">
              CONTACT
            </p>
            <p className=" hover:text-[#4f7942] duration-200 cursor-pointer">
              BLOG
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full mt-6 font-urbanist font-medium">
        <div className="   sm:flex items-center justify-center gap-4 ">
          <div className="   sm:flex items-center justify-center gap-4 ">
            <p className=" text-center"># +1 (321) 009 008</p>
            <p className="text-center "># EMAIL@EXAMPLE.COM</p>
          </div>
          <div className="  sm:flex items-center justify-center gap-4 mt-1 sm:mt-0 ">
            <p className=" text-center "># EVERYDAY: 9AM - 10PM</p>
            <p className=" text-center"># STORE LOCATOR</p>
          </div>
        </div>
      </div>
      <p className=" w-fit mx-auto text-center text-5xl cursor-pointer lg:text-9xl font-medium mt-10">
        voguify
      </p>
      <div className=" absolute top-[65%]  z-10 -left-[2%]">
        <div className="relative -rotate-[30deg] scale-125 h-80 w-full flex items-center justify-center">
          {/* SVG for the dashed curved path */}
          <svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
            className="absolute top-0 left-0 "
          >
            <path
              id="wavePath"
              d="M 50,100 
              C 100,50 100,150 200,100
              S 300,150 350,100"
              fill="transparent"
              stroke="black"
              strokeDasharray="5,5"
              strokeWidth="1"
            />
          </svg>

          {/* Paper Plane */}
          <FaRegPaperPlane className="paper-plane scale-90 rotate-45 size-6 absolute top-0 left-0" />
        </div>
      </div>
    </div>
  );
}
