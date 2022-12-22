import React from "react";
import TopHeader from "./TopHeader";
import Featured from "./Featured";
import MiddleSection from "./MiddleSection";
import TopSelling from "./TopSelling";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Featured />
      <MiddleSection />
      <TopSelling />
    </>
  );
};

export default Home;
