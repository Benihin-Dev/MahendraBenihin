import React, { useState, useEffect } from "react";
import SliderForWhatIDo from "./SliderForWhatIDo";
import { useInView } from "react-intersection-observer";

import { MdOutlineDesignServices } from "react-icons/md";
import { GoFileCode } from "react-icons/go";
import { TbAdjustmentsCode } from "react-icons/tb";
import { TbDevicesCode } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";

export default function WhatIDo() {
  //handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const { ref: fourthRef, inView: fourthInView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const { ref: fifthRef, inView: fifthInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  //data for what i do
  const whatIDo = [
    {
      img: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/web-design-header.jpg?itok=4d7TmUMl",
      title: "Web Development",
      subtitle: "Building Functional Websites",
      desc: "Creating fully functional and responsive websites using technologies like HTML, CSS, JavaScript, and frameworks like React and Angular.",
      icon: <GoFileCode className=" size-full text-[#1f37bf39]" />,
    },
    {
      img: "https://i.ytimg.com/vi/bRVbbbZ76j4/maxresdefault.jpg",
      title: "Front-End Development",
      subtitle: "Crafting User Interfaces",
      desc: "Designing and implementing dynamic, interactive user interfaces using modern front-end technologies such as React, Vue.js, and Tailwind CSS.",
      icon: <FaReact className=" size-full text-[#08daff7c]" />,
    },
    {
      img: "https://dm1wsvzj3kcu0.cloudfront.net/wp-content/uploads/2023/06/Node-JS-Feature-Image.jpg",
      title: "Back-End Development",
      subtitle: "Building Server-Side Logic",
      desc: "Developing robust server-side logic, APIs, and databases using Node.js, Express, and MongoDB to ensure seamless communication with front-end systems.",
      icon: <FaNode className=" text-[#90ca5271] size-full" />,
    },
    {
      img: "https://618media.com/wp-content/uploads/2024/01/custom-illustrations-personalizing-web-design.webp",
      title: "Custom Web Solutions",
      subtitle: "Tailored Web Applications",
      desc: "Designing and building customized web applications to meet unique business needs using full-stack development tools and technologies.",
      icon: <TbAdjustmentsCode className=" size-full text-[#1f37bf60]" />,
    },
    {
      img: "https://www.dexterstudio.lk/wp-content/uploads/2024/04/01-1024x836.jpg",
      title: "Web Designing",
      subtitle: "Creating Aesthetic Web Interfaces",
      desc: "Designing visually appealing web layouts with tools like Figma, Adobe XD, and implementing them using CSS, Bootstrap, and modern design principles.",
      icon: (
        <MdOutlineDesignServices className=" size-full text-[#ff4b3b53]  " />
      ),
    },
    {
      img: "https://gdcitsolutions.com/wp-content/uploads/Framework-Responsive-Design.jpg",
      title: "Responsive Design",
      subtitle: "Optimizing for All Devices",
      desc: "Ensuring websites adapt seamlessly across all devices using CSS Grid, Flexbox, and media queries for an excellent user experience.",
      icon: <TbDevicesCode className=" size-full text-[#1f37bf87]" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isFading, setIsFading] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(currentIndex);

  useEffect(() => {
    // Automatic index change
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === whatIDo.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [whatIDo.length]);

  useEffect(() => {
    // Trigger fade-out animation
    setIsFading(true);

    const timeout = setTimeout(() => {
      // After fade-out, update the content and trigger fade-in
      setVisibleIndex(currentIndex);
      setIsFading(false);
    }, 500); // Match this duration to your CSS transition time

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className=" w-full relative pt-20 sm:pt-24 lg:pt-40 sm:pb-20">
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-11/12 md:w-10/12 gap-5 lg:gap-10 md:flex ">
        <div className="w-full md:w-3/5"></div>
        <div className="w-full cursor-default md:w-2/5 text-end capitalize text-[#2f80ed] tracking-widest pb-12">
          What i do_
        </div>
      </div>
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-11/12 md:w-10/12 gap-5 lg:gap-10 md:flex items-end">
        <div
          ref={firstRef}
          className={`animated-component  ${
            firstInView ? "is-visible " : ""
          } w-full md:w-3/5 `}
        >
          <SliderForWhatIDo
            data={whatIDo}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div
          className={`w-full md:w-2/5 mb-20 mt-5 md:mt-0 text-white h-full relative transition-all duration-500 ${
            isFading ? "opacity-0 " : "opacity-100  "
          }`}
        >
          <div className="w-full flex items-center justify-end">
            <div
              ref={secondRef}
              className={`animated-componentfromRight  ${
                secondInView ? "is-componentfromRight " : ""
              } size-32 `}
            >
              {whatIDo[visibleIndex].icon}
            </div>
          </div>
          <h2
            ref={thirdRef}
            className={`animated-componentfromRight  ${
              thirdInView ? "is-componentfromRight " : ""
            } tracking-widest text-lg cursor-default text-[#ff4a3b] pb-4 `}
          >
            _{whatIDo[visibleIndex].title}
          </h2>
          <h3
            ref={fourthRef}
            className={`animated-componentfromRight  ${
              fourthInView ? "is-componentfromRight " : ""
            } font-italiana font-light cursor-defaulte text-4xl pb-5 `}
          >
            {whatIDo[visibleIndex].subtitle}
          </h3>
          <p
            ref={fifthRef}
            className={`animated-componentfromRight  ${
              fifthInView ? "is-componentfromRight " : ""
            }leading-6 cursor-default `}
          >
            {whatIDo[visibleIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
