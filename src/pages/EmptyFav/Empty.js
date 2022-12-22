import React from "react";
import EmptyFav from "./EmptyFav";
import RecentlyViewed from "../../components/RecentlyViewed";
// import Scroll from "./scroll";

const EmptySection = () => {
  return (
    <>
      <EmptyFav />
      <RecentlyViewed />
      {/* <Scroll /> */}
    </>
  );
};

export default EmptySection;
