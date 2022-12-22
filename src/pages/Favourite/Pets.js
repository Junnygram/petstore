import React from "react";

const Pets = () => {
  return (
    <>
      <FeaturedIcon />
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "52px",
          height: "400px",
          width: "100%",
        }}
      >
        {petDeets.map((pet) => (
          <SplideSlide key={pet.id}>
            <PetCard image={pet.img} breed={pet.breed} price={pet.price} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Pets;
