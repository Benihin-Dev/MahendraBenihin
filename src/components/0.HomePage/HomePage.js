import React, { useState } from "react";
import SearchComponent from "../MiniComponents/SearchComponent";
import Hero from "../2.Hero/Hero";
import GlobleBrand from "../3.GlobleBrand/GlobleBrand";
import CoolLook from "../4.CoolLook/CoolLook";
import RecentProducts from "../5.RecentProducts/RecentProducts";
import Video from "../6.Video/Video";
import SupremeQuality from "../7.SupremeQuality/SupremeQuality";
import BgComponentWithoutBg from "../MiniComponents/BgComponentWithoutBg";
import ComprehensiveDesign from "../8.ComprehensiveDesign/ComprehensiveDesign";
import Review from "../9.Review/Review";
import RecentBlogs from "../10.RecentBlogs/RecentBlogs";
import Features from "../11.Features/Features";
import Blog from "../12.Blog/Blog";
import Footer from "../13.Footer/Footer";
import WelcomeBanner from "../MiniComponents/WelcomeBanner";
import MainHeader from "../1.Header/MainHeader";

export default function HomePage() {
  const [searchComponent, setSearchComponent] = useState(false);
  const productDetails = [
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-11-4.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-3-3.jpg",
      ],
      name: "Double Breasted Blazer",
      priceRange: "$8.00 – $580.00",
    },
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-10-4.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-4-3.jpg",
      ],
      name: "Retro Style Blazer",
      priceRange: "$8.00 – $335.00",
    },
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-9-3.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-3-3.jpg",
      ],
      name: "Fashion Plaid Business Blazer",
      priceRange: "$8.00 – $440.00",
    },
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-8-3.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-4-3.jpg",
      ],
      name: "Wedding Style Blazer",
      priceRange: "$8.00 – $590.00",
    },
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-7-2.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-9-1.jpg",
      ],
      name: "Casual & Partywear Jacket",
      priceRange: "$8.00 – $530.00",
    },
    {
      imgs: [
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-6-1.jpg",
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-5-2.jpg",
      ],
      name: "Solid Casual Blazer",
      priceRange: "$8.00 – $490.00",
    },
  ];

  return (
    <div className=" font-jost overflow-hidden ">
      <MainHeader setSearchComponent={setSearchComponent} />
      <Hero />
      <GlobleBrand />
      <CoolLook />
      <RecentProducts productDetails={productDetails} />
      <div className=" relative">
        <Video />
        <SupremeQuality productDetails={productDetails} />
        <ComprehensiveDesign productDetails={productDetails} />
        <BgComponentWithoutBg
          bgImg={
            "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/product-bg.jpg"
          }
        />
      </div>
      <Review />
      <RecentBlogs />
      <Features />
      <Blog />
      <Footer />
      <WelcomeBanner />
      {searchComponent && (
        <SearchComponent setSearchComponent={setSearchComponent} />
      )}
    </div>
  );
}
