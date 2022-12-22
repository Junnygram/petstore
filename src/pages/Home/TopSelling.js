import React from "react";
import { CarouselContainer as Container } from "../../components/Component.styled";
import { RightArrow } from "../../components/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { petDeets } from "../../dummy";
import PetCard from "../../components/PetCard";

const TopSelling = () => {
  return (
    <Container>
      <div className="header-top">
        <h2>Top Selling Pets</h2>
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

export default TopSelling;
