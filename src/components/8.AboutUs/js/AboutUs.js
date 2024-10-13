import React from "react";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const data = [
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/a-man-in-sunglasses-smoking-a-cigar.jpg",
      title: "Advanced chronograph functions",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/partial-view-of-accomplished-businessman.jpg",
      title: "The Timepiece of Achievement",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/partial-view-of-businessman-with-luxury-watch-hold.jpg",
      title: "A Bold Statement of Success",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cropped-image-of-businessman-with-luxury-watch-clo.jpg",
      title: "The Quintessential Timepiece",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/male-wrists-expensive-watch-close-up-hands-of.jpg",
      title: "The Epitome of Refinement",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/hunters-race-hNoSCxPW.jpg",
      title: "The Essence of a Luxurious Watch",
    },
  ];
  return (
    <div className=" w-full relative px-2 sm:px-4 bg-black py-16">
      <p
        ref={firstRef}
        className={`animated-component ${
          firstInView ? "is-visible" : ""
        } w-full text-center text-5xl text-white font-dosis font-semibold `}
      >
        News about Us
      </p>
      <div className=" w-full px-4 lg:px-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full relative group overflow-hidden"
            style={{ aspectRatio: "10/12" }}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 text-white font-jost py-3 px-4 bg-[#00000091] w-full left-0">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
