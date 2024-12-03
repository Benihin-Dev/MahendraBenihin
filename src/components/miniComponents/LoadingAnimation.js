import React, { useState, useEffect } from "react";

export default function LoadingAnimation() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full h-screen bg-[#1f1f1f] flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="loader relative">
        <div className="w-full h-full absolute top-0 right-[100%] translate-x-[px] z-20 bg-[#1f1f1f]"></div>
      </div>
    </div>
  );
}
