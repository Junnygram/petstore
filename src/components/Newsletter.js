import React from "react";
import { NewsLetter as Container } from "./Component.styled";

const Newsletter = () => {
  return (
    <Container>
      <div className="text-container">
        <h1>NewsLetter</h1>
        <p>Sign up to get updates, news insights and promotions</p>
      </div>
      <div className="form-container">
        <div className="input-container">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Name" />
        </div>
        <button>Sign Up</button>
      </div>
    </Container>
  );
};

export default Newsletter;
