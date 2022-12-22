import React from "react";
import EmptyCart from "./EmptyCart";
import RecentlyViewed from "../../components/RecentlyViewed";
import "./EmptyCart.css";

const Empty = () => {
  return (
    <>
      <EmptyCart />
      <RecentlyViewed />
      <img
        className="petimg"
        src="https://github.com/Junnygram/petzzi-contents/blob/main/Dog.png?raw=true"
        alt=""
      />
    </>
  );
};

export default Empty;
