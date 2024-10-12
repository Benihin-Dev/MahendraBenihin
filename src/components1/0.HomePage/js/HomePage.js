import React, { useState, useEffect, useRef } from "react";
import Hero from "../../2.Hero/js/Hero";
import TransparentBg from "../../2.Hero/js/TransparentBg";
import TrendingProducts from "../../3.TrendingPoducts/js/TrendingProducts";
import TrendingProducts2 from "../../6.TrendingPoducts/js/TrendingProducts2";
import RecentArticle from "../../10.RecentArticle/js/RecentArticle";
import Footer from "../../11.Footer/js/Footer";
import CoreFeatures from "../../8.CoreFeatures/js/CoreFeatures";
import Temp from "../../8.CoreFeatures/js/Temp";
import FrontSection from "../../8.CoreFeatures/js/FrontSection";
import FinalSection from "../../8.CoreFeatures/js/FinalSection";
import Video from "../../5.Video/js/Video";
import FirstSection from "../../7.Brands/js/FirstSection";
import Brand from "../../7.Brands/js/Brand";
import TransperentComponent from "../../7.Brands/js/TransperentComponent";
import FinalSection2 from "../../7.Brands/js/FinalSection";
import Collection from "../../4.Collections/js/Collection";
import CollectionFrontSection from "../../4.Collections/js/CollectionFrontSection";
import CollectionFinalSection from "../../4.Collections/js/CollectionFinalSection";
import Testimonial from "../../9.Testimonial/js/Testimonial";

export default function HomePage({ setShowSearchComponent }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionForImg, setScrollPositionForImg] = useState(0);
  const [isCoreFeaturesSticky, setIsCoreFeaturesSticky] = useState(false);
  const [isCoreFeaturesHide, setIsCoreFeaturesHide] = useState(false);
  const [isBrandHide, setIsBrandHide] = useState(false);
  const [isBrandShow, setIsBrandShow] = useState(false);
  const [isCollectionHide, setIsCollectionHide] = useState(false);
  const [isCollectionShow, setIsCollectionShow] = useState(false);
  const mainComponentRef = useRef(null);
  const miniComponentRef = useRef(null);
  const brandComponentRef = useRef(null);
  const coreFeaturesRef = useRef(null);
  const brandFirstSecRef = useRef(null);
  const brandFinalSecRef = useRef(null);
  const collectionFirstSecRef = useRef(null);
  const collectionFinalSecRef = useRef(null);
  const tempRef = useRef(null); // Add ref for Temp section

  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const [miniComponentHeight, setMiniComponentHeight] = useState(0);
  const [brandComponentHeight, setBrandsComponentHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((window.scrollY / window.innerHeight) * 50);
      setScrollPositionForImg((window.scrollY / window.innerHeight) * 100);

      // Check the CoreFeatures position relative to the top of the viewport
      if (coreFeaturesRef.current) {
        const coreFeaturesTop =
          coreFeaturesRef.current.getBoundingClientRect().top;

        if (coreFeaturesTop <= 0) {
          setIsCoreFeaturesSticky(true);
        } else {
          setIsCoreFeaturesSticky(false);
        }
      }

      // Check the Brand FirstSection position relative to the top of the viewport
      if (brandFirstSecRef.current) {
        const brandTop = brandFirstSecRef.current.getBoundingClientRect().top;

        if (brandTop <= 0) {
          setIsBrandHide(true);
        } else {
          setIsBrandHide(false);
        }
      }

      // Check the Collection FirstSection position relative to the top of the viewport
      if (collectionFirstSecRef.current) {
        const collectionTop =
          collectionFirstSecRef.current.getBoundingClientRect().top;

        if (collectionTop <= 0) {
          setIsCollectionHide(true);
        } else {
          setIsCollectionHide(false);
        }
      }

      // Check the Brand FinalSection position relative to the top of the viewport
      if (brandFinalSecRef.current) {
        const brandTop = brandFinalSecRef.current.getBoundingClientRect().top;

        if (brandTop <= 0) {
          setIsBrandShow(true);
        } else {
          setIsBrandShow(false);
        }
      }

      // Check the Collection FinalSection position relative to the top of the viewport
      if (collectionFinalSecRef.current) {
        const brandTop =
          collectionFinalSecRef.current.getBoundingClientRect().top;

        if (brandTop <= 0) {
          setIsCollectionShow(true);
        } else {
          setIsCollectionShow(false);
        }
      }

      // Check the CoreFeatures position relative to the top of the viewport
      if (tempRef.current) {
        const coreFeaturesTop = tempRef.current.getBoundingClientRect().top;

        if (coreFeaturesTop <= 0) {
          setIsCoreFeaturesHide(true);
        } else {
          setIsCoreFeaturesHide(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mainComponentRef.current) {
      setMainComponentHeight(
        (mainComponentRef.current.offsetHeight / window.innerHeight) * 100
      );
    }

    if (brandComponentRef.current) {
      setBrandsComponentHeight(
        (brandComponentRef.current.offsetHeight / window.innerHeight) * 100
      );
    }

    if (miniComponentRef.current) {
      setMiniComponentHeight(
        (miniComponentRef.current.offsetHeight / window.innerHeight) * 100
      );
    }

    const handleResize = () => {
      if (mainComponentRef.current) {
        setMainComponentHeight(
          (mainComponentRef.current.offsetHeight / window.innerHeight) * 100
        );
      }
      if (brandComponentRef.current) {
        setBrandsComponentHeight(
          (brandComponentRef.current.offsetHeight / window.innerHeight) * 100
        );
      }
      if (miniComponentRef.current) {
        setMiniComponentHeight(
          (miniComponentRef.current.offsetHeight / window.innerHeight) * 100
        );
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [mainComponentHeight, brandComponentHeight, miniComponentHeight]);

  return (
    <div className="font-romansStyle bg-transparent overflow-hidden">
      <div ref={mainComponentRef} className={`w-full `}>
        <div ref={miniComponentRef} className={`w-full  `}>
          <TransparentBg />
          <div
            className={`${
              scrollPosition >= 60 ? "hidden" : "fixed top-0 z-30 left-0 w-full"
            }`}
          >
            <Hero
              setShowSearchComponent={setShowSearchComponent}
              scrollPosition={scrollPosition}
              scrollPositionForImg={scrollPositionForImg}
            />
          </div>
          <Hero scrollPosition={scrollPosition} />
          <TrendingProducts />
        </div>
        <div
          ref={collectionFirstSecRef}
          className={`  ${isCollectionHide ? " opacity-0 " : "  "} `}
        >
          <CollectionFrontSection />
        </div>
        <div className=" w-full h-[200vh] bg-transparent"></div>
        <div
          ref={collectionFinalSecRef}
          className={`  ${
            isCollectionShow ? " opacity-100 " : "  opacity-0 "
          } `}
        >
          <CollectionFinalSection />
        </div>
        <Video />
        <div ref={brandComponentRef}>
          <div
            ref={brandFirstSecRef}
            className={`  ${isBrandHide ? " opacity-0 " : "  "} `}
          >
            <FirstSection />
          </div>
          <TransperentComponent />
          <div
            ref={brandFinalSecRef}
            className={`  ${isBrandShow ? " opacity-100 " : "  opacity-0 "} `}
          >
            <FinalSection2 />
          </div>
          <div
            className={`${
              isBrandShow ? " opacity-0 " : "  opacity-100 "
            } top-0 left-0 fixed -z-10 `}
          >
            <Brand
              mainComponentHeight={mainComponentHeight}
              brandComponentHeight={brandComponentHeight}
            />
          </div>
        </div>
      </div>

      <Collection miniComponentHeight={miniComponentHeight} />

      <div>
        <div
          className={`  ${isCoreFeaturesSticky ? " opacity-0 " : " "}  `}
          ref={coreFeaturesRef}
        >
          <FrontSection />
        </div>
        <div
          className={`  ${
            isCoreFeaturesSticky ? "  " : "   opacity-0 "
          }    top-0 left-0 fixed -z-10`}
        >
          <CoreFeatures mainComponentHeight={mainComponentHeight} />
        </div>

        <div className="w-full">
          <Temp />
        </div>
        <div
          ref={tempRef}
          className={`  ${isCoreFeaturesHide ? " opacity-100" : "opacity-0"}  `}
        >
          <FinalSection />
        </div>
      </div>
      <TrendingProducts2 />
      <Testimonial />
      <RecentArticle />
      <Footer />
    </div>
  );
}
