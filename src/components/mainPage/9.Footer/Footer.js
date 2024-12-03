import React from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Footer() {
  const contactInfo = [
    {
      name: "+94772206069",
      icon: <BsTelephone className=" size-full" />,
      link: false,
    },
    {
      name: "mahendrabenihin@gmail.com",
      icon: <MdAlternateEmail className=" size-full" />,
      link: false,
    },
    {
      name: "Beach Road, Saththurakondan, Batticaloa, Sri Lanka.",
      icon: <IoLocationOutline className=" size-full" />,
      link: false,
    },
  ];

  const socialLinks = [
    { media: "LinkedIn", link: "https://www.linkedin.com/in/benihin-mahendra" },
    { media: "WhatsApp", link: "https://wa.me/0772206069" },
    { media: "Git-Hub", link: "https://github.com/benihin-Dev" },
  ];

  return (
    <>
      <div className=" w-full bg-[#262626] py-10 relative">
        <div className=" w-full md:flex items-end justify-between">
          <div className=" px-5 md:px-0 md:w-[60%] flex items-end">
            <div className=" hidden md:flex md:w-[9vw]   "></div>
            <div>
              <h1 className=" text-2xl text-white cursor-default">
                _Benihin Mahendra
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className=" w-full space-y-2 ">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start text-[#c2b4b4] cursor-pointer justify-start gap-2 hover:text-[#ff4a3b] duration-300"
                    >
                      <div className="w-5">
                        <div className=" size-5">{item.icon}</div>
                      </div>
                      <h2 className="text-sm leading-4 font-medium mt-[2px]">
                        {item.name}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className=" w-full mt-3 sm:mt-0 flex pl-3 sm:pl-0 sm:justify-center ">
                  <div className="grid grid-cols-1 gap-2">
                    {socialLinks.map((item, index) => (
                      <a href={item.link} key={index} className=" ">
                        <div className="flex items-start text-[#c2b4b4] cursor-pointer justify-start gap-2 hover:text-[#ff4a3b] duration-300">
                          <h2 className="text-sm tracking-wide leading-4 font-medium mt-[2px]">
                            {item.media}
                          </h2>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[30%] mt-10 md:mt-0 px-5 md:px-0 flex items-center justify-end  relative   ">
            <div className=" w-full ">
              <h1 className=" text-[#ff4a3b] cursor-default font-medium text-6xl font-italiana text-end">
                Join My Network!
              </h1>
              <h2 className=" cursor-default text-[#ffffff] text-sm  text-end tracking-wider">
                Subscribe to receive occasional updates about my work and ideas.
              </h2>
              <div className="rounded-md border hover:border-white duration-300 border-gray-500 flex items-center justify-end mt-4 bg-transparent">
                <input
                  type="email"
                  className=" w-full outline-none  text-white px-4 py-3  bg-transparent"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                />
                <div className=" w-12 h-2  flex items-center justify-center">
                  <HiOutlineArrowTrendingUp className=" size-6 text-[#ff4b3b9e] " />
                </div>
              </div>
            </div>
            <div className=" hidden md:flex md:w-[9vw]  bg-white    "></div>
            <div className=" absolute -left-0 md:-left-20 top-16 sm:top-8 md:top-28 movingAnimation pointer-events-none">
              <img
                src="https://html.envalabdemos.com/unded/assets/images/service/arrow-shape.png"
                alt=""
                className="  size-24 md:size-28 object-contain rotate-[205deg] "
              />
            </div>
          </div>
        </div>
        <Link to={"about"} smooth={true} duration={800} spy={true} offset={-20}>
          <div className=" z-40  absolute top-0 right-5 size-10 group flex items-center justify-center bg-[#ff4a3b]">
            <PiArrowFatLinesLeftFill className=" rotate-90 size-5 text-[#1f1f1f] group-hover:text-white duration-300 cursor-pointer" />
          </div>
        </Link>
      </div>
      <div className=" py-3 w-full px-5  bg-[#ff4a3b] lowercase text-[#white]">
        <p className=" w-full text-center leading-6 cursor-default">
          - Every line of code brings you closer to your goals -
        </p>
      </div>
    </>
  );
}
