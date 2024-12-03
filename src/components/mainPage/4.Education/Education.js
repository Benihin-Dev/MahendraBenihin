import React, { useState } from "react";
import SliderForEducation from "./SliderForEducation";
import SliderBtn from "./SliderBtn";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const eduDetails = [
    {
      type: "Basic School Education",
      place: "Batticaloa Puliyadimunai Government Tamil Mixed School",
      desc: "In school, I focused on building a solid academic foundation, especially in mathematics and science. I also participated in extracurricular activities to develop teamwork and leadership skills, which are crucial in the tech industry.",
      year: "2005 - 2016",
      spec: false,
    },
    {
      type: "G.C.E Advancded Level | Technology Streasm",
      place: "Batticaloa Hindu Collage",
      desc: "In high school, I laid the groundwork for my tech career with a strong focus on math and science. Extracurriculars honed my teamwork and leadership, crucial for the tech industry.",
      year: "2017 - 2019",
      spec: ["Passed with 2A,B", "District 6th & Island 192th with 2.2146"],
    },
    {
      type: "Bachelor of Information Communication Technology",
      place: "University of Sri Jayewardenapura | Sri Lanka",
      desc: "My expertise lies in developing robust and scalable software solutions.I am committed to continuous learning and improving my skills to stay ahead in the ever-evolving field of software engineering.",
      year: "2021 - 2025",
      spec: ["Software Engineering"],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  //handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: fourthRef, inView: fourthInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div className=" w-full relative bg-[#ff4a3b] py-10 overflow-hidden sm:py-16">
      <div className=" w-full  sm:w-11/12 mx-auto md:w-10/12">
        <div className="w-full text-[#1f1f1f] px-5 sm:px-0 capitalize cursor-default tracking-widest pb-5">
          education_
        </div>

        <div className=" w-full sm:flex  gap-5 sm:mt-4">
          <div className=" w-full sm:w-3/5 relative overflo w-hidden ">
            <p
              ref={firstRef}
              className={`animated-componentfromLeft  ${
                firstInView ? "is-visiblefromLeft " : ""
              } px-5 sm:px-0 pb-1 sm:pb-4 font-italiana text-3xl cursor-default md:text-5xl  text-[#ffffff]  `}
            >
              Scholarly Pursuits: A Chronicle of My Academic Endeavors
            </p>
            <div
              ref={fourthRef}
              className={`animated-componentfromRight  ${
                fourthInView ? "is-componentfromRight " : ""
              } sm:hidden w-full sm:w-2/5 pb-5  text-sm flex items-center justify-center `}
            >
              <SliderBtn
                eduDetails={eduDetails}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            <div
              ref={secondRef}
              className={`animated-componentfromLeft  ${
                secondInView ? "is-visiblefromLeft " : ""
              }  px-2 sm:px-0  mt-1 sm:mt-5 relative `}
            >
              <div className=" w-full ">
                <SliderForEducation
                  data={eduDetails}
                  setCurrentIndex={setCurrentIndex}
                  currentIndex={currentIndex}
                  slidesToShow={1}
                />
              </div>
            </div>
          </div>
          <div
            ref={thirdRef}
            className={`animated-componentfromRight  ${
              thirdInView ? "is-componentfromRight " : ""
            }  hidden sm:flex w-full sm:w-2/5  text-sm items-center justify-center `}
          >
            <SliderBtn
              eduDetails={eduDetails}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
