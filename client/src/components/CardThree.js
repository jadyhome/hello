import React from "react";
import "../styles/CardThree.css";

const CardThree = ({ name, comment }) => {
  return (
    <div className="cardthree">
      <div className="datathree">
        <div className="name">
          <h5>name: {name}</h5>
        </div>

        <div className="comment">
          <h5>comment: {comment}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
