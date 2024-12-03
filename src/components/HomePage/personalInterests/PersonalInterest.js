import React from "react";
import img1 from "../../imgs/img1.png";
import img4 from "../../imgs/img3.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img4.png";

export default function PersonalInterest() {
  const details = [
    {
      img: img3,
      innerImg:
        "https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310071805064792540_38983_u23h.jpg",
      title: "Movies",
      desc: "Watching thought-provoking films inspires my storytelling and creativity.",
    },
    {
      img: img1,
      innerImg:
        "https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU=",
      title: "Travel",
      desc: "Exploring new cultures fuels my creativity.",
    },
    {
      img: img2,
      innerImg:
        "https://media.licdn.com/dms/image/v2/C5612AQFY0GBir5u2Ww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1648015439146?e=2147483647&v=beta&t=MVBy31zQ3RInI6SkQiHcC5HDw7NxqbC18G6P0B3UHj0",
      title: "Photography",
      desc: "I love capturing the beauty of nature.",
    },
    {
      img: img4,
      innerImg:
        "https://i.pinimg.com/736x/38/2e/75/382e756f748349419545dcc94aeb846b.jpg",
      title: "Sports",
      desc: "Enjoying cricket enhances my teamwork and strategic thinking",
    },
  ];
  return (
    <div className=" w-full pt-20 pb-40 md:pb-80 relative ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto md:w-10/12">
        <h1 className=" lowercase text-end w-full text-[#3791b5]  font-thin">
          Beyond Work
        </h1>
        <h5 className=" text-end pb-2 w-full text-2xl tracking-wider text-white   font-italiana">
          Life Outside the Office
        </h5>
      </div>
      <div className=" w-full px-5 md:px-10 sm:px-0 sm:w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-10 ">
        {details.map((item, index) => (
          <div
            key={index}
            className={`w-full  border border-[#3c3b3b] hover:border-[#837d7d] duration-300 group overflow-hidden relative ${
              index % 2 === 0 ? " " : "translate-y-[40%]"
            } `}
          >
            <div className=" w-full   relative aspect-square overflow-hi dden">
              <img
                src={item.innerImg}
                className=" w-full h-full object-cover  group-hover:scale-110     duration-300"
                alt=""
              />
              <img
                src={item.img}
                className=" pointer-events-none  duration-300 w-full h-full absolute top-0 left-0 object-contain"
                alt=""
              />
            </div>
            <div className=" p-2 sm:p-5 bg-[#1f1f1f] cursor-default relative">
              <div className=" absolute -top-2 left-0 bg-[#1f1f1f] w-full h-5"></div>
              <h1 className=" w-full text-white text-center text-lg sm:text-2xl tracking-wide font-italiana">
                {item.title}
              </h1>
              <p className=" text-center mt-3 font-medium text-[#ff4a3b] text-xs sm:text-sm tracking-wide">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
