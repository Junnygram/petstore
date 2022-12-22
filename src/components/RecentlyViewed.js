import React from "react";
import { CarouselContainer as Container } from "./Component.styled";
import { RightArrow } from "./icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { petDeets } from "../dummy";
import PetCard from "./PetCard";

const RecentlyViewed = () => {
  return (
    <Container>
      <div className="header-top">
        <h2>Recently Viewed</h2>
        <span>
          SEE ALL <RightArrow />
        </span>
      </div>
      <div className="body">
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "30px",
            height: "350px",
            width: "100%",
          }}
        >
          {petDeets.map((pet) => (
            <SplideSlide key={pet.id}>
              <PetCard image={pet.img} breed={pet.breed} price={pet.price} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Container>
  );
};

export default RecentlyViewed;
