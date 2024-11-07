import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const socialMedia = [
    {
      media: (
        <FaFacebookF className=" size-5 hover:text-[#bb9b7d] duration-300" />
      ),
      link: "#",
    },
    {
      media: (
        <FaXTwitter className=" size-5 hover:text-[#bb9b7d] duration-300" />
      ),
      link: "#",
    },
    {
      media: (
        <FaInstagram className=" size-5 hover:text-[#bb9b7d] duration-300" />
      ),
      link: "#",
    },
    {
      media: (
        <FaPinterestP className=" size-5 hover:text-[#bb9b7d] duration-300" />
      ),
      link: "#",
    },
  ];

  const footerLink = [
    {
      title: "Order Assistance",
      link: [
        "Book an Appointment",
        "Shipping & Delivery",
        "Returns & Refunds",
        "Gift Wrapping",
        "Follow your Order",
        "Stores",
      ],
    },
    {
      title: "Company",
      link: [
        "About Us",
        "Awards",
        "Our Mission",
        "Privacy Policy",
        "Press Release",
        "Hire Me",
        "Affiliates and Creators",
      ],
    },
    {
      title: "Support",
      link: [
        "FAQ",
        "Shipping and Returns",
        "Tracking",
        "Size Charts",
        "Gift Cards",
      ],
    },
  ];
  return (
    <div className=" w-full relative imgBgForFooter text-[#f0f0f0]">
      <div className=" px-5 pt-16 sm:px-8">
        <div className=" w-full  border-b border-[#605b5b]  pb-10 xl:flex ">
          <div className=" w-full xl:w-1/3 md:flex xl:block">
            <div className=" w-full md:w-2/3 xl:w-full">
              <img
                src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
                alt="logoImg"
                className=" object-contain"
              />
              <p className=" cursor-default text-sm pr-10 lg:pr-20 mt-16 sm:w-3/4 md:w-full ">
                Quisque eleifend eu dolor a pulvinar. Vestibulum auctor dolor
                justo, a dignissim orci rutrum a. Integer finibus mauris risus.
              </p>
              <div className=" mt-12 flex items-center justify-start gap-5">
                {socialMedia.map((item, index) => (
                  <a key={index} href={item.link}>
                    {item.media}
                  </a>
                ))}
              </div>
            </div>
            <div className=" w-full hidden md:block md:w-1/3 xl:hidden">
              <div className=" w-full">
                <p
                  style={{ letterSpacing: "3px" }}
                  className=" uppercase cursor-default mb-10"
                >
                  {footerLink[0].title}
                </p>
                {footerLink[0].link.map((lin, i) => (
                  <p
                    key={i}
                    className=" cursor-pointer hover:text-[#bb9b7d] duration-300 md:pb-3"
                  >
                    {lin}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full mt-12 xl:mt-3 xl:w-2/3 md:grid md:grid-cols-3 xl:grid-cols-4 ">
            {footerLink.map((item, index) => (
              <div
                key={index}
                className={` w-full ${
                  index === 0 ? " md:hidden xl:block" : ""
                } mt-8 md:mt-0 `}
              >
                <p
                  style={{ letterSpacing: "3px" }}
                  className=" uppercase  cursor-default mb-4 md:mb-10"
                >
                  {item.title}
                </p>
                {item.link.map((lin, i) => (
                  <p
                    key={i}
                    className=" cursor-pointer hover:text-[#bb9b7d] duration-300 pb-1 md:pb-3"
                  >
                    {lin}
                  </p>
                ))}
              </div>
            ))}
            <div className=" w-full">
              <p className=" uppercase tracking-widest cursor-defaultmb-4 md:mb-10">
                Talk to us
              </p>
              <p className="   cursor-default mb-1">Got Questions? Call us</p>
              <p className=" cursor-pointer hover:text-[#bb9b7d] duration-300 pb-5">
                (+11) - 415 - 5552671
              </p>
              <div className=" cursor-pointer hover:text-[#bb9b7d] duration-300 pb-5 flex items-center gap-1">
                <IoMail className=" size-5" /> <p>contact@example.com</p>
              </div>
              <div className=" cursor-default duration-300 pb-4 flex items-start pr-5 gap-1">
                <AiFillHome className=" size-5" />{" "}
                <p className=" ">No 58A, Baltimore Street, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5 w-full px-5 sm:px-8  md:flex items-center justify-between gap-5">
        <div className=" w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <p className=" text-sm cursor-default">
            © 2023 dark fashion, All Rights Reserved
          </p>
        </div>
        <div className=" w-full md:w-1/2 flex items-center justify-center mt-3 md:mt-0 md:justify-end">
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/payment-icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
