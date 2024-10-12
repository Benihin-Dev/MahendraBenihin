import React, { useEffect, useState, useRef } from "react";
import Header from "../../1.Header/js/Header";
import Hero from "../../2.Hero/js/Hero";
import FinalLTP from "../../3.LuxuriousTimePieces/js/FinalLTP";
import Products from "../../4.Products/js/Products";
import Testimonial from "../../6.Testimonial/js/Testimonial";
import Brands from "../../7.Brands/js/Brands";
import AboutUs from "../../8.AboutUs/js/AboutUs";
import FAQ from "../../9.FAQ/js/FAQ";
import Footer from "../../10.Footer/js/Footer";
import LuxuriousTimePieces from "../../3.LuxuriousTimePieces/js/LuxuriousTimePieces";
import Collections from "../../5.Collections/js/Collections";

export default function HomePage() {
  const topSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const [topSectionHeight, setTopSectionHeight] = useState(0);
  const [secondSectionHeight, setSecondSectionHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (topSectionRef.current) {
        let topSectH = topSectionRef.current.clientHeight;
        setTopSectionHeight(topSectH);
        // console.log(topSectH);
      }

      if (secondSectionRef.current) {
        let secondSectH = secondSectionRef.current.clientHeight;
        setSecondSectionHeight((secondSectH / window.innerHeight) * 100);
        // console.log((secondSectH / window.innerHeight) * 100);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [topSectionHeight, secondSectionHeight]);

  return (
    <div className="   overflow-x-hidden">
      <div ref={topSectionRef}>
        <Header />
        <Hero />
      </div>
      <div ref={secondSectionRef}>
        <LuxuriousTimePieces topSectionHeight={topSectionHeight} />
        <Products />
      </div>
      <Collections
        secondSectionHeight={secondSectionHeight}
        topSectionHeight={topSectionHeight}
      />
      <Testimonial />
      <Brands />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}
