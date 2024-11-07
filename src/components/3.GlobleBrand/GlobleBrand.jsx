import React from "react";
import BgComponentWithoutBg from "../MiniComponents/BgComponentWithoutBg";
import { BsScissors } from "react-icons/bs";
import img1 from "./imgs/knitting.png";
import img2 from "./imgs/scissors.png";
import img3 from "./imgs/sewing-machine.png";
import img4 from "./imgs/thread.png";
import GridForBG from "./GridForBG";
import TitleText from "../MiniComponents/TitleText";
import { useInView } from "react-intersection-observer";

export default function GlobleBrand() {
  const data = [
    {
      img: img2,
      bgImg:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-1.jpg",
      title: "Cutting-Edge Technology",
      desc: "Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultrices neque ornare aenean euismod elementum nisi eleifend.",
    },
    {
      img: img1,
      bgImg:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-2.jpg",
      title: "2500 Luxurious Fabrics",
      desc: "Duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis dis parturient montes aliquet nascetur.",
    },
    {
      img: img3,
      bgImg:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-3.jpg",
      title: "Hand Stitched By Skilled Tailors",
      desc: "Scelerisque fermentum dui faucibus in ornare. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Consequat.",
    },
    {
      img: img4,
      bgImg:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-4.jpg",
      title: "Outstanding Structure & Shape",
      desc: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus mattis molestie a iaculis orci at.sClick Here",
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className=" w-full relative">
      <div className=" w-full text-white py-20 ">
        <div className=" invisible">
          <div className=" w-fit mx-auto pb-5">
            <BsScissors className=" size-7" />
          </div>
          <TitleText
            topTitle={"globle brand"}
            title={"Fashion & Design Company"}
          />
          <GridForBG data={data} />
        </div>
        <div className={` absolute top-0 py-20 left-0 w-full h-full  z-20 `}>
          <div
            ref={firstRef}
            className={`animated-component ${firstInView ? "is-visible" : ""} `}
          >
            <div className=" w-fit mx-auto">
              <BsScissors className=" size-7" />
            </div>
            <p className=" mt-5 text-sm w-full text-center tracking-widest uppercase ">
              globle brand
            </p>
            <p className=" w-full text-center px-5 text-5xl mt-6 capitalize font-medium">
              Fashion & Design Company
            </p>
          </div>
          <GridForBG data={data} />
        </div>
      </div>
      <BgComponentWithoutBg
        bgImg={
          "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg"
        }
      />
    </div>
  );
}
