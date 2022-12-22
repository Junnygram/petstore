import React from "react";
import { PetCard as Card } from "./Component.styled";
import { Fav, CardCartIcon, StarFilled } from "./icons";

const PetCard = ({ image, breed, price, isGridItem }) => {
  return (
    <Card isGridItem={isGridItem}>
      <div className="top">
        <Fav />
        <img src={image} alt={breed} />
      </div>
      <div className="bottom">
        <div className="details">
          <h3>{breed}</h3>
          <div className="ratings">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
          <h4>N{price}</h4>
        </div>
        <CardCartIcon />
      </div>
    </Card>
  );
};

export default PetCard;
