import React from "react";
import TitleTextLeftAlign from "../MiniComponents/TitleTextLeftAlign";
import SliderForSQ from "./SliderForSQ";
import BubblingAnimation from "./BubblingAnimation";
import { useInView } from "react-intersection-observer";

export default function SupremeQuality({ productDetails }) {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="  w-full relative ">
      <div className=" py-20 w-full lg:flex ">
        <div className=" w-full lg:w-1/2 lg:pr-16 relative">
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/hotspot-background.jpg"
            className=" w-full h-full object-cover"
            alt=""
          />
          <div className=" size-12 group border cursor-pointer border-white rounded-full absolute sm:top-[40%] top-20 left-32 sm:left-[25%] ">
            <div className=" relative w-full h-full">
              <BubblingAnimation />
              <div className=" absolute hidden group-hover:block duration-500  overflow-hidden bottom-[140%] -left-24 w-64 rounded-xl ">
                <div className=" w-full h-full z-20 backdrop-blur-sm relative text-black  bg-[#d6d0c890] p-5">
                  <p className=" pb-3 tracking-widest text-xl uppercase leading-6">
                    Premium <br /> Blazers
                  </p>
                  <p className=" pr-4">Loremfhs ipsumdsnd dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" size-12 group border cursor-pointer border-white rounded-full absolute sm:top-[80%] top-72 left-60 sm:left-[60%] ">
            <div className=" relative w-full h-full">
              <BubblingAnimation />
              <div className=" absolute hidden group-hover:block duration-500  overflow-hidden bottom-[140%] -left-24 w-64 rounded-xl ">
                <div className=" w-full h-full z-20 backdrop-blur-sm relative text-black  bg-[#d6d0c890] p-5">
                  <p className=" pb-3 tracking-widest text-xl uppercase leading-6">
                    multi-color <br /> suits
                  </p>
                  <p className=" pr-4">Loremfhs ipsumdsnd dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-10 px-5 sm:px-10 lg:px-0 text-[#f0f0f0]">
          <div
            ref={firstRef}
            className={`animated-component  ${
              firstInView ? "is-visible " : ""
            } `}
          >
            <TitleTextLeftAlign
              Toptitle={"Supreme Quality"}
              title={"Custom Made Men’s Suits"}
            />
          </div>
          <p
            ref={secondRef}
            className={`animated-component  ${
              secondInView ? "is-visible " : ""
            }  mt-4 lg:pr-20 `}
          >
            Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nulla
            facilisi cras fermentum odio eu. Nunc sed augue.
          </p>
          <div className=" w-full mt-10 lg:pr-10">
            <SliderForSQ data={productDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
