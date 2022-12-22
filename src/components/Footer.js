import React from "react";
import { Footer as Foot } from "./Component.styled";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Mastercard,
  Visa,
  Paypal,
} from "./icons";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <Foot>
        <Newsletter />
        <div className="footer-grid">
          <div className="logo">
            <img
              src="https://github.com/Moyeenwaz/pet-store-images/blob/main/dog%20(1).png?raw=true"
              alt=""
            />
            <span>Pettzi</span>
          </div>
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li>Training</li>
              <li>Pet Spa</li>
              <li>Cleaning</li>
              <li>Animal Clinic</li>
            </ul>
          </div>
          <div className="support">
            <h3>Support</h3>
            <ul>
              <li>My Support</li>
              <li>FAQ</li>
              <li>FAQ</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="about">
            <h3>About us</h3>
            <ul>
              <li>Who we are</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog and news</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact">
            <h3>Contact us</h3>
            <p>petzy123@gmail.com</p>
            <p>+244 555 555 5555</p>
          </div>
        </div>
        <div className="socials-container">
          <Facebook />
          <Instagram />
          <Twitter />
          <YouTube />
        </div>
        <p className="copyright">
          Copyright © thepetstore. All Rights Reserved. Designed by thepetstore
        </p>
        <div className="payment">
          <Mastercard />
          <Visa />
          <Paypal />
        </div>
      </Foot>
    </>
  );
};

export default Footer;
