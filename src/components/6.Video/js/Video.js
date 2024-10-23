import React, { useRef, useState } from "react";
import { GiPlayButton, GiPauseButton } from "react-icons/gi";

export default function Video() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPauseIcon, setShowPauseIcon] = useState(true); // Show by default
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" }); // Centered initially
  const [isMouseOver, setIsMouseOver] = useState(false); // Track mouse hover state

  const handleMouseOver = (event) => {
    setIsMouseOver(true); // Mouse is over the video
    updateMousePosition(event); // Move the button to the mouse position
  };

  const handleMouseOut = () => {
    setIsMouseOver(false); // Mouse is out of the video
    setMousePosition({ x: "50%", y: "50%" }); // Reset to center when the mouse leaves
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const updateMousePosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div className="py-10 w-full relative">
      <div
        className="w-full aspect-video relative"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        onMouseMove={isMouseOver ? updateMousePosition : null} // Update only when hovered
        onClick={handleVideoClick}
        style={{ cursor: "none" }} // Hide the cursor when hovering over the video
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-1-video.mp4"
          autoPlay
          muted
          loop
        ></video>

        {/* Play/Pause button either at the mouse position or at the center */}
        {showPauseIcon && (
          <div
            className="absolute"
            style={{
              top:
                typeof mousePosition.y === "number"
                  ? mousePosition.y - 20
                  : mousePosition.y, // Adjust to center the icon if it's a number
              left:
                typeof mousePosition.x === "number"
                  ? mousePosition.x - 20
                  : mousePosition.x, // Adjust to center the icon if it's a number
              transform:
                typeof mousePosition.x === "string" &&
                typeof mousePosition.y === "string"
                  ? "translate(-50%, -50%)" // Center if it's 50%
                  : "none", // No transformation if it's a mouse move
              pointerEvents: "none", // Prevent the icon from blocking mouse events
            }}
          >
            {isPaused ? (
              <div className=" size-24 rounded-full flex items-center justify-center border-2 border-white">
                <GiPlayButton className="text-white size-6 sm:size-8" />
              </div>
            ) : (
              <div className=" size-24 rounded-full flex items-center justify-center border-2 border-white">
                <GiPauseButton className="text-white size-6 sm:size-8" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
