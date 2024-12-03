import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { Link } from "react-scroll";

export default function Info({ stateForInfo, setStateForInfo }) {
  const contactInfo = [
    {
      name: "Batticaloa,Sri Lanka",
      icon: <IoLocationOutline className=" size-full" />,
      link: false,
    },
    {
      name: "19th May 2000",
      icon: <MdOutlineDateRange className=" size-full" />,
      link: false,
    },
    {
      name: "+94772206069",
      icon: <FaWhatsapp className=" size-full" />,
      link: false,
    },
    {
      name: "Benihin Mahendra",
      icon: <TbBrandLinkedin className=" size-full" />,
      link: false,
    },
    {
      name: "mahendrabenihin@gmail.com",
      icon: <MdAlternateEmail className=" size-full" />,
      link: false,
    },
    {
      name: "Benihin-Dev",
      icon: <LuGithub className=" size-full" />,
      link: false,
    },
  ];
  return (
    <div className=" flex h-fit relative">
      <div className="w-[10px] md:w-[9vw] sm:w-[4vw] border border-[#1f1f1f] border-r-transparent  bg-[#ff4a3b] relative">
        <div
          style={{
            background: "linear-gradient(-90deg, transparent, #1f1f1fa7)",
          }}
          className=" pointer-events-none w-[500%] sm:w-[150%] absolute h-full top-0 left-0 "
        ></div>
      </div>
      <div className=" pt-8 border border-[#1f1f1f] pb-5 border-l-transparent  w-max bg-[#ff4a3b]  text-[#1f1f1f] rounded-se-3xl ">
        <h1 className=" w-full text- end text-xl font-light  text-[#eae5e5] tracking-wide">
          _Benihin Mahendra
        </h1>
        <div className=" mt-5 px-8 sm:px-10 space-y-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer justify-start gap-4 hover:text-[#e3dddd] duration-300"
            >
              <div className="size-5">{item.icon}</div>
              <h2 className="text-sm leading-4 tracking-wi de font-medium">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
        <div className=" w-full flex items-center justify-end pr-5"></div>
        <Link
          to={"footer"}
          smooth={true}
          duration={400}
          spy={true}
          offset={-20}
        >
          <div className=" group text-center border-[#1f1f1f] py-1 absolute top-[105%] right-0  hover:font-medium  cursor-pointer  border  bg-[#ff4a3b]     text-[#ffffff] tracking-widest   hover:border-white  hover:shadow-md shadow-white duration-300 leading-1 font-italiana bg-wh ite w-full rounded-ee-xl">
            <div className=" w-full h-full text-center relative">
              Hire Me
              <div
                style={{
                  background: "linear-gradient(-90deg, transparent, #1f1f1fa7)",
                }}
                className=" -top-[5px] pointer-events-none  duration-300 -left-[2px] h-[145%] py-1
           w-1/3 bg-white absolute   "
              ></div>
              <div className=" text-[#bbb7b7] size-10 absolute movingAnimation bottom-[10%] pointer-events-none left-[102%]   ">
                <HiOutlineArrowTrendingDown className=" rotate-90 size-full" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" top-[35%] rotate-90 translate-y-[100%] translate-x-[44.5%]   right-0 trapezoid-reversed absolute"></div>
      <PiArrowFatLinesLeftFill
        onClick={() => {
          setStateForInfo(!stateForInfo);
        }}
        className=" absolute top-2 right-4 size-7 hover:text-[#e5e3e3] duration-300 cursor-pointer"
      />
    </div>
  );
}
