import React from "react";
import logoImg from "../../0.HomePage/img/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-full  relative py-10 px-5 sm:px-10 bg-black text-white">
      <div className=" w-full md:flex items-center justify-between gap-5 md:gap-20">
        <div className=" w-full md:w-5/12 font-jost ">
          <p className=" text-3xl pb-4  font-semibold">About Company</p>
          <p className=" text-justify text-[#a3a3a3] md:pr-16  ">
            Our knowledgeable connoisseurs are committed to guiding you through
            our exclusive assortment, ensuring that you find the perfect match
            for your wrist.
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/payment_method.png"
              alt=""
              className=" mt-8"
            />
          </p>
        </div>
        <div className=" w-full md:w-7/12 sm:flex gap-8  font-jost">
          <div className=" w-full sm:w-1/3 mt-8 sm:mt-0">
            <p className=" uppercase text-lg">Links</p>
            <p className=" border-b px-3 mt-3 border-white w-fit"></p>
            <ul className=" space-y-3 text-[#a3a3a3] mt-10">
              <li className=" cursor-pointer hover:text-white duration-200 leading-4">
                Shipping
              </li>
              <li className=" cursor-pointer hover:text-white duration-200 leading-4">
                Returning Conditions
              </li>
              <li className=" cursor-pointer hover:text-white duration-200 leading-4">
                Guarantee Policy
              </li>
              <li className=" cursor-pointer hover:text-white duration-200 leading-4">
                User Agreement
              </li>
              <li className=" cursor-pointer hover:text-white duration-200 leading-4">
                Terms
              </li>
            </ul>
          </div>
          <div className=" w-full sm:w-2/3 mt-8 sm:mt-0">
            <p className=" uppercase text-lg">NEWSLETTERS</p>
            <p className=" border-b px-3 mt-3 border-white w-fit"></p>
            <p className=" mt-8 text-[#a3a3a3] duration-200 leading-4">
              Get updates by subscribe our weekly newsletter
            </p>
            <div className=" w-full flex items-center rounded-sm overflow-hidden mt-12">
              <input
                type="text"
                placeholder="Your Email Address"
                name=""
                id=""
                className=" outline-none px-3 bg-[#292929] py-4 text-sm w-7/12"
              />
              <div className=" w-5/12 px-3 py-4 text-center cursor-pointer bg-[#ddac55] text-white text-sm  hover:bg-[#c39648] duration-200">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full sm:flex items-center gap-5 justify-between mt-16">
        <div className=" w-full flex sm:block items-center justify-center sm:w-fit">
          <img src={logoImg} className=" h-16 object-contain" alt="" />
        </div>
        <ul className=" w-full sm:w-fit flex  gap-3 items-center mt-4 sm:mt-0 justify-center">
          <li className=" size-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#ddac55] cursor-pointer duration-300">
            <FaXTwitter className=" size-5" />
          </li>
          <li className=" size-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#ddac55] cursor-pointer duration-300">
            <FaYoutube className=" size-5" />
          </li>
          <li className=" size-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#ddac55] cursor-pointer duration-300">
            <FaLinkedinIn className="size-5" />
          </li>
        </ul>
      </div>
    </div>
  );
}
