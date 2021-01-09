import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Korean = () => {
  return (
    <div>
      <h1>Korean</h1>
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
      </div>
    </div>
  );
};

export default Korean;
