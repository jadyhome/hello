import React from "react";
import "../styles/Card.css";

const Card = ({ phrases, translation, romanization }) => {
  return (
    <div className="card">
      <div className="data-wrap">
        <div className="english">
          <h5>{phrases}</h5>
        </div>

        <div className="translation">
          <h5>{translation}</h5>
        </div>

        <div className="romanization">
          <h5>{romanization}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
