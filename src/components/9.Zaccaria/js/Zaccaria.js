import React from "react";
import CustomBtn from "../../MiniComponents/js/CustomBtn";
import CustomBtn1 from "../../MiniComponents/js/CustomBtn1";

export default function Zaccaria() {
  const data = [
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Image-box-1.jpg",
      title: "Marina Jeans And Tshirts",
      text: "Lectus magna fringilla urna metusmetus porttitor rhoncus.",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Image-box-2.jpg",
      title: "Marina Linen Fabric Wear",
      text: "Aenean et tortor at risus viverrametus adipiscing at injn.",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Image-box-3.jpg",
      title: "Sofia Linen Fabric Wear",
      text: "Lectus nulla at volutpat diam ut venenatis tellus in metus.",
    },
  ];
  return (
    <div className=" w-full pt-10 border-b  pb-20 relative ">
      <div className="  w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className="">
          <p className=" text-sm text-center text-gray-400 md:text-[#5a5a5a] w-full font-medium tracking-widest">
            COLLECTIONS OF
          </p>
          <p className="  w-full text-center  text-[#000000]  my-4 font-semibold text-4xl">
            Zaccaria
          </p>
          <p className=" border-b-[3px] mx-auto border-black w-20 my-5"></p>
        </div>
        <div className=" mt-16 md:grid-cols-3 grid-cols-1 grid gap-10 w-full">
          {data.map((item, index) => (
            <div key={index} className=" w-full group cursor-pointer">
              <div className=" w-full overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className=" w-full object-cover duration-300 group-hover:scale-110"
                />
              </div>
              <p className=" font-medium text-lg pt-5 pb-2 cursor-pointer hover:text-[#b05d5d] duration-300 ">
                {item.title}
              </p>
              <p className=" text-[#5a5a5a] cursor-default leading-5 pb-4">
                {item.text}
              </p>
              <div className=" w-fit">
                <CustomBtn1 text={"Explore more"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
