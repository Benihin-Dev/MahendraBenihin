import React, { useState } from "react";
import TopSlidingBanner from "./TopSlidingBanner";
import BottomHeaderSection from "./BottomHeaderSection";
import NavSectionForSmScreen from "./NavSectionForSmScreen";
import HomeLinks from "./SubNavLinkComponents/HomeLinks";
import ShopLinks from "./SubNavLinkComponents/ShopLinks";
import ProductLinks from "./SubNavLinkComponents/ProductLinks";
import BlogLinks from "./SubNavLinkComponents/BlogLinks";
import PageLinks from "./SubNavLinkComponents/PageLinks";

export default function Header() {
  const headerItems = [
    {
      name: "Home",
      innerItem: <HomeLinks />,
    },
    {
      name: "shop",
      innerItem: <ShopLinks />,
    },
    {
      name: "product",
      innerItem: <ProductLinks />,
    },
    {
      name: "blog",
      innerItem: <BlogLinks />,
    },
    {
      name: "pages",
      links: [
        "About Page",
        "FAQ",
        "Login Page",
        "Order Tracking",
        "Team Members",
        "Shipping Information",
        "Our Store Locations",
        "Gallery",
      ],
      innerItem: <PageLinks />,
    },
    {
      name: "gift cart",
      innerItem: false,
    },
    {
      name: "contact",
      innerItem: false,
    },
  ];
  const [stateForSmNavSection, setStateForSmNavSection] = useState(false);
  return (
    <div>
      <TopSlidingBanner />
      <BottomHeaderSection
        headerItems={headerItems}
        setStateForSmNavSection={setStateForSmNavSection}
      />
      {stateForSmNavSection && (
        <NavSectionForSmScreen
          headerItems={headerItems}
          stateForSmNavSection={stateForSmNavSection}
          setStateForSmNavSection={setStateForSmNavSection}
        />
      )}
    </div>
  );
}
