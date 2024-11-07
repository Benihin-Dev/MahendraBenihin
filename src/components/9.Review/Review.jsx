import React from "react";
import TitleTextLeftAlign from "../MiniComponents/TitleTextLeftAlign";
import SliderForReview from "./SliderForReview";
import BgComponentWithLine2 from "../MiniComponents/BgComponentWithLine2";
import { useInView } from "react-intersection-observer";

export default function Review() {
  const data = [
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-1.webp",
      rating: 5,
      name: "Britta Cornelia",
      comment:
        "Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis Est pellentesque.",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp",
      rating: 5,
      name: "Floriana Inga",
      comment:
        "Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis Est pellentesque.",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
      rating: 5,
      name: "Karl Leonardo",
      comment:
        "Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis Est pellentesque.",
    },
    {
      img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-4.webp",
      rating: 5,
      name: "Georg Renzo",
      comment:
        "Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis Est pellentesque.",
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <div className=" w-full relative py-20 ">
      <div className=" w-full lg:flex items-center">
        <div className=" w-full lg:w-[30%] text-[#f0f0f0]">
          <div className=" w-full px-5 lg:px-0 lg:pl-10 cursor-default">
            <div
              ref={firstRef}
              className={`animated-component  ${
                firstInView ? "is-visible " : ""
              } `}
            >
              <TitleTextLeftAlign
                Toptitle={"Review & Ratings"}
                title={"Positive Customers Feedback"}
              />
            </div>
            <p
              ref={secondRef}
              className={`animated-component  ${
                secondInView ? "is-visible " : ""
              } mt-4 `}
            >
              Pretium lectus quam id leo in. In massa tempor nec feugiat nisl
              pretium fusce. Libero enim sed faucibus turpis in eu mi bibendum
              neque. Eget duis at tellus at urna.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-[70%] lg:pl-10 ">
          <SliderForReview data={data} />
        </div>
      </div>
      <BgComponentWithLine2 />
    </div>
  );
}
