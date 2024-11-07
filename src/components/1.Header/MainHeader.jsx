import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function MainHeader({ setSearchComponent }) {
  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollThreshold = 0; // Set a threshold in pixels

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
        if (currentScrollTop > lastScrollTop) {
          setShowNavBar(true);
          //   console.log("down");
        } else if (currentScrollTop < lastScrollTop) {
          setShowNavBar(false);
          //   console.log("up");
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div>
      <Header
        setSearchComponent={setSearchComponent}
        bgColor={"black"}
        showNavBar={showNavBar}
      />

      <div
        className={` fixed top-0 left-0 right-0 z-40 ${
          showNavBar ? "SlideDown2" : "slideUp2"
        } `}
      >
        <Header
          setSearchComponent={setSearchComponent}
          setShowNavBar={setShowNavBar}
          bgColor={"#221f1cef"}
          showNavBar={showNavBar}
        />
      </div>
    </div>
  );
}
