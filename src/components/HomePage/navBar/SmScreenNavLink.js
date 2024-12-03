import React from "react";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { Link } from "react-scroll";

export default function SmScreenNavLink({
  stateForNavLinks,
  navLinks,
  setStateForNavLinks,
  handleSetActive,
  activeSection,
}) {
  return (
    <div
      className={`   w-full h-full flex items-start top-[10vh] justify-end relative `}
    >
      <div
        className={`${
          stateForNavLinks ? "" : ""
        } contentDiv h-fit  flex bg-[#ff4a3b] border border-[#1f1f1f]   relative  rounded-ss-xl `}
      >
        <div className=" pl-12 py-5  text-white">
          {navLinks.map((link, index) => (
            <h4
              key={index}
              className={` ${
                activeSection === link.title
                  ? " mr-0 ml-4"
                  : "mr-4 hover:ml-4   hover:mr-0"
              } relative tracking-wide   duration-500 cursor-pointer py-2 group `}
            >
              _
              <span
                className={`  ${
                  activeSection === link.title
                    ? "text-[#161616]"
                    : " group-hover:text-[#161616]"
                }  duration-500  `}
              >
                <Link
                  to={link.title}
                  smooth={true}
                  duration={400}
                  spy={true}
                  offset={-10}
                  onSetActive={handleSetActive}
                >
                  {link.title}
                </Link>
              </span>
            </h4>
          ))}
        </div>
        <div className="w-[10px] md:w-[9vw] sm:w-[4vw]   relative">
          <div
            style={{
              background: "linear-gradient(90deg, transparent, #1f1f1fa7)",
            }}
            className=" pointer-events-none w-[500%] sm:w-[150%] absolute h-full top-0 left-0 "
          ></div>
        </div>
        <div className=" top-[104%] right-[0%] w-[80%] h-10  absolute">
          <div className=" relative w-full h-full   bg-[#ff4a3b] border rounded-es-lg border-[#1f1f1f]">
            <PiArrowFatLinesLeftFill
              onClick={() => {
                setStateForNavLinks(false);
              }}
              className=" text-[#e5e3e3] ml-3 hover:text-[#1f1f1f] duration-300 rotate-180 size-6 cursor-pointer absolute top-1 left-0"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
