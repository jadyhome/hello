import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Japanese = () => {
  return (
    <div>
      <h1>Japanese</h1>
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/chinese">chinese</Link>}
      </div>
    </div>
  );
};

export default Japanese;
