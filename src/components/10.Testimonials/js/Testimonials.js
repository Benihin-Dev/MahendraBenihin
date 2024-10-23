import React from "react";
import SliderForTestimonials from "./SliderForTestimonials";

export default function Testimonials() {
  const details = [
    {
      name: "Gracillin",
      role: "Customer",
      comment:
        "Amet mauris commodo quis imperdiet massa. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.",
      address: "Philippians",
      rating: 5,
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-testimonial-img-04.jpg",
    },
    {
      name: "Sara Jacob",
      role: "Customer",
      comment:
        "Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Dictum non consectetur a erat nam at lectus.",
      address: "Canada",
      rating: 5,
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-testimonial-img-03.jpg",
    },
    {
      name: "Dr. Ravinayer",
      role: "Customer",
      comment:
        "Et ultrices neque ornare aenean euismod elementum nisi quis. Risus nullam eget felis eget volutpat blandit.",
      address: "Losangles,lJS",
      rating: 5,
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-testimonial-img-02.jpg",
    },
    {
      name: "Marnie",
      role: "Customer",
      comment:
        "Ut eu sem integer vitae justo. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.",
      address: "Losangles,US",
      rating: 5,
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-testimonial-img-01.jpg",
    },
  ];
  return (
    <div className=" w-full py-16 border-b  relative">
      <div className=" w-full sm:w-11/12 mx-auto">
        <div className="px-5 sm:px-0 ">
          <p className=" text-sm   text-gray-400 md:text-[#5a5a5a] w-full font-medium tracking-widest">
            Customer Reviews
          </p>
          <p className="  w-full   text-[#000000]  my-4 font-semibold text-4xl">
            Testimonials
          </p>
          <p className=" border-b-[3px] border-black w-20 my-5"></p>
        </div>
        <div className=" w-full  pt-3 sm:pt-10 ">
          <SliderForTestimonials data={details} />
        </div>
      </div>
    </div>
  );
}
