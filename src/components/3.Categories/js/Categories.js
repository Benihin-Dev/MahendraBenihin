import React from "react";
import TitleSection from "./TitleSection";
import { useInView } from "react-intersection-observer";
import CatCartTemplet from "./CatCartTemplet";

export default function Categories() {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: fourthRef, inView: fourthInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const data = [
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/full-img.png",
      btnText: "women top",
      ref: " ",
      inView: " ",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/home-1-prod-collection-img-4.png",
      btnText: "accessories",
      ref: secondRef,
      inView: secondInView,
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/home-1-prod-collection-img-2.png",
      btnText: "shop bags",
      ref: thirdRef,
      inView: thirdInView,
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/home-1-prod-collection-img-3.png",
      btnText: "shoes",
      ref: fourthRef,
      inView: fourthInView,
    },
  ];

  return (
    <div className=" w-full relative mb-20 font-inter">
      <div className=" w-full px-5 sm:w-11/12 mx-auto  py-10">
        <div className=" md:hidden flex w-full  py-10 items-center justify-center gap-3">
          <TitleSection />
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            ref={firstRef}
            className={`animated-component ${
              firstInView ? "is-visible" : ""
            } w-full group cursor-pointer overflow-hidden flex items-end justify-end row-span-2 relative h-full `}
          >
            <CatCartTemplet data={data[0]} />
          </div>
          <div className=" hidden md:flex w-full aspect-square items-center justify-center gap-3">
            <TitleSection />
          </div>
          {data.map((item, index) => (
            <>
              {index !== 0 && (
                <div
                  key={index}
                  ref={item.ref}
                  className={`animated-component ${
                    item.inView ? "is-visible" : ""
                  } w-full flex items-end justify-center pb-1 pt-20 md:pt-0 md:aspect-square group relative overflow-hidden `}
                >
                  <CatCartTemplet data={item} />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
