import React from "react";
import Marquee from "react-fast-marquee";
import RoundedDimond from "../../miniComponents/RoundedDimond";

export default function NonStopSlider() {
  const fullStackSkills = [
    "Web Designing",
    "Web Development",
    "Responsive Design",
    "Database Management",
    "API Development",
    "Version Control",
    "Debugging and Testing",
  ];
  return (
    <div className="w-full overflow-hidden relative py-16  bg-[#1f1f1f] ">
      <div className="relative pointer-events-none flex items-center justify-center ">
        <div style={{ background: "#1f1f1f", padding: "0px" }}>
          <Marquee gradient={false} speed={50}>
            <div className="flex py-6 items-center gap-4 sm:py-5">
              {fullStackSkills.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3"
                >
                  <RoundedDimond />
                  <p className="px-5 font-italiana text-7xl sm:text-8xl md:text-9xl font-light text-white">
                    {item}
                  </p>
                </div>
              ))}
              {/* Repeat the same items to ensure a seamless loop */}
              {fullStackSkills.map((item, index) => (
                <div
                  key={`repeat-${index}`}
                  className="flex items-center justify-center gap-3"
                >
                  <RoundedDimond />
                  <p className="px-5 font-italiana text-7xl sm:text-8xl md:text-9xl font-light text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
