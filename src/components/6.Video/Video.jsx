import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import CloseBtn from "../MiniComponents/CloseBtn";

export default function Video() {
  const [videoPlayerState, setVideoPlayerState] = useState(false);
  return (
    <div className=" w-full relative  ">
      <div className="  w-full bg-[#00000000] py-20 ">
        <div className=" w-full relative overflow-hidden">
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/video-bg-scaled.jpg"
            className=" w-full object-cover overflow-hidden scale-125"
            alt=""
          />
          <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center ">
            <div
              onClick={() => {
                setVideoPlayerState(true);
              }}
              className=" moveUpNDown  cursor-pointer  text-[#f0f0f0] hover:text-[#bb9d7b] duration-500 size-20 flex items-center justify-center rounded-full border border-[#f0f0f0]"
            >
              <FaPlay className=" size-7" />
            </div>
          </div>
        </div>
      </div>
      {videoPlayerState && (
        <div className=" fixed top-0 left-0 w-full h-full bg-[#000000a7] flex items-center justify-center">
          <div className=" w-full px-1 sm:px-0 mx-auto sm:w-10/12  lg:w-8/12">
            <iframe
              src="https://www.youtube.com/embed/CQpetweq4L8"
              className="w-full aspect-video bg-black"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div
            onClick={() => {
              setVideoPlayerState(false);
            }}
            className=" absolute top-5 right-5 size-max"
          >
            <CloseBtn />
          </div>
        </div>
      )}
    </div>
  );
}
