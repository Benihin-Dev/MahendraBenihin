import React from "react";
import SliderForTestimonial from "./SliderForTestimonial";

export default function Testimonial() {
  const data = [
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/port3-300x289.png",
      name: "Zain Richmond",
      comment:
        "Dear businessmen, choose your timepiece wisely, for it will become a part ofyour identity, speaking volumes about your triumphs and exemplary style for years to come.",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/port1-297x300.png",
      name: "Alexis Miles",
      comment:
        "World of luxury watches for successful businessmen, we are reminded of the significance these timepieces hold. Each one represents not only a status symbol but also a personal statement of achievement and refined taste.",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/port2-293x300.png",
      name: "Findlay Howell",
      comment:
        "This watch has made history as the first timepiece worn on the moon during the Apollo missions, solidiW'ing its reputation as a true achiever's timepiece. Furthermore, its unparalleled durability ensures that this watch can withstand the rigors of any demanding",
    },
  ];
  return (
    <div className=" w-full relative px-5 sm:px-10 bg-black py-16">
      <p className=" w-full text-center text-5xl text-white font-dosis font-semibold">
        Our Customers Says
      </p>
      <div className=" w-full sm:w-7/12 mx-auto mt-20">
        <SliderForTestimonial data={data} />
      </div>
    </div>
  );
}
