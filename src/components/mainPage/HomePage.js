import React, { useState, useEffect } from "react";
import NavBar from "./1.NavBar/NavBar";
import About from "./2.About/About";
import WhatIDo from "./3.WhatIDo/WhatIDo";
import Education from "./4.Education/Education";
import WhatIKnow from "./5.WhatIKnow/WhatIKnow";
import NonStopSlider from "./7.NonStopSlider/NonStopSlider";
import Footer from "./9.Footer/Footer";
import Projects from "./6.Projects/Projects";
import { Element } from "react-scroll";
import PersonalInterest from "./8.PersonalInterests/PersonalInterest";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update dot position immediately
  useEffect(() => {
    setDotPosition(mousePosition); // Dot directly tracks the mouse
  }, [mousePosition]);

  // Update circle position with a delay to follow the dot
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCirclePosition(dotPosition); // Circle follows the dot
    }, 0); // Delay in ms for smoother animation

    return () => clearTimeout(timeout);
  }, [dotPosition]);

  return (
    <div className="bg-[#1f1f1f] relative overflow-hidden">
      {/* Moving Circle */}
      <div
        className="circle size-8 md:size-10"
        style={{
          position: "fixed", // Fix to viewport
          top: circlePosition.y - (window.innerWidth > 768 ? 20 : 16), // Adjust for circle size
          left: circlePosition.x - (window.innerWidth > 768 ? 20 : 16),
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0)",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          pointerEvents: "none",
          zIndex: 9999, // Ensure it appears above everything
          transition: "all 200ms ease-out",
        }}
      ></div>

      {/* Dot */}
      <div
        className="dot size-2 md:size-[10px]"
        style={{
          position: "fixed",
          top: dotPosition.y - (window.innerWidth > 768 ? 5 : 4), // Adjust for dot size
          left: dotPosition.x - (window.innerWidth > 768 ? 5 : 4),
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000, // Ensure it appears above the circle
          transition: "all 100ms ease-out",
        }}
      ></div>

      {/* Page Content */}
      <NavBar />
      <Element name="about">
        <About />
      </Element>
      <Element name="what-i-do">
        <WhatIDo />
      </Element>
      <Element name="eduaction">
        <Education />
      </Element>
      <Element name="dev-skill">
        <WhatIKnow />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <NonStopSlider />
      <PersonalInterest />
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}
