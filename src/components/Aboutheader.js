import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const Aboutheader = () => {
  return (
    <div className="mainheader">
      <div className="info">
        <Link to="/aboutus">
          <button className="infobtn">About Us</button>
        </Link>
        <Link to="/contactus">
          <button className="infobtn">Contact Us</button>
        </Link>
        <Link to="/team">
          <button className="infobtn">Team</button>{" "}
        </Link>
        <Link to="/careers">
          <button className="infobtn">Careers</button>
        </Link>
        <Link to="/faqs">
          <button className="infobtn">FAQs</button>
        </Link>
      </div>
    </div>
  );
};

export default Aboutheader;
