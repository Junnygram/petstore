import React from "react";
import "./Favourite.css";
import PetCard from "../../components/PetCard";
import { petDeets } from "../../dummy";
import RecentlyViewed from "../../components/RecentlyViewed";

const Section = () => {
  return (
    <>
      <div className="main">
        <div className="home">
          <h5>Home {">"} Favourite</h5>
        </div>
        <div>
          <div className="container">
            <header className="favourite">Favourite</header>
            <div className="petcard">
              {petDeets.map((pet) => (
                <PetCard
                  key={pet.id}
                  image={pet.img}
                  breed={pet.breed}
                  price={pet.price}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="button">
          <button className="deletebtn">Delete All</button>
        </div>
        {/* </div> */}
      </div>
      <div>
        <RecentlyViewed />
      </div>
      );
    </>
  );
};

export default Section;
