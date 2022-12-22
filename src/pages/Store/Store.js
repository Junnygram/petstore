import React from "react";
import RecentlyViewed from "../../components/RecentlyViewed";
import Sidebar from "./Sidebar";
import { Shop, Container } from "./StoreComponents.styled";
import Wrapper from "./Wrapper";

const Store = () => {
  return (
    <Container>
      <Shop>
        <Sidebar />
        <Wrapper />
      </Shop>
      <RecentlyViewed />
    </Container>
  );
};

export default Store;
