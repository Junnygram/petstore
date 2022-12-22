import React from "react";
import "./Empty.css";

const EmptyCart = () => {
  return (
    <>
      <div>
        <div className="Home">Home {">"}</div>

        <div className="containingdiv">
          <img
            className="petimg"
            src="https://github.com/Junnygram/petzzi-contents/blob/main/empty-cart%201.png?raw=true"
            alt=""
          />
          <h1>Your Cart Is Currently Empty</h1>
          <br />
          <h5>
            Before the checkout you must add some products to your shopping cart{" "}
            <br /> You will find a lot interresting product on our "shop" page.
          </h5>
          <br />
          <button className="returnbtn">Return To Shop</button>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
