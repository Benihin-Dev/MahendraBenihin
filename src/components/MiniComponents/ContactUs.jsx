import React from "react";
import CloseBtn from "./CloseBtn";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MainBtn from "./MainBtn";

export default function ContactUs({ setStateForContactUs }) {
  const images = [
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-3.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-1.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-1.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-2.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-2.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-6.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-4.jpg",
    "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-3.jpg",
  ];

  const socialMedia = [
    <FaFacebookF className="  size-[18px]" />,
    <FaInstagram className="  size-5" />,
    <FaXTwitter className="  size-[18px]" />,
    <FaYoutube className="  size-5" />,
  ];

  return (
    <div className=" z-40  text-[#f0f0f0] fixed xl:block hidden h-full w-full top-0 left-0 bg-[#0000004f]">
      <div className=" relative h-full w-full">
        {/* <div
            onClick={() => {
              // setStateForSmNavSection(false);
            }}
            className="w-1/3 sm:w-3/4 absolute left-0 top-0 h-full bg-transparent"
          ></div> */}
        <div className=" translate-x-[100%] overflow-y-scroll customsScrollbar cursor-default slideFromRight absolute top-0   py-5 right-0 w-2/3 sm:w-1/4 h-full bg-[#23201e]  ">
          <div
            onClick={() => {
              setStateForContactUs(false);
            }}
            className="    absolute top-0 right-0"
          >
            <CloseBtn bgColor={"#23201e"} />
          </div>
          <div className=" w-full py-5 px-7  ">
            <img
              src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
              alt="logoImg"
              className="object-contain"
            />
            <p className="   mt-8 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <MainBtn text={"View All"} />
            <div className=" w-full grid grid-cols-4 gap-4 mt-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className=" w-full overflow-hidden group cursor-pointer "
                >
                  <img
                    src={image}
                    alt={image}
                    className=" object-cover w-full group-hover:scale-100 scale-125 duration-500"
                  />
                </div>
              ))}
            </div>
            <div className=" mt-12">
              <p className=" text-4xl font-medium">We are Social</p>
            </div>
            <div className=" w-full flex items-center justify-start gap-4 mt-4">
              {socialMedia.map((icon, index) => (
                <div
                  key={index}
                  className=" size-8 cursor-pointer hover:text-[#a48b6d] hover:border-[#a48b6d] duration-300 flex items-center justify-center rounded-full border text-gray-400 border-gray-400"
                >
                  {icon}
                </div>
              ))}
            </div>
            <p className=" text-4xl font-medium mt-12">Contact Us</p>

            <div className=" mt-3">
              <div className=" flex items-center gap-2 group cursor-pointer">
                <FaPhoneAlt className=" size-4" />
                <p className="  text-sm group-hover:text-[#bb9d7b] duration-300">
                  000 - 123 - 456789
                </p>
              </div>
              <div className=" flex items-center gap-2 group cursor-pointer">
                <IoIosMail className=" size-5" />
                <p className=" text-sm group-hover:text-[#bb9d7b] duration-300">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
