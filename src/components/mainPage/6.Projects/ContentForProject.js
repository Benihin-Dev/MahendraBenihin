import React from "react";
import SliderForProject from "./SliderForProject";
import { useInView } from "react-intersection-observer";

export default function ContentForProject({ details }) {
  //handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  return (
    <div className=" w-full h-full bg-[#1f1f1f00] pt-12 pb-20">
      <div
        ref={firstRef}
        className={`animated-component   ${
          firstInView ? "is-visible  " : ""
        } w-full text-[#ffffff] px-5 pt-5 sm:px-0 capitalize text-center cursor-default tracking-widest pb-3 `}
      >
        projects_
      </div>
      <h3
        ref={secondRef}
        className={`animated-component   ${
          secondInView ? "is-visible  " : ""
        } font-italiana px-10 text-center text-3xl md:text-5xl text-[#e5e3e3] `}
      >
        Bringing Ideas to Life Through Technology
      </h3>
      <div className={` w-full mt-8 md:mt-16  sm:w-11/12 mx-auto  `}>
        <SliderForProject data={details} />
      </div>
    </div>
  );
}
