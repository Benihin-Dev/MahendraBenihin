import React from "react";

export default function Video() {
  return (
    <div className=" w-full border  h-screen">
      <video
        className=" w-full h-full object-cover"
        src="https://uiparadox.co.uk/templates/voguify/assets/media/inner-banner-video.mp4"
        autoPlay
        muted
      ></video>
    </div>
  );
}
