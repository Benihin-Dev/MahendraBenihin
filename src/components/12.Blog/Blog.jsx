import React from "react";
import SliderForBlog from "./SliderForBlog";
import { useInView } from "react-intersection-observer";

export default function Blog() {
  const data = [
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-1.webp",
      date: "August 04 ,2022",
      text: "Venenatis tellus in metus vulputate scelerisque felis imperdiet....",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-2.webp",
      date: "August 04 ,2022",
      text: "Venenatis tellus in metus vulputate scelerisque felis imperdiet....",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-3.webp",
      date: "August 04 ,2022",
      text: "Venenatis tellus in metus vulputate scelerisque felis imperdiet....",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-4.webp",
      date: "August 04 ,2022",
      text: "Venenatis tellus in metus vulputate scelerisque felis imperdiet....",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-5.webp",
      date: "August 04 ,2022",
      text: "Venenatis tellus in metus vulputate scelerisque felis imperdiet....",
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  return (
    <div className=" w-full relative bg-black  text-[#f0f0f0]">
      <div
        ref={firstRef}
        className={`animated-component  ${
          firstInView ? "is-visible " : ""
        }  w-full `}
      >
        <SliderForBlog data={data} />
      </div>
    </div>
  );
}
