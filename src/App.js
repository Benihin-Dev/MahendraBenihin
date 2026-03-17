import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/mainPage/HomePage";
import LoadingAnimation from "./components/miniComponents/LoadingAnimation";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading phase

  useEffect(() => {
    // Stop loading animation after 2.5 seconds
    const fadeOutTimer = setTimeout(() => setIsLoading(false), 2500);

    return () => {
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
