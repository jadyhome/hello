import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="title">mother-tongue</div>
      <div className="to-translate-page">
        {
          <Link to="/translate" className="click">
            Click Me
          </Link>
        }
      </div>
    </div>
  );
};

export default Home;
