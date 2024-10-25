import React, { useState } from "react";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuPlus, LuMinus } from "react-icons/lu";
import paymentImg from "../img/payment.png";

export default function Footer() {
  const footerLink = [
    {
      title: "Presents",
      links: [
        "Sales Platform",
        "Marketing Platform",
        "Partners Platform",
        "Conversations",
        "Product Updates",
      ],
    },
    {
      title: "shop",
      links: [
        "Shop All",
        "Sale",
        "Discount Store",
        "Offer Zone",
        "Basic Collection",
      ],
    },
    {
      title: "Fashion",
      links: ["About", "Journal", "Account", "Lookbook"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFooterLinks = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className=" w-full pt-10 relative bg-[#f0f0f0]">
      <div className=" w-full border-b pb-5">
        <div className=" w-full px-6 sm:px-10 xl:flex gap-8">
          <div className=" w-full xl:w-3/5 sm:flex gap-10">
            <div className=" w-full md:w-1/2">
              <p className=" font-semibold text-2xl">
                Get Active <span className=" italic">Updates</span>
              </p>
              <p className=" text-[#5a5a5a] py-5">
                Pharetra diam sit amet nisl suscipit adipiscing bibendum. Orci
                sagittis eu volutpat.
              </p>
              <div className=" my-4 flex border shadow">
                <input
                  type="text"
                  placeholder="Enter You Mail Id"
                  name=""
                  id=""
                  className=" w-7/12 focus:border border-black duration-300 bg-white outline-none py-3 px-2"
                />
                <button className=" w-5/12  px-2 py-3 bg-black hover:bg-[#b05d5d] text-white duration-300">
                  SUBMIT NOW
                </button>
              </div>
              <p className=" text-sm">
                Subscribe Today To Get a Special Discount!
              </p>
            </div>
            <div className=" mt-10 sm:mt-0 w-full sm:w-1/2 hidden md:grid grid-cols-2 gap-8">
              {footerLink.map((item, index) => (
                <div key={index} className={` ${index === 2 ? "hidden" : ""}`}>
                  <p className=" font-medium cursor-default pb-5 uppercase tracking-widest ">
                    {item.title}
                  </p>
                  {item.links.map((link, i) => (
                    <p
                      key={i}
                      className=" pb-2 text-gray-900 cursor-pointer capitalize hover:text-[#b05d5d] duration-300"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-5 md:hidden">
            {footerLink.map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer w-full flex items-center justify-between gap-3 px-4 py-3 text-lg  border"
                  onClick={() => toggleFooterLinks(index)}
                >
                  <p className=" uppercase">{item.title}</p>
                  {activeIndex === index ? (
                    <LuMinus className="size-5 text-gray-400 cursor-pointer hover:text-[#b05d5d] duration-300" />
                  ) : (
                    <LuPlus className="size-5 text-gray-400 cursor-pointer hover:text-[#b05d5d] duration-300" />
                  )}
                </div>
                <div
                  className={`overflow-hidden py-2 transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.links.map((link, i) => (
                    <p
                      key={i}
                      className="pl-3 pr-2 py-2 text-justify hover:text-[#b05d5d] duration-300"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full xl:w-2/5  md:flex mt-5 xl:mt-0 ">
            <div className=" w-full md:w-2/5 hidden md:block">
              {footerLink.map((item, index) => (
                <div key={index} className={` ${index !== 2 ? "hidden" : ""}`}>
                  <p className=" font-medium cursor-default pb-5 uppercase tracking-widest ">
                    {item.title}
                  </p>
                  {item.links.map((link, i) => (
                    <p
                      key={i}
                      className=" pb-2 text-gray-900 cursor-pointer capitalize hover:text-[#b05d5d] duration-300"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className=" w-full md:w-3/5 text-[#5a5a5a] mt-10 sm:mt-0">
              <p className=" uppercase pb-4">Credits</p>
              <p>
                Dui nunc mattis enim ut tellus elementum sagittis vitae et. Vel
                quam elementum pulvinar etiam non quam gravida arcu ac tortor
                dignissi.
              </p>
              <div className=" flex items-center justify-start gap-6 text-black mt-6">
                <FaFacebookF className=" cursor-pointer hover:text-[#b05d5d] duration-300 size-6" />
                <FaXTwitter className=" cursor-pointer hover:text-[#b05d5d] duration-300 size-6" />
                <FaPinterest className=" cursor-pointer hover:text-[#b05d5d] duration-300 size-6" />
                <FaInstagram className=" cursor-pointer hover:text-[#b05d5d] duration-300 size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  text-sm px-6 sm:px-10 border-t py-2 items-center justify-between space-y-2 md:space-y-0 md:flex gap-3">
        <p className=" w-full text-center md:w-fit pb-2 text-gray-900 cursor-pointer capitalize hover:text-[#b05d5d] duration-300">
          Hello@Fashion.com
        </p>
        <img
          src={paymentImg}
          className=" w-full md:w-fit md:h-10 object-contain"
          alt=""
        />
        <p className=" cursor-default  w-full text-center md:w-fit">
          © Copyright, Fashion, 2024
        </p>
      </div>
    </div>
  );
}
