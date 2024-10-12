import React from "react";
import { LuPencilRuler } from "react-icons/lu";
import { SlLayers } from "react-icons/sl";
import { BsInfinity } from "react-icons/bs";
import { LiaChessKnightSolid } from "react-icons/lia";

export default function Products() {
  const dataforSmMenu = [
    {
      icon: <LuPencilRuler className=" size-[50px] text-[#bd8334]" />,
      name: "Well Designed",
    },
    {
      icon: <SlLayers className=" size-[50px] text-[#bd8334]" />,
      name: "Exceptional",
    },
    {
      icon: <BsInfinity className=" size-[50px] text-[#bd8334]" />,
      name: "Precision Movement",
    },
    {
      icon: <LiaChessKnightSolid className=" size-[50px] text-[#bd8334]" />,
      name: "Heritage and Exclusivity",
    },
  ];

  const productList = [
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_5-768x768.jpg",
      name: "Sovereign Seconds",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_7-768x768.jpg",
      name: "Timeless Prestige",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_6-768x768.jpg",
      name: "Eterna Majesty",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3-768x768.jpg",
      name: "Chrono Elegance",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_5-768x768.jpg",
      name: "Aurorian Craft",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2-768x768.jpg",
      name: "Regal Epoch",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_28-768x768.jpg",
      name: "InfiniLux Timepieces",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1-768x768.jpg",
      name: "Majestique Horology",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_27-768x768.jpg",
      name: "Heritage Opus",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_26-768x768.jpg",
      name: "Virtuoso Precision",
    },
  ];
  return (
    <div className=" w-full bg-black text-white relative py-10 px-5 sm:px-10">
      <div className=" sm:flex items-end gap-5">
        <div className=" sm:w-1/3 w-full  font-dosis text-5xl font-semibold">
          Luxurious <br /> Time Pieces
        </div>
        <div className=" w-full sm:w-2/3 mt-2 sm:mt-0 leading-7 font-jost">
          In the realm of successful businessmen, a luxurious watch holds a
          significance that goes beyond simply telling time. It is a testament
          to their success and accomplishment, an accessory that exudes
          confidence and competence.
        </div>
      </div>
      <div className=" w-full mx-auto grid grid-cols-1 gap-5 md:grid-cols-4 mt-20">
        {dataforSmMenu.map((item, index) => (
          <div className=" w-full" key={index}>
            <div className=" w-full flex items-center justify-center">
              {item.icon}
            </div>
            <div className=" mt-4 font-jost text-lg w-full flex items-center justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {productList.map((item, index) => (
          <div
            key={index}
            className=" relative w-full bg-[#f8f8f8] p-5 group cursor-default"
          >
            <img src={item.img} alt="" className=" w-full object-cover" />
            <p className=" text-black px-4 font-jost my-8 text-2xl text-center font-medium">
              {item.name}
            </p>
            <div className="absolute sm:top-[55%] top-[65%] left-0 w-full h-fit flex items-center justify-center">
              <p className="group-hover:translate-y-0 translate-y-8 group-hover:opacity-100 opacity-0 group-hover:visible invisible duration-500 w-fit text-white bg-[#ddac55] py-2 px-5 rounded-md hover:shadow-xl shadow-black text-sm cursor-pointer">
                ADD TO CART
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
