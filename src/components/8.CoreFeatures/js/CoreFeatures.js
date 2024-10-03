import React, { useRef, useState, useEffect } from "react";
import Temp from "./Temp";
import HorizontalScrollSection from "./HorizontalScrollSection";
import FrontSection from "./FrontSection";
import HorizontalScrollSectionForSmScreen from "./HorizontalScrollSectionForSmScreen";

export default function CoreFeatures({ mainComponentHeight }) {
  const section1Ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section1Ref.current) {
        const sectionTop = section1Ref.current.getBoundingClientRect().top;

        if (sectionTop <= 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={section1Ref} className=" w-full h-full border ">
      <div
        className={` ${
          isFixed === false ? "hidden" : " hidden sm:flex"
        } w-full  `}
      >
        <HorizontalScrollSection mainComponentHeight={mainComponentHeight} />
      </div>
      <div
        className={` ${
          isFixed === false ? "hidden" : " sm:hidden flex"
        } w-full  `}
      >
        <HorizontalScrollSectionForSmScreen
          mainComponentHeight={mainComponentHeight}
        />
      </div>
    </div>
  );
}
