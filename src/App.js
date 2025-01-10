import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/mainPage/HomePage";
import LoadingAnimation from "./components/miniComponents/LoadingAnimation";
import Project from "./components/research/Project";

function App() {
  const [fadeOut, setFadeOut] = useState(false); // State to handle fade-out animation
  const [isLoading, setIsLoading] = useState(true); // State to manage loading phase

  useEffect(() => {
    // Start fade-out after 2 seconds
    const timer = setTimeout(() => setFadeOut(true), 2000);

    // Stop loading animation after fade-out completes (2.5 seconds total)
    const fadeOutTimer = setTimeout(() => setIsLoading(false), 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div className="relative font-spaceMono bg-[#1f1f1f]">
      {/* Render LoadingAnimation with fade-out effect */}
      {isLoading ? <LoadingAnimation /> : <HomePage />}
      {/* <Project /> */}
    </div>
  );
}

export default App;
