import React from "react";
import "./EmptyFav.css";

const Scroll = () => {
  return (
    <div className="pagination">
      <span>Previous</span>
      <span className="active">1</span>
      <span>2</span>
      <span>3</span>
      <span>Next</span>
    </div>
  );
};

export default Scroll;
