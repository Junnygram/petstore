import React from "react";
import "./EmptyFav.css";

const EmptyFav = () => {
  return (
    <div>
      <div className="Home">Home {">"} Wishlist</div>
      <div className="containingwish">
        <div className="wishlist">
          <h2 className="wishlist"> Wishlist</h2>
        </div>
        <div className="wish">
          <h1 className="oops">Oops Wishlist is empty!</h1>
          <br />
          <button className="shop">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyFav;
