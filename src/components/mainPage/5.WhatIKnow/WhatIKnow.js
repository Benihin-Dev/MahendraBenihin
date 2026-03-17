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

  // Handle animation on render event
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Store last position to calculate velocity
  const lastPosition = useRef({ x: 0, y: 0 });

  // Generate random initial positions once - use empty dependency to prevent recalculation
  const initialPositions = React.useMemo(
    () =>
      skills.map(() => ({
        top: `${Math.random() * 90}vh`,
        left: `${Math.random() * 90}vw`,
      })),
    [], // ✅ FIXED: Empty dependency array to ensure consistent positions
  );

  // Generate unique speeds for each tag
  const speeds = React.useMemo(
    () => skills.map(() => Math.random() * 0.05 + 0.02),
    [], // ✅ FIXED: Empty dependency array for consistency
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

  // Inertia decay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity((prevVelocity) => ({
        x: prevVelocity.x * 0.95,
        y: prevVelocity.y * 0.95,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={firstRef}
      className={`animated-componentZoom ${
        firstInView ? "is-visibleUnZoom " : ""
      } w-full relative pt-10 overflow-hidden`}
    >
      <div
        className="w-full h-screen relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {skills.map((job, index) => {
          const speed = speeds[index];
          const xMovement =
            (mousePosition.x - window.innerWidth / 2 + velocity.x) * speed;
          const yMovement =
            (mousePosition.y - window.innerHeight / 2 + velocity.y) * speed;

          // Determine if this skill should be visible
          const isVisible =
            (index < 19 && stateForSkills) ||
            (index >= 19 && stateForSoftSkills);

          return (
            <p
              key={index}
              className={`${
                index >= 19
                  ? "shadow-[#2f81ed2d] text-white hover:text-white border-[#b7d6ff] hover:border-[#2f81ed] hover:bg-[#2f81ed]"
                  : "shadow-[#ff4b3b4b] text-white hover:text-white border-[#ff9288] hover:border-[#ff4a3b] hover:bg-[#ff4a3b]"
              } border whitespace-nowrap rounded-lg hover:text-lg shadow-md transition-all text-center bg-[#1f1f1f] hover:z-20 duration-200 cursor-pointer w-fit px-4 py-2 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                position: "absolute",
                top: initialPositions[index].top,
                left: initialPositions[index].left,
                transform: `translate(${xMovement * -10}px, ${yMovement * -10}px)`,
                transition: "all 0.6s ease-out",
              }}
            >
              {job}
            </p>
          );
        })}

        {/* Center text */}
        <div className="w-fit text-4xl md:text-6xl whitespace-nowrap pointer-events-none flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <p className="scale-y-75 cursor-default">
              <span className="px-8 py-1 lowercase bg-[#dcdcdcfa] font-italiana font-semibold shadow-sm shadow-[rgba(255,255,255,0.54)] rounded-lg border-2 border-dashed text-[#ff4a3b]">
                What I'm Good At
              </span>
            </p>
            <div
              style={{
                background: "radial-gradient(#1f1f1f19 0%, transparent 100%)",
              }}
              className="absolute w-[110%] h-[200%] -z-10 -top-[50%] -left-[5%]"
            />
          </div>
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="absolute top-10 right-10 h-10 w-40 gap-px flex items-center justify-end">
        {/* Technical Skills Button */}
        <button
          onClick={() => setStateForSkills(!stateForSkills)}
          className={`h-full w-1/2 text-white cursor-pointer transition-all duration-300 border border-[#ff4a3b] flex items-center justify-center ${
            stateForSkills
              ? "bg-[#ff4a3b]"
              : "bg-transparent hover:bg-[#ff4a3b]/20"
          }`}
          title="Toggle Technical Skills"
        >
          <BiCodeAlt className="size-6" />
        </button>

        {/* Soft Skills Button */}
        <button
          onClick={() => setStateForSoftSkills(!stateForSoftSkills)}
          className={`h-full w-1/2 text-white cursor-pointer transition-all duration-300 border border-[#2f81ed] flex items-center justify-center ${
            stateForSoftSkills
              ? "bg-[#2f81ed]"
              : "bg-transparent hover:bg-[#2f81ed]/20"
          }`}
          title="Toggle Soft Skills"
        >
          <GiSkills className="size-6" />
        </button>
      </div>
    </div>
  );
}
