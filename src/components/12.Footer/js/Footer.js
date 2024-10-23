import React from "react";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
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
      title: "Koka",
      links: ["About", "Journal", "Account", "Lookbook"],
    },
  ];
  return (
    <div className=" w-full pt-10 relative bg-[#f0f0f0]">
      <div className=" w-full border-b pb-5">
        <div className=" w-full px-5 lg:flex gap-8">
          <div className=" w-full lg:3/5 sm:flex gap-10">
            <div className=" w-full sm:w-1/2">
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
            <div className=" mt-10 sm:mt-0 w-full sm:w-1/2 grid grid-cols-2 gap-8">
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
          <div className=" w-full lg:2/5 sm:flex mt-5">
            <div className=" w-full sm:w-1/2">
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
            <div className=" w-full sm:w-1/2 text-[#5a5a5a] mt-10 sm:mt-0">
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
      <div className=" w-full px-5 border-t py-3 items-center justify-between space-y-2 md:space-y-0 md:flex gap-3">
        <p className=" w-full text-center md:w-fit pb-2 text-gray-900 cursor-pointer capitalize hover:text-[#b05d5d] duration-300">
          Hello@Koka.com
        </p>
        <img
          src={paymentImg}
          className=" w-full md:w-fit md:h-10 object-contain"
          alt=""
        />
        <p className=" cursor-default  w-full text-center md:w-fit">
          © Copyright, Koka, 2024
        </p>
      </div>
    </div>
  );
}
