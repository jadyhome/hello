import React from "react";
import "../styles/CardTwo.css";

const CardTwo = ({ from, to, phrases, translation, romanization }) => {
  return (
    <div className="cardtwo">
      <div className="datatwo">
        <div className="from">
          <h5>from: {from}</h5>
        </div>

        <div className="to">
          <h5>to: {to}</h5>
        </div>

        <div className="phrases">
          <h5>phrase: {phrases}</h5>
        </div>

        <div className="translation">
          <h5>translation: {translation}</h5>
        </div>

        <div className="romanization">
          <h5>romanization: {romanization}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
