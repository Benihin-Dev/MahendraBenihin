import React from "react";
import TitleText from "../MiniComponents/TitleText";
import SliderForRecentBlog from "./SliderForRecentBlog";
import { useInView } from "react-intersection-observer";

export default function RecentBlogs() {
  const data = [
    {
      date: "october 2023",
      desc: "7 Different Types And Styles Of Blazers",
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-11.webp",
    },
    {
      date: "october 2023",
      desc: "List Of On-trend Classic Tweed Women Blazers",
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-10.webp",
    },
    {
      date: "july 2023",
      desc: "How To Measure A Suit Jacket & Blazer",
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/07/blog-12.webp",
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className=" w-full relative imgBgForCoolLook ">
      <div className=" bg-[#000000a9] py-20">
        <div
          ref={firstRef}
          className={`animated-component  ${firstInView ? "is-visible" : ""} `}
        >
          <TitleText Toptitle={"Recent Blogs"} title={"News & Blogs"} />
        </div>
        <div
          ref={secondRef}
          className={`animated-componentfromLeft ${
            secondInView ? "is-visiblefromLeft" : ""
          } w-full mt-16 px-2 sm:px-10 `}
        >
          <SliderForRecentBlog data={data} />
        </div>
      </div>
    </div>
  );
}
