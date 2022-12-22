import React from "react";
import Aboutheader from "../../../components/Aboutheader";
import "./about.css";

const Aboutus = () => {
  return (
    <div className="abt">
      <Aboutheader />
      <div className="about">
        <div className="aboutimage">
          <img src="https://github.com/Junnygram/petzzi-contents/blob/main/frame1.png?raw=true" />
        </div>

        <div className="aboutimage">
          <img src="https://github.com/Junnygram/petzzi-contents/blob/main/frame2.png?raw=true" />
        </div>

        <div className="aboutimage">
          <img src="https://github.com/Junnygram/petzzi-contents/blob/main/frame3.png?raw=true" />
        </div>

        <div className="aboutimage">
          <img src="https://github.com/Junnygram/petzzi-contents/blob/main/frame4.png?raw=true" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
