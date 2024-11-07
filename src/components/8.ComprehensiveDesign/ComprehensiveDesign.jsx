import React from "react";
import TitleTextRightAlign from "../MiniComponents/TitleTextRightAlign";
import SliderForSQ from "../7.SupremeQuality/SliderForSQ";
import { BsScissors } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

export default function ComprehensiveDesign({ productDetails }) {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="  w-full relative ">
      <div className=" w-full lg:flex my-10 ">
        <div className=" lg:w-1/2 w-full"></div>
        <div className=" lg:w-1/2 w-full">
          <div className="  w-full pr-10 px-5 ">
            <div className=" w-full border-b-[2px] border-dashed border-[#4d4b4b] relative">
              <BsScissors className="moveLeftNRight size-8 text-[#b4abab] -top-4 left-[70%] absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 w-full lg:flex ">
        <div className=" w-full lg:w-1/2 lg:pr-10 px-5 sm:px-10 lg:px-0 text-[#f0f0f0]">
          <div
            ref={firstRef}
            className={`animated-component  ${
              firstInView ? "is-visible " : ""
            } `}
          >
            <TitleTextRightAlign
              Toptitle={"Comprehensive Designy"}
              title={"New Collections of Stylish Suits"}
            />
          </div>
          <p
            ref={secondRef}
            className={`animated-component  ${
              secondInView ? "is-visible " : ""
            } mt-4 lg:pl-20 text-end `}
          >
            Bisi vitae suscipit tellus mauris a diam maecenas sed enim. Est
            ultricies integer quis auctor elit sed vulputate.
          </p>
          <div className=" w-full mt-10 lg:pl-10">
            <SliderForSQ data={productDetails} />
          </div>
        </div>
        <div className=" w-full lg:w-1/2 relative mt-10 lg:mt-0 ">
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/inner-section-right-img.jpg"
            className=" w-full h-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-fit">
            <div
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0,0), black)",
              }}
              className=" w-full h-96   flex items-end"
            >
              <div
                ref={thirdRef}
                className={`animated-component  ${
                  thirdInView ? "is-visible " : ""
                } px-4 sm:px-10 pb-3 sm:pb-10 w-full text-[#f0f0f0] `}
              >
                <p className=" w-full  cursor-default  text-3xl md:text-4xl mt-6 capitalize ">
                  Get 50% OFF on first class suits
                </p>
                <div className=" my-4 hover:border-[#bb9d7b] duration-300 border-white border w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Enter your email to subscribe*"
                    name=""
                    id=""
                    className=" w-full py-5 text-sm px-5 bg-transparent outline-none"
                  />
                  <button className="md:text-base text-sm  py-[14px] sm:py-[13px] mr-1 tracking-widest uppercase w-fit px-5  sm:px-10 bg-[#bb9d7b] hover:bg-[#23201e] duration-500">
                    Subscribe
                  </button>
                </div>
                <p className=" text-sm  cursor-default">
                  *Use code CLASSIC at checkout through 4/10. Exclusions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
