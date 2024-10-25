import React, { useState, useEffect, useRef } from "react";
import Header from "../../1.Header/js/Header";
import Hero from "../../2.Hero/js/Hero";
import Categories from "../../3.Categories/js/Categories";
import ExclusiveSale from "../../4.ExclusiveSale/js/ExclusiveSale";
import Collections from "../../5.Collections/js/Collections";
import Video from "../../6.Video/js/Video";
import FeaturedProducts from "../../7.FeaturedProducts/js/FeaturedProducts";
import Brands from "../../8.Brands/js/Brands";
import Zaccaria from "../../9.Zaccaria/js/Zaccaria";
import Testimonials from "../../10.Testimonials/js/Testimonials";
import FollowUs from "../../11.FollowUs/js/FollowUs";
import Footer from "../../12.Footer/js/Footer";
import SlideUpBtn from "../../MiniComponents/js/SlideUpBtn";
import SlideUpProductBanner from "../../13.SlideUpProductBanner/js/SlideUpProductBanner";
import WelcomeBanner from "../../MiniComponents/js/WelcomeBanner";
import TitleText from "../../MiniComponents/js/TitleText";

export default function HomePage() {
  const [showSlideUpBtn, setShowSlideUpBtn] = useState(false);
  const topSectionRef = useRef(null);
  const [showTitleText, setShowTitleText] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSlideUpBtn(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }

    return () => {
      if (topSectionRef.current) {
        observer.unobserve(topSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitleText(false); // Hide TitleText after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="  relative font-inter overflow-hidden">
      <div ref={topSectionRef} name="top-section">
        <Header />
      </div>
      <Hero />
      <Categories />
      <ExclusiveSale />
      <Collections />
      <Video />
      <FeaturedProducts />
      <Brands />
      <Zaccaria />
      <Testimonials />
      <FollowUs />
      <Footer />
      {showSlideUpBtn && <SlideUpBtn />}
      <SlideUpProductBanner />
      <WelcomeBanner />
      {showTitleText && <TitleText />}
    </div>
  );
}
