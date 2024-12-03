import React from "react";
import linkHubImg from "../../imgs/linkhub.png";
import snapfolioImg from "../../imgs/snapfolio.png";
import healthGuradImg from "../../imgs/healthGuard.png";
import myraImg from "../../imgs/myra.png";
import bgImg from "../../imgs/bg.png";
import ContentForProject from "./ContentForProject";


export default function Projects() {
  const details = [
    {
      img: linkHubImg,
      title: "LinkHub",
      desc: "LinkHub is a social media ID management platform that enables users to organize and share their profiles effortlessly through a unique, customizable LinkHub ID. Built using the MERN stack, the platform ensures efficiency and user-friendly navigation.",
      type: "Web Solution",
      link: "",
    },
    {
      img: snapfolioImg,
      title: "Snapfolio",
      desc: "Snapfolio is a web-based solution built with the MERN stack, enabling users to create personalized portfolios by selecting a template and providing details such as their About section, education, skills, and projects. After submission, users receive a portfolio link featuring a consistent structure with customizable color themes.",
      type: "Web Solution",
      link: "",
    },
    {
      img: myraImg,
      title: "MyRa",
      desc: "MyRa is a school bus tracking system developed using GPS, GSM modules, and an Arduino board. The system is deployed on school buses to capture real-time coordinates, which are sent to parents or guardians at regular intervals (e.g., 10 or 20 minutes). Using these coordinates, parents can conveniently track their child's current location.",
      type: "Digital Components",
      link: false,
    },
    {
      img: healthGuradImg,
      title: "HealthGuard",
      desc: "HealthGuard is an advanced Pharmacy Management System designed to streamline pharmacy operations. It simplifies prescription processing, optimizes inventory management, and enhances patient care, all while improving efficiency and accuracy in day-to-day pharmacy tasks.",
      type: "C# | .Net Framework",
      link: false,
    },
    {
      img: "https://securuscomms.co.uk/wp-content/uploads/2021/05/Phishing-Attacks-That-Can-Impact-Your-Business-image.jpg",
      title: "Real-time Phishing Attack Detection",
      desc: "This is an ongoing project focused on real-time phishing attack detection using AI and ML techniques. The system analyzes URLs and HTML content to identify potential phishing threats and enhance online security.",
      type: "Web Solution",
      link: false,
    },
  ];
  return (
    <div className="  w-full relative   object-cover h-full">
      <div className=" w-full invisible ">
        <ContentForProject details={details} />
      </div>
      <div className=" absolute top-0 bg-[#1f1f1fca] left-0 z-20 w-full h-full">
        <ContentForProject details={details} />
      </div>

      <img
        src={bgImg}
        className="w-full h-full absolute top-0 left-0 z-10 blur-sm object-cover"
        alt=""
      />
    </div>
  );
}
