import React, { useState, useEffect } from "react";
import logoImg from "./logo.png";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Info from "./Info";
import SmScreenNavLink from "./SmScreenNavLink";
import { Link, scrollSpy } from "react-scroll";

export default function NavBar() {
  const navLinks = [
    { title: "about", keyName: "" },
    { title: "what-i-do", keyName: "" },
    { title: "eduaction", keyName: "" },
    { title: "dev-skill", keyName: "" },
    { title: "projects", keyName: "" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const [stateForNavLinks, setStateForNavLinks] = useState(false);
  const [stateForInfo, setStateForInfo] = useState(false);

  const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
  // Variable to track the previous scroll position

  // Track page scroll direction
  useEffect(() => {
    let lastScrollY = 0;

    const trackDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // If the page is at the top, set scroll direction to down
        setScrollDirectionUp(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirectionUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirectionUp(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", trackDirection);

    return () => {
      window.removeEventListener("scroll", trackDirection);
    };
  }, []);

  return (
    <div
      className={`${
        scrollDirectionUp ? "navBarSlideUp" : "navBarSlideDown"
      } fixed top-0 left-0 w-full z-40  bg-[#1f1f1fef] `}
    >
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto pt-5 pb-3  flex items-center justify-between gap-5">
        <div className=" size-10 cursor-pointer lg:size-12 object-contain relative ">
          <img
            onClick={() => {
              setStateForInfo(!stateForInfo);
            }}
            src={logoImg}
            alt="logoImg"
          />
          <div
            className={` ${
              stateForInfo ? "fadeOut" : "fadeIn"
            } absolute sm:-top-[230%] movingAnimation lg:-top-[230%] pointer-events-none -top-[250%] left-[70%] w-max h-max `}
          >
            <img
              src="https://html.envalabdemos.com/unded/assets/images/video/arrow.png"
              alt="arrow-png"
              className="  rotate-[20deg] w-40"
            />
          </div>
        </div>
        <ul className=" hidden md:flex text-base items-center justify-end gap-6 md:gap-8 ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className=" relative tracking-wide text-white  cursor-pointer py-2 group"
            >
              _
              <span
                style={{ textShadow: " 2px 1px 1px #1f1f1f" }}
                className={`${
                  activeSection === link.title
                    ? "text-[#ff4a3b]"
                    : "group-hover:text-[#ff4a3b] text-white"
                }   duration-500 `}
              >
                <Link
                  to={link.title}
                  smooth={true}
                  duration={400}
                  spy={true}
                  offset={-20}
                  onSetActive={handleSetActive}
                >
                  {link.title}
                </Link>
              </span>
              <div
                className={` ${
                  activeSection === link.title
                    ? "w-2/5"
                    : " w-0 group-hover:w-2/5"
                }  border-b border-white absolute top-0  duration-700 right-0 `}
              ></div>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            if (stateForInfo === true) {
              setStateForInfo(false);
              setStateForNavLinks(!stateForNavLinks);
            } else {
              setStateForNavLinks(!stateForNavLinks);
            }
          }}
          className=" md:hidden size-7 relative cursor-pointer"
        >
          <HiMiniBars3CenterLeft
            className={` ${
              stateForNavLinks ? "  text-gray-600" : ""
            }  text-white transition-all  hover:scale-110 duration-200 size-full `}
          />
        </div>
      </div>
      <div
        className={` ${
          !stateForInfo ? "slideRightInfo" : "slideLeftInfo"
        } absolute top-[200%] left-0 w-max h-fit z-10 `}
      >
        <Info stateForInfo={stateForInfo} setStateForInfo={setStateForInfo} />
      </div>
      <div
        onClick={(e) => {
          if (!e.target.closest(".contentDiv")) {
            setStateForNavLinks(false); // Close only if clicked outside
          }
        }}
        className={` ${
          !stateForNavLinks ? "slideLeftNavLink " : "slideRightNavLink hi "
        } w-screen h-screen bg-[#00000000] fixed z-10 top-0 left-0 md:hidden`}
      >
        <SmScreenNavLink
          navLinks={navLinks}
          stateForNavLinks={stateForNavLinks}
          setStateForNavLinks={setStateForNavLinks}
          handleSetActive={handleSetActive}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
}
