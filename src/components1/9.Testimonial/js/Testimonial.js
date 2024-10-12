import React from "react";
import SliderForTestimonial from "./SliderForTestimonial";

export default function Testimonial() {
  const data = [
    {
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/testimonials/image-1.png",
      name: "Abigail Lily Taylor",
      role: "Customer",
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Habitant aenean ornare arcu enim ultrices odio. Cras rhoncus elementum tempor turpis ullamcorper egestas nulla pulvinar tellus nunc enim ipsum. At viverra sed feugiat ipsum egestas.",
    },
    {
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/testimonials/image-2.png",
      name: "Abigail Lily Taylor",
      role: "Customer",
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Habitant aenean ornare arcu enim ultrices odio. Cras rhoncus elementum tempor turpis ullamcorper egestas nulla pulvinar tellus nunc enim ipsum. At viverra sed feugiat ipsum egestas.",
    },
    {
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/testimonials/image-3.png",
      name: "Abigail Lily Taylor",
      role: "Customer",
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Habitant aenean ornare arcu enim ultrices odio. Cras rhoncus elementum tempor turpis ullamcorper egestas nulla pulvinar tellus nunc enim ipsum. At viverra sed feugiat ipsum egestas.",
    },
    {
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/testimonials/image-4.png",
      name: "Abigail Lily Taylor",
      role: "Customer",
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Habitant aenean ornare arcu enim ultrices odio. Cras rhoncus elementum tempor turpis ullamcorper egestas nulla pulvinar tellus nunc enim ipsum. At viverra sed feugiat ipsum egestas.",
    },
    {
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/testimonials/image-5.png",
      name: "Abigail Lily Taylor",
      role: "Customer",
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Habitant aenean ornare arcu enim ultrices odio. Cras rhoncus elementum tempor turpis ullamcorper egestas nulla pulvinar tellus nunc enim ipsum. At viverra sed feugiat ipsum egestas.",
    },
  ];
  return (
    <div className=" w-full px-5 md:px-10 bg-[#f4f1f1] py-10">
      <SliderForTestimonial data={data} />
    </div>
  );
}
