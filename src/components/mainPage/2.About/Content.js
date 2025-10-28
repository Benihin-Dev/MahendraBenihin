import React from "react";
import { ReactTyped } from "react-typed";
import profileImg from "../../imgs/profilePic.png";
import { useInView } from "react-intersection-observer";

export default function Content() {
  //handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
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

  const { ref: sixthRef, inView: sixthInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div className=" w-full px-5 sm:px-0 gap-5 sm:w-11/12 pt-0 pb-10 sm:pt-12 md:pt-24 md:w-10/12 mx-auto md:flex items-end">
      <div className="md:hidden  md:w-2/5 h-fit">
        <img src={profileImg} alt="" className=" w-2/4  ml-auto" />
      </div>
      <div className=" w-full md:w-3/5">
        <h6
          ref={firstRef}
          className={`text-[#2f80ed] tracking-widest  pb-5 cursor-default animated-componentfromLeft ${
            firstInView ? "is-visiblefromLeft" : ""
          } `}
        >
          hello..
        </h6>
        <h1
          ref={secondRef}
          className={`animated-componentfromLeft  ${
            secondInView ? "is-visiblefromLeft" : ""
          } cursor-default font-italiana text-white text-3xl md:text-4xl font-thin tracking-widest `}
        >
          <span className="">I'm</span> Benihin{" "}
          <span className=" bg-[#ff4a3b]  ">Mahendra</span>
        </h1>
        <h2
          ref={thirdRef}
          className={`animated-componentfromLeft  ${
            thirdInView ? "is-visiblefromLeft" : ""
          } text-xl font-mediu pb-2 text-[#ff4a3b] `}
        >
          <ReactTyped
            strings={[
              "Web Developer.",
              "Software Engineer.",
              "Web Designer.",
              "MERN Stack Developer.",
            ]}
            typeSpeed={120}
            backSpeed={40}
            loop
          />
        </h2>
        <p
          ref={fourthRef}
          className={`animated-componentfromLeft  ${
            fourthInView ? "is-visiblefromLeft" : ""
          } text-jus tify text-[#d2cece]  cursor-default font-medium text-sm `}
        >
         I am a passionate and innovative ICT graduate from the University of Sri Jayewardenepura with a deep enthusiasm for technology and problem-solving. I aim to build a career as a skilled professional who delivers impactful and user-focused digital solutions. I thrive in collaborative environments and approach every challenge with curiosity and commitment.
        </p>
        <div
          ref={fifthRef}
          className={`animated-componentfromLeft  ${
            fifthInView ? "is-visiblefromLeft" : ""
          } mt-2 sm:mt-1 pr-1 cursor-pointer  flex justify-end items-center `}
        >
          <a href="https://drive.google.com/file/d/1rCA-itmvm722DQ7fWCG-T6_Pmbd3DoPg/view?usp=sharing">
            <button className=" cursor-pointer text-white border rounded-lg duration-300 border-[#2f80ed] hover:bg-[#2f80ed] hover:text-white text-sm pt-[6px] pb-[4px] px-5">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div
        ref={sixthRef}
        className={`animated-componentfromRight  ${
          sixthInView ? "is-componentfromRight" : ""
        } w-full md:w-2/5 pointer-events-none h-fit md:block hidden relative `}
      >
        <img
          src={profileImg}
          alt="profilePic"
          className="  object-contain  md:w-[70%] ml-auto md:mx-auto"
        />
      </div>
    </div>
  );
}
