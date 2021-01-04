import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h3>mother-tongue</h3>

      <div className="to-translate-page">
        {<Link to="/translate">Click Me</Link>}
      </div>
    </div>
  );
};

export default Home;
