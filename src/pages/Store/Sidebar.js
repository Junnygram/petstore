import React from "react";
import { Sidebar as Container } from "./StoreComponents.styled";
import { availableBreeds } from "../../dummy";
import { StarFilled, StarUnFilled, SearchSm } from "../../components/icons";
import bird from "../../assets/bird.png";
import cat from "../../assets/cat.png";
import puppy from "../../assets/puppy.png";
const Sidebar = () => {
  return (
    <Container>
      <h2>Category</h2>
      <ul className="category">
        <li>
          <img src={puppy} alt="" />
          <span>Puppy</span>
        </li>
        <li>
          <img src={cat} alt="" />
          <span>Cats</span>
        </li>
        <li>
          <img src={bird} alt="" />
          <span>Birds</span>
        </li>
        <li>
          <img src={bird} alt="" />
          <span>Fish</span>
        </li>
      </ul>
      <div className="breed">
        <h2>BREED</h2>
        <div className="input">
          <SearchSm />
          <input type="text" placeholder="Search among 100+ breeds" />
        </div>
        <ul className="breeds">
          {availableBreeds.map((breed) => (
            <li key={breed.id}>
              <input type="checkbox" />
              <span>{breed.breed}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="price">
        <div className="top">
          <h2>Price(N)</h2>
          <span>APPLY</span>
        </div>
        <div className="input-container">
          <input type="number" />
          <span></span>
          <input type="number" />
        </div>
      </div>
      <div className="rating">
        <h2>PRODUCT RATING</h2>
        <ul className="stars">
          <li>
            <input type="radio" />
            <div className="star-icons">
              {" "}
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarUnFilled />
            </div>

            <span> & above</span>
          </li>
          <li>
            <input type="radio" />
            <div className="star-icons">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarUnFilled />
              <StarUnFilled />
            </div>

            <span> & above</span>
          </li>
          <li>
            <input type="radio" />
            <div className="star-icons">
              <StarFilled />
              <StarFilled />
              <StarUnFilled />
              <StarUnFilled />
              <StarUnFilled />
            </div>
            <span> & above</span>
          </li>
          <li>
            <input type="radio" />
            <div className="star-icons">
              <StarFilled />
              <StarUnFilled />
              <StarUnFilled />
              <StarUnFilled />
              <StarUnFilled />
            </div>
            <span> & above</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
