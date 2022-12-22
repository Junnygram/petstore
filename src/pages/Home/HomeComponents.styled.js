import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-family: "Inter", sans-serif;
  min-height: 350px;
  margin: 24px auto;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    z-index: 30;
    right: 50%;
    bottom: 50px;
    transform: translateX(50%);
    width: 240px;
    height: 60px;
    background: #1877f2;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      background: #010f7a;
    }
  }
`;

export const HeaderText = styled.h1`
  color: white;
  font-family: "Inter";
  font-weight: 700;
  font-size: 50px;
  position: absolute;
  z-index: 30;
  top: 100px;
  right: 50%;
  transform: translateX(50%);
`;

export const Section = styled.section`
  width: 90%;
  margin: 72px auto;
`;

export const SectionHeader = styled.div`
  font-family: "Inter", sans-serif;
  color: ${({ header }) =>
    header === "featured"
      ? " #4CBFA6"
      : header === "top-selling"
      ? "#000A57"
      : "#222"};
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const MidSection = styled(HeaderContainer)`
  width: 90%;
`;
export const MidText = styled.h1`
  color: white;
  font-family: "Inter";
  font-weight: 700;
  font-size: 50px;
  position: absolute;
  z-index: 30;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  text-align: center;
`;
