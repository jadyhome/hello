import React from "react";
import { Link } from "react-router-dom";

const Saved = (props) => {
  return (
    <div className="saved-page">

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
      </div>

      
    </div>
  );
};

export default Saved;
