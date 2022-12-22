import React from "react";
import Aboutheader from "../../../components/Aboutheader";
import "./contactus.css";
import TopHeader from "../../Home/TopHeader";
const Contactus = () => {
  return (
    <div>
      <Aboutheader />
      <div className="contact">
        <div className="contactusheading">
          <img
            className="telephone"
            src="https://github.com/Junnygram/petzzi-contents/blob/main/telephone.png?raw=true"
          />
          <h3>CONTACT US</h3>
        </div>
        <div className="placing">
          <div className="placement1">
            <div>
              <img
                className="image1"
                src="https://github.com/Junnygram/petzzi-contents/blob/main/contact1.png?raw=true"
              />
            </div>
            <div>
              <div className="contacting">
                <div className="column">
                  <img
                    src="https://github.com/Junnygram/petzzi-contents/blob/main/gps.png?raw=true"
                    alt=""
                  />
                  <h3>Our Location</h3>
                  <h6>
                    Plot 1106 Adeola Hopewell street Victoria island, Lagos
                    Nigeria.
                  </h6>
                </div>
                <div>
                  {" "}
                  <img
                    src="https://github.com/Junnygram/petzzi-contents/blob/main/telephone2.png?raw=true"
                    alt=""
                  />
                  <h3>Contact Phone</h3>
                  <h6>
                    +234 812 515 4778, +234 812 642 2623, +234 906 052 5080,
                    +234 902 848 4806 +234815 220 3871
                  </h6>
                </div>
                <div>
                  {" "}
                  <img
                    src="https://github.com/Junnygram/petzzi-contents/blob/main/email.png?raw=true"
                    alt=""
                  />
                  <h3>Email Address</h3>
                  <h6>pettzi94@gmal.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="placement2"
              src="https://github.com/Junnygram/petzzi-contents/blob/main/map.png?raw=true"
              alt=""
            />
          </div>
        </div>
        <TopHeader />
      </div>
    </div>
  );
};

export default Contactus;
