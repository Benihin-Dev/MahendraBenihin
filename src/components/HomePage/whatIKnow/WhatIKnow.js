import { useState, useEffect, useRef } from "react";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { BiCodeAlt } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

export default function WhatIKnow() {
  const skills = [
    "html",
    "css",
    "JavaScript",
    "ReactJs",
    "Tailwind-css",
    "Bootstrap-css",
    "NodeJs",
    "Front-End Development",
    "Back-End Development",
    "Full-Stack Development",
    "Java",
    "C, C+",
    "C#",
    "SQL",
    "ExpressJs",
    "MongoDB",
    "Web Designing",
    "Non-SQL",
    "Python",
    "PHP",
    "Problem-Solving",
    "Communication",
    "Teamwork",
    "Leadership",
    "Critical Thinking",
    "Time Management",
    "Creativity",
    "Adaptability",
    "Emotional Intelligence",
    "Conflict Resolution",
    "Networking",
    "Project Management",
  ];
  const [stateForSkills, setStateForSkills] = useState(true);
  const [stateForSoftSkills, setStateForSoftSkills] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  //handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  // Store last position to calculate velocity
  const lastPosition = useRef({ x: 0, y: 0 });

  // Generate random initial positions once
  const initialPositions = React.useMemo(
    () =>
      skills.map(() => ({
        top: `${Math.random() * 90}vh`,
        left: `${Math.random() * 90}vw`,
      })),
    []
  );

  // Generate unique speeds for each tag
  const speeds = React.useMemo(
    () => skills.map(() => Math.random() * 0.05 + 0.02),
    []
  );

  // Mouse movement handler
  const handleMouseMove = (e) => {
    const newVelocity = {
      x: e.clientX - lastPosition.current.x,
      y: e.clientY - lastPosition.current.y,
    };
    setVelocity(newVelocity);
    setMousePosition({ x: e.clientX, y: e.clientY });
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Gradually slow down velocity for inertia effect
      setVelocity((prevVelocity) => ({
        x: prevVelocity.x * 0.95, // Decay velocity for x-axis
        y: prevVelocity.y * 0.95, // Decay velocity for y-axis
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={firstRef}
      className={`animated-componentZoom  ${
        firstInView ? "is-visibleUnZoom " : ""
      } w-full relative pt-10 overflow-hidden `}
    >
      {/* for md < screen */}
      <div
        className="w-full h-screen relative overflow-hidden "
        onMouseMove={handleMouseMove}
      >
        {skills.map((job, index) => {
          const speed = speeds[index];
          const xMovement =
            (mousePosition.x - window.innerWidth / 2 + velocity.x) * speed;
          const yMovement =
            (mousePosition.y - window.innerHeight / 2 + velocity.y) * speed;

          return (
            <p
              key={index}
              className={`${
                index >= 19
                  ? "shadow-[#2f81ed2d] text-[#ffffff] hover:text-[#ffffff] border-[#b7d6ff] hover:border-[#2f81ed] hover:bg-[#2f81ed]"
                  : "shadow-[#ff4b3b4b] text-[#ffffff] hover:text-[#ffffff] border-[#ff9288] hover:border-[#ff4a3b] hover:bg-[#ff4a3b]"
              } border whitespace-nowrap rounded-lg hover:text-lg shadow-md transition-all text-center bg-[#1f1f1f] hover:z-20 hover:bg-[#fff fff] duration-200 cursor-pointer w-fit px-4 py-2 ${
                (stateForSkills && index < 19) ||
                (stateForSoftSkills && index >= 19)
                  ? ""
                  : "opacity-0"
              }`}
              style={{
                position: "absolute",
                top: initialPositions[index].top, // Fixed initial random top
                left: initialPositions[index].left, // Fixed initial random left
                transform: `translate(${xMovement * -10}px, ${
                  yMovement * -10
                }px)`, // Apply inertia movement
                transition: "transform 0.3s ease-out", // Smooth transition when inertia slows down
                transition: "all 0.6s ease-out",
              }}
            >
              {job}
              <style jsx>{`
                .hoverOutline:hover {
                  outline: 4px solid #f1545c60; /* Show outline on hover */
                }
              `}</style>
            </p>
          );
        })}
        <div className=" w-fit  text-4xl md:text-6xl whitespace-nowrap  pointer-events-none   flex items-center absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className=" relative">
            <p className="  scale-y-75 cursor-default ">
              <span className=" px-8  py-1 lowercase bg-[#dcdcdcfa]  font-italiana font-semibold shadow-sm shadow-[rgba(255,255,255,0.54)] rounded-lg border-2 border-dashed text-[#ff4a3b]">
                What I’m Good At
              </span>
            </p>
            <div
              style={{
                background: "radial-gradient( #1f1f1f19 0%, transparent 100%)",
              }}
              className=" absolute w-[110%] h-[200%] -z-10 -top-[50%] -left-[5%]"
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-10 right-10 h-10 w-40 gap-px flex items-center justify-end">
        <div
          onClick={() => {
            setStateForSkills(!stateForSkills);
          }}
          className={` ${
            stateForSkills && "bg-[#ff4a3b]"
          } h-full w-1/2 text-white cursor-pointer transition-all duration-300  border border-[#ff4a3b] flex items-center justify-center`}
        >
          <BiCodeAlt className=" size-6" />
        </div>
        <div
          onClick={() => {
            setStateForSoftSkills(!stateForSoftSkills);
          }}
          className={` h-full w-1/2 ${
            stateForSoftSkills && " bg-[#2f81ed]"
          }  border border-[#2f81ed] text-white cursor-pointer transition-all duration-300 flex items-center justify-center`}
        >
          <GiSkills />
        </div>
      </div>
    </div>
  );
}
