import styled from "styled-components";

export const Navbar = styled.nav`
  height: 83px;
  background-color: #1f74af;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      color: white;
      font-family: "Trocchi";
      font-weight: 400;
      font-size: 1.8rem;
    }
  }
  .middle {
    display: flex;
    background: white;
    align-items: center;
    gap: 10px;
    width: 40%;
    border-radius: 5px;
    padding: 0 40px;
    height: 45px;
    input {
      outline: none;
      background-color: transparent;
      border: none;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 30px;
    .nav-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      color: white;
    }
    .demacation {
      height: 70px;
      width: 2px;
      background: white;
      border-radius: 50%;
    }
    button {
      background: none;
      border: none;
      padding: 0 30px;
      height: 33.52px;
      color: white;
      border: 2.76px solid #ffffff;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease-in;
      &:hover {
        background: white;
        color: #1f74af;
        transform: scale(1.1);
      }
    }
  }
`;

export const Footer = styled.footer`
  background: #459ad5;
  min-height: 500px;
  padding: 156px 90px 33px 90px;
  position: relative;
  color: white;
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr repeat(5, 1fr);
    gap: 20px;
    margin-top: 72px;
    h3 {
      font-size: 22px;
      font-weight: 700;
    }
    ul {
      list-style: none;
      li {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 5px;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      place-self: start;
      span {
        font-size: 4rem;
      }
    }
  }
  .socials-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    margin-top: 10px;
  }
  .copyright {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-top: 100px;
  }
  .payment {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }
`;

export const PetCard = styled.div`
  padding-bottom: 15px;
  width: ${({ isGridItem }) => (isGridItem ? "100%" : "272px")};
  min-height: 300px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 10px 13px -6px rgba(0, 0, 0, 0.75);
  position: relative;
  svg {
    cursor: pointer;
  }

  .top {
    min-height: 200px;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
    }
    svg {
      position: absolute;
      z-index: 30;
      right: 10px;
      top: 20px;
    }
  }
  .bottom {
    padding: 10px 16px 0;
    display: flex;
    justify-content: space-between;
    .details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
      h3 {
        font-family: "Inter";
        font-weight: 600;
        font-size: 22.1678px;
        letter-spacing: 1px;
      }
      h4 {
        font-family: "Inter";
        font-weight: 800;
        font-size: 16px;
      }
    }
    svg {
      align-self: end;
    }
  }
`;

export const NewsLetter = styled.div`
  width: 90%;
  margin-bottom: -60px;
  z-index: 999;
  background: #f4f4f4;
  border-radius: 20px;
  height: 200px;
  padding: 44px 52px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: -70px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .text-container {
    flex: 1;
    h1 {
      font-size: 2rem;
      color: black;
      font-weight: 800px;
      line-height: 41px;
    }
    p {
      font-weight: 600px;
      color: #7c7c7c;
      font-size: 1rem;
      margin-top: 11px;
    }
  }
  .form-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .input-container {
      display: flex;
      gap: 20px;
      input {
        outline: none;
        padding: 11px 17px;
        background-color: white;
        border: none;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 200px;
        height: 41px;
      }
    }
    button {
      background: #04709a;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: none;
      width: 400px;
      height: 41px;
      color: white;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease-in;
      &:hover {
        background: white;
        color: #1f74af;
      }
    }
  }
`;

export const CarouselContainer = styled.div`
  background: #f9f9f9;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 95%;
  margin: 100px auto;

  .header-top {
    padding: 20px 45px;
    background: #c9c9c9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    h2 {
      font-weight: 700;
      font-size: 27px;
    }
    span {
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .body {
    padding: 44px 34px;
  }
`;
