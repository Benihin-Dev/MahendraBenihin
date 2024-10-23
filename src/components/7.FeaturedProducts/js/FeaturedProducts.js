import React from "react";
import CustomBtn2 from "../../MiniComponents/js/CustomBtn2";
import SliderForFP from "./SliderForFP";
import { useInView } from "react-intersection-observer";

export default function FeaturedProducts() {
  const productDetails = [
    {
      name: "Holiday Half Sleeve T-Shirt",
      price: "$9.45 - $9.85",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-2-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-2-2.png",
      ],
    },
    {
      name: "Hop Loose Trousers Jeans",
      price: "$21.30 - $21.90",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-1-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-1-2.png",
      ],
    },
    {
      name: "Flap Over Sling Hand Bag",
      price: "$16.50 - $17.10",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-5-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-5-2.png",
      ],
    },
    {
      name: "Mens Multi Color Shoe",
      price: "$14.45 - $15.75",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-4-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-4-2.png",
      ],
    },
    {
      name: "UV Protected Glass",
      price: "$9.30 - $10.50",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-3-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-3-2.png",
      ],
    },
    {
      name: "Party Handbag Clutch",
      price: "$16.50 - $17.50",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-7-1.png",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/demo-five-shop-7-2.png",
      ],
    },
  ];

  const productDetailsOnImg = [
    {
      btnPosition: { x: "35%", y: "20%" },
      title: "Rompers Belted Jumpsuit",
      type: "Classic Collections",
    },
    {
      btnPosition: { x: "60%", y: "80%" },
      title: "Hand Straw Weave Bag",
      type: "Classic Style",
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className=" py-10 w-full relative  ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" w-full md:flex gap-8 items-start justify-between ">
          <div
            ref={firstRef}
            className={`animated-componentfromLeft ${
              firstInView ? "is-visiblefromLeft" : ""
            } w-full hidden md:block md:w-[40%] relative `}
          >
            <img
              src="https://wdtkoka.wpengine.com/wp-content/uploads/2023/12/hotspot.jpg"
              alt=""
              className=""
            />
            {productDetailsOnImg.map((item, index) => (
              <div
                key={index}
                style={{
                  right: `${item.btnPosition.x}`,
                  top: `${item.btnPosition.y}`,
                }}
                className=" absolute group size-8 cursor-pointer rounded-full border border-white  "
              >
                <div className=" w-full h-full flex items-center justify-center relative">
                  <div className=" size-5 rounded-full bg-white"></div>
                  <div className=" absolute size-12 opacity-50 -top-[9px] bubbleAnimation -left-[9px] rounded-full bg-white"></div>
                  <div className=" opacity-0 hidden group-hover:block group-hover:opacity-100 duration-300 absolute bottom-[105%] cursor-default rounded-sm shadow w-60 px-3 py-4 bg-[#ffffffb7] -left-24">
                    <p className=" font-medium text-lg">{item.title}</p>
                    <p className=" text-[#5a5a5a] font-medium  text-sm tracking-wide leading-4 ">
                      {item.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" md:w-[60%]  mt-5 md:mt-0  w-full">
            <div
              ref={secondRef}
              className={`animated-component  ${
                secondInView ? "is-visible " : ""
              } w-full items-end justify-between md:flex `}
            >
              <div className="">
                <p className=" text-sm text-gray-400 md:text-[#5a5a5a] w-full font-medium tracking-widest">
                  Explore Customer's Favourite
                </p>
                <p className="  w-full   text-[#000000]  my-4 font-semibold text-4xl">
                  Featured Products
                </p>
                <p className=" border-b-[3px] border-black w-20 my-5"></p>
              </div>
              <div className="">
                <CustomBtn2 text={"view all"} />
              </div>
            </div>
            <div
              ref={thirdRef}
              className={`animated-componentfromRight ${
                thirdInView ? "is-visiblefromRight" : ""
              } `}
            >
              <SliderForFP data={productDetails} />
            </div>
          </div>
        </div>
        <div className=" w-full md:hidden block  mt-5 ">
          <img
            src="https://wdtkoka.wpengine.com/wp-content/uploads/2023/12/hotspot.jpg"
            alt=""
            className=" w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
